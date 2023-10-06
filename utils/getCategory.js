export const getCategory = async (slug) => {
  const params = {
    query: `
      query CategoryQuery($slug: [String!]) {
        categories(where: {slug: $slug}) {
          nodes {
            name
            description
          }
        }
      }
    `,

    variables: {
      slug,
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

  if (!data.categories) {
    return null;
  }

  return data.categories.nodes[0];
};
