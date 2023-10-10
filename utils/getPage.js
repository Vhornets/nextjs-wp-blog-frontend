import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks";
import dayjs from "dayjs";

export const getPage = async (uri) => {
  const params = {
    query: `
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            title
            blocksJSON
          }
          ... on Post {
            date
            title
            blocksJSON
            categories {
              nodes {
                name
                slug
                uri
              }
            }            
            featuredImage {
              node {
                sourceUrl
                mediaDetails {
                  height
                  width
                }
              }
            }
          }
          ... on Tutorial {
            date
            title
            blocksJSON
            tutorialCategories {
              nodes {
                name
                slug
                uri
              }
            }            
            featuredImage {
              node {
                sourceUrl
                mediaDetails {
                  height
                  width
                }
              }
            }
          }
        }
      }
    `,

    variables: {
      uri,
    },
  };

  const response = await fetch(process.env.WP_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  const { data } = await response.json();

  if (!data.nodeByUri) {
    return null;
  }

  return {
    blocks: cleanAndTransformBlocks(data.nodeByUri.blocksJSON),
    title: data.nodeByUri.title,
    featuredImage: data.nodeByUri.featuredImage?.node,
    dateFormatted: dayjs(data.nodeByUri.date).format("MMMM DD, YYYY"),
    categories:
      data.nodeByUri.categories?.nodes ||
      data.nodeByUri.tutorialCategories?.nodes,
  };
};
