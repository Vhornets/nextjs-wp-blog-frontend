import { mapMainMenuItems } from "./mapMainMenuItems";

export const getMenu = async () => {
  const params = {
    query: `
      query MenuQuery {
        themeOptions {
          options {
            menu {
              item {
                title
                url
              }
            }
            callToActionButton {
              text
              url
            }
            logo {
              sourceUrl
              mediaDetails {
                width
                height
              }              
            }
          }
        }
      }
    `,
  };

  const response = await fetch(process.env.WP_GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  const { data } = await response.json();

  return {
    mainMenuItems: mapMainMenuItems(data.themeOptions.options.menu),
    callToActionButton: {
      title: data.themeOptions.options.callToActionButton.text,
      url: data.themeOptions.options.callToActionButton.url,
    },
    logo: data.themeOptions.options.logo,
  };
};
