import Image from "next/image";
import Link from "next/link";

export const PostCard = ({
  title,
  excerpt,
  uri,
  featuredImage,
  dateFormatted,
  postType,
}) => {
  return (
    <article className="bg-white rounded-[20px] md:px-7 md:py-5 md:pr-5 md:grid md:grid-cols-[70%_30%] items-center mt-4 md:mt-5">
      <div className="px-4 py-5 md:py-0 md:px-0 md:pr-5">
        <div className="text-gray-500 uppercase text-xs">{dateFormatted}</div>

        <h4 className="text-lg md:text-2xl text-gray-800 mt-5 md:mt-7 font-semibold">
          <Link href={uri}>{title}</Link>
        </h4>

        <div
          className="hidden md:block text-gray-600 text-lg leading-normal font-light mt-2"
          dangerouslySetInnerHTML={{ __html: `${excerpt}` }}
        />
      </div>

      <div>
        <Link href={uri}>
          <Image
            alt="Article thumb"
            className="rounded-lg block object-cover h-52"
            src={featuredImage.node.mediaItemUrl}
            width={featuredImage.node.mediaDetails.width}
            height={featuredImage.node.mediaDetails.height}
          />
        </Link>
      </div>
    </article>
  );
};
