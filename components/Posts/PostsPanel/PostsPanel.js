import Link from "next/link";
import { Posts } from "components/Posts";

export const PostsPanel = ({
  headerText,
  buttonText,
  buttonURL,
  showHeader,
  postType,
  postCategory,
}) => {
  return (
    <div className="bg-gray-100 px-4 py-10 md:py-14 lg:py-20">
      <div className="max-w-[980px] mx-auto">
        {showHeader && (
          <div className="flex justify-between items-center mb-7">
            <h5 className="text-gray-800 font-bold text-base md:text-[26px]">
              {headerText}
            </h5>

            <Link href={buttonURL} className="btn-white">
              {buttonText}
            </Link>
          </div>
        )}

        <Posts category={postCategory} postType={postType} />
      </div>
    </div>
  );
};
