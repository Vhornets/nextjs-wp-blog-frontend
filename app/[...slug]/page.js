import { Hero } from "components/Hero";
import Image from "next/image";
import { BlockRenderer } from "components/BlockRenderer";
import { notFound } from "next/navigation";
import { getPage } from "utils/getPage";
import { getSeo } from "utils/getSeo";

export default async function Page({ params }) {
  const data = await getPage(params.slug.join("/"));

  if (!data) {
    notFound();
  }

  return (
    <>
      {data.postType !== "page" && (
        <>
          <Hero
            title={data.title}
            date={data.dateFormatted}
            categories={data.categories}
          />

          {data.featuredImage && (
            <div className="max-w-[1100px] mx-auto px-4">
              <Image
                alt="Article thumb"
                className="rounded-xl block object-cover h-[580px]"
                src={data.featuredImage.sourceUrl}
                width={data.featuredImage.mediaDetails.width}
                height={data.featuredImage.mediaDetails.height}
              />
            </div>
          )}
        </>
      )}
      <BlockRenderer blocks={data.blocks} />;
    </>
  );
}

export async function generateMetadata({ params }) {
  const seo = await getSeo(params.slug.join("/"));

  return {
    title: seo?.title || "",
    description: seo?.description || "",
  };
}
