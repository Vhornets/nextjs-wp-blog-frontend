import { BlockRenderer } from "components/BlockRenderer";
import { MainMenu } from "components/MainMenu";
import Head from "next/head";

export const Page = (props) => {
  return (
    <div>
      <Head>
        <title>{props.seo.title}</title>
        <meta name="description" content={props.seo.metaDesc} />
      </Head>

      <MainMenu
        items={props.mainMenuItems}
        callToActionButton={props.callToActionButton}
      />

      <BlockRenderer blocks={props.blocks} />
    </div>
  );
};
