export const getSeo = async (uri) => {
  const params = {
    query: `
        query SeoQuery($uri: String!) {
          nodeByUri(uri: $uri) {
            ... on Page {
              seo {
                title
                metaDesc
              }
            }
            ... on Post {
              seo {
                title
                metaDesc
              }
            }
            ... on Tutorial {
              seo {
                title
                metaDesc
              }
            }
            ... on Category {
              seo {
                title
                metaDesc
              }
            }
            ... on TutorialCategory {
              seo {
                title
                metaDesc
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

  return data.nodeByUri.seo;
};
