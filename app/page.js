import Link from "next/link";
import { BlockRenderer } from "components/BlockRenderer";
import { Posts } from "components/Posts";
import { getPage } from "utils/getPage";
import { getSeo } from "utils/getSeo";

export default async function Home() {
  const data = await getPage("/");

  return <BlockRenderer blocks={data.blocks} />;
}

export async function generateMetadata() {
  const seo = await getSeo("/");

  return {
    title: seo?.title || "",
    description: seo?.description || "",
  };
}
