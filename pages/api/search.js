import { gql } from "@apollo/client";
import client from "client";
const PAGE_SIZE = 3;

const handler = async (req, res) => {
  try {
    const filters = JSON.parse(req.body);

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

    const { data } = await client.query({
      query: gql`
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
    });

    return res.status(200).json({
      total: data.properties.pageInfo.offsetPagination.total,
      properties: data.properties.nodes,
    });
  } catch (error) {}
};

export default handler;
