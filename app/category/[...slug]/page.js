import { notFound } from "next/navigation";
import { getSeo } from "utils/getSeo";
import { getCategory } from "utils/getCategory";

import { Hero } from "components/Hero";
import { Posts } from "components/Posts";

export default async function Page({ params, searchParams }) {
  const categorySlug = params.slug.join("");
  const category = await getCategory(categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <Hero title={category.name} text={category.description} />

      <div className="bg-gray-100 px-4 py-10 md:py-14 lg:py-20">
        <div className="max-w-[980px] mx-auto">
          <Posts category={categorySlug} />
        </div>
      </div>
    </>
  );
}

export async function generateMetadata({ params }) {
  const seo = await getSeo(`category/${params.slug.join("/")}`);

  return {
    title: seo?.title || "",
    description: seo?.description || "",
  };
}
