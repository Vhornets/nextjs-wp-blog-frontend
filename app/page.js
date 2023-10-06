import Link from "next/link";
import { BlockRenderer } from "components/BlockRenderer";
import { Posts } from "components/Posts";
import { getPage } from "utils/getPage";
import { getSeo } from "utils/getSeo";

export default async function Home() {
  const data = await getPage("/");

  return (
    <>
      <BlockRenderer blocks={data.blocks} />;
      <div className="bg-gray-100 px-4 py-10 md:py-14 lg:py-20">
        <div className="max-w-[980px] mx-auto">
          <div className="flex justify-between items-center mb-7">
            <h5 className="text-gray-800 font-bold text-base md:text-[26px]">
              Daily Digest
            </h5>

            <Link href="/blog/category/daily-digest" className="btn-white">
              View All
            </Link>
          </div>

          <Posts category="daily-digest" />
        </div>
      </div>
    </>
  );
}

export async function generateMetadata() {
  const seo = await getSeo("/");

  return {
    title: seo?.title || "",
    description: seo?.description || "",
  };
}
