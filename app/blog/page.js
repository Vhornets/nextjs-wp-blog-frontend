import { Hero } from "components/Hero";
import { notFound } from "next/navigation";
import { getSeo } from "utils/getSeo";
import { getPosts } from "utils/getPosts";
import { PostCard } from "components/PostCard";
import { v4 as uuid } from "uuid";

export default async function Page({ params }) {
  const posts = await getPosts("");

  if (!posts) {
    notFound();
  }

  return (
    <>
      <Hero title="Hello world" text="Blog description" />

      <div className="bg-gray-100 px-4 py-10 md:py-14 lg:py-20">
        <div className="max-w-[980px] mx-auto">
          <div className="flex justify-between items-center mb-7">
            <h5 className="text-gray-800 font-bold text-base md:text-[26px]">
              Daily Digest
            </h5>

            <a href="#" className="btn-white">
              View All
            </a>
          </div>

          {posts.map((post) => (
            <PostCard key={uuid()} {...post} />
          ))}
        </div>
      </div>
    </>
  );
}

// export async function generateMetadata({ params }) {
//   const seo = await getSeo(params.slug.join("/"));

//   return {
//     title: seo?.title || "",
//     description: seo?.description || "",
//   };
// }
