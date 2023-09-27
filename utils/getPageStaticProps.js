import { gql } from "@apollo/client";
import client from "client";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";
import { mapMainMenuItems } from "utils/mapMainMenuItems";

export const getPageStaticProps = async (context) => {
  const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";

  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocks
            seo {
              title
              metaDesc
            }
          }

          ... on Property {
            id
            title
            blocks
            seo {
              title
              metaDesc
            }
          }
        }

        acfOptionsMainMenu {
          mainMenu {
            menuItems {
              menuItem {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
              items {
                destination {
                  ... on Page {
                    uri
                  }
                }
                label
              }
            }

            callToActionButton {
              destination {
                ... on Page {
                  uri
                }
              }
              label
            }
          }
        }
      }
    `,

    variables: {
      uri,
    },
  });

  return {
    props: {
      blocks: cleanAndTransformBlocks(data.nodeByUri.blocks),
      title: data.nodeByUri.title,
      seo: data.nodeByUri.seo,
      mainMenuItems: mapMainMenuItems(
        data.acfOptionsMainMenu.mainMenu.menuItems
      ),
      callToActionButton: {
        label: data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
        destination:
          data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,
      },
    },
  };
};
