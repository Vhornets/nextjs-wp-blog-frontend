import dayjs from "dayjs";

const PAGE_SIZE = 1;
const QUERY = {
  posts: `
    query PostsQuery($categorySlug: String, $offset: Int!) {
      posts(where: {categoryName: $categorySlug, offsetPagination: {size: ${PAGE_SIZE}, offset: $offset}}) {
        nodes {
          title
          excerpt(format: RENDERED)
          uri
          date
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
        pageInfo {
          offsetPagination {
            total
          }
        }          
      }
    }
  `,
  tutorials: `
    query TutorialsQuery($categorySlug: String, $offset: Int!) {
      tutorials(where: {tutorialCategorySlug: $categorySlug, offsetPagination: {size: ${PAGE_SIZE}, offset: $offset}}) {
        nodes {
          title
          excerpt(format: RENDERED)
          uri
          date
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
        pageInfo {
          offsetPagination {
            total
          }
        }
      }
    }
  `,
};

export const getPosts = async (categorySlug, page = 1, postType = "posts") => {
  const offset = ((page || 1) - 1) * PAGE_SIZE;

  const params = {
    query: QUERY[postType],

    variables: {
      categorySlug: categorySlug || null,
      offset,
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

  if (!data[postType]) {
    return null;
  }

  const totalPages = Math.ceil(
    data[postType].pageInfo.offsetPagination.total / PAGE_SIZE
  );

  // add formated date to each post
  data[postType].nodes.map(
    (post) => (post.dateFormatted = dayjs(post.date).format("MMMM DD, YYYY"))
  );

  return {
    posts: data[postType].nodes,
    totalPosts: data[postType].pageInfo.offsetPagination.total,
    hasNextPage: page < totalPages,
  };
};
