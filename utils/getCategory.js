const QUERY = {
  posts: `
    query CategoryQuery($slug: [String!]) {
      categories(where: {slug: $slug}) {
        nodes {
          name
          description
          uri
        }
      }
    }
  `,
  tutorials: `
    query TutorialCategoryQuery($slug: [String!]) {
      tutorialCategories(where: {slug: $slug}) {
        nodes {
          name
          description
          uri
        }
      }
    }
  `,
};

export const getCategory = async (slug, postType = "posts") => {
  const params = {
    query: QUERY[postType],

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

  return data.categories?.nodes[0] || data.tutorialCategories?.nodes[0];
};
