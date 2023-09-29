import { getPageStaticProps } from "utils/getPageStaticProps";
import { Page } from "components/Page";

export default function Home(props) {
  return <Page {...props} />;
}

export const getStaticProps = getPageStaticProps;
