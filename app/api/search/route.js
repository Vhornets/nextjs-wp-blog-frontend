import { NextResponse } from "next/server";

const PAGE_SIZE = 3;

export async function POST(req) {
  try {
    const filters = await req.json();

    let minPriceFilter = "";
    let maxPriceFilter = "";
    let hasParkingFilter = "";
    let petFriendlyFilter = "";

    if (filters.minPrice) {
      minPriceFilter = `
        {
          type:NUMERIC,
          key: "price", 
          compare: GREATER_THAN_OR_EQUAL_TO, 
          value: "${filters.minPrice}"
        }
      `;
    }

    if (filters.maxPrice) {
      maxPriceFilter = `
        {
          type:NUMERIC,
          key: "price", 
          compare: LESS_THAN_OR_EQUAL_TO, 
          value: "${filters.maxPrice}"
        }
      `;
    }

    if (filters.hasParking) {
      hasParkingFilter = `
        {
          key: "has_parking", 
          compare: EQUAL_TO, 
          value: "1"
        }
      `;
    }

    if (filters.petFriendly) {
      petFriendlyFilter = `
        {
          key: "pet_friendly", 
          compare: EQUAL_TO, 
          value: "1"
        }
      `;
    }

    const params = {
      query: `
        query AllPropertiesQuery {
          properties(where: {
            offsetPagination: { size: ${PAGE_SIZE}, offset: ${
        ((filters.page || 1) - 1) * PAGE_SIZE
      } }
        metaQuery: {
        relation: AND
        metaArray: [
          ${hasParkingFilter}
          ${petFriendlyFilter}
          ${minPriceFilter}
          ${maxPriceFilter}
        ]}
    }) {
            pageInfo {
              offsetPagination {
                total
              }
            }
            nodes {
              databaseId
              title
              uri
              propertyFeatures {
                bathrooms
                bedrooms
                hasParking
                petFriendly
                price
              }
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      `,
    };

    const res = await fetch(process.env.WP_GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    const { data } = await res.json();

    return NextResponse.json({
      total: data.properties.pageInfo.offsetPagination.total,
      properties: data.properties.nodes,
    });
  } catch (error) {}
}
