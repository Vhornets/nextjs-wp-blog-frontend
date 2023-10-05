export const getPosts = async (categorySlug) => {
  const params = {
    query: `
      query PostsQuery($categorySlug: String!) {
        posts(where: {categoryName: $categorySlug}) {
          nodes {
            title
            excerpt(format: RENDERED)
            uri
            dateGmt
            featuredImage {
              node {
                mediaDetails {
                  height
                  width
                }
                mediaItemUrl
              }
            }
          }
        }
      }
    `,

    variables: {
      categorySlug,
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

  if (!data.posts) {
    return null;
  }

  return data.posts.nodes;
};
