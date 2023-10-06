import Link from "next/link";

export const Hero = ({ badge, title, text, date, categories }) => {
  return (
    <div className="bg-white px-4 text-center pt-14 pb-10 md:pt-20 md:pb-14 lg:pt-28 lg:pb-20">
      <div className="flex flex-wrap justify-center items-center mx-auto max-w-[980px]">
        {badge && (
          <span className="bg-gray-100 text-gray-800 text-sm font-semibold py-2.5 px-4 rounded-full">
            {badge}
          </span>
        )}

        {title && (
          <h1 className="basis-full text-3xl font-bold leading-tight tracking-tighter text-hot-gradient mt-10 md:text-5xl md:leading-tight lg:text-7xl lg:leading-tight">
            {title}
          </h1>
        )}

        {text && (
          <p className="basis-full text-lg font-light text-gray-600 leading-normal mt-5 max-w-[720px] mx-auto md:text-2xl md:leading-normal lg:text-[28px] lg:leading-normal">
            {text}
          </p>
        )}

        {date && (
          <div className="basis-full mt-5 text-sm uppercase">
            <span className="text-gray-600">{date} </span>

            {categories &&
              categories.map((category) => (
                <Link
                  className="text-gray-800 font-bold"
                  key={category.slug}
                  href={`/blog/category/${category.slug}`}
                >
                  • {category.name}
                </Link>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};
