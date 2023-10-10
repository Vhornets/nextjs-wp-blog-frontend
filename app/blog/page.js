import { getSeo } from "utils/getSeo";

import { Hero } from "components/Hero";
import { Posts } from "components/Posts";

export default async function Page({ params, searchParams }) {
  return (
    <>
      <Hero title="Hello world" text="Blog description" />

      <div className="bg-gray-100 px-4 py-10 md:py-14 lg:py-20">
        <div className="max-w-[980px] mx-auto">
          <Posts />
        </div>
      </div>
    </>
  );
}

export async function generateMetadata({ params }) {
  const seo = await getSeo("/");

  return {
    title: seo?.title || "",
    description: seo?.description || "",
  };
}
