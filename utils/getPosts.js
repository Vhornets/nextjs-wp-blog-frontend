import dayjs from "dayjs";

const PAGE_SIZE = 2;

export const getPosts = async (categorySlug, page = 1) => {
  const offset = ((page || 1) - 1) * PAGE_SIZE;

  const params = {
    query: `
      query PostsQuery($categorySlug: String!, $offset: Int!) {
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

    variables: {
      categorySlug,
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

  if (!data.posts) {
    return null;
  }

  const totalPages = Math.ceil(
    data.posts.pageInfo.offsetPagination.total / PAGE_SIZE
  );

  // add formated date to each post
  data.posts.nodes.map(
    (post) => (post.dateFormatted = dayjs(post.date).format("MMMM DD, YYYY"))
  );

  return {
    posts: data.posts.nodes,
    totalPosts: data.posts.pageInfo.offsetPagination.total,
    hasNextPage: page < totalPages,
  };
};
