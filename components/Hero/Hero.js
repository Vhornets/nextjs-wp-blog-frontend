export const Hero = ({ badge, title, text }) => {
  return (
    <div className="bg-white px-4 text-center pt-14 pb-10 md:pt-20 md:pb-14 lg:pt-28 lg:pb-20">
      <div className="flex flex-wrap justify-center items-center mx-auto max-w-[980px]">
        {badge && (
          <span className="bg-gray-100 text-gray-800 text-sm font-semibold py-2.5 px-4 rounded-full">
            {badge}
          </span>
        )}

        {title && (
          <h1 className="basis-full text-3xl font-bold leading-tight tracking-tighter text-hot-gradient mt-10 md:text-5xl lg:text-7xl">
            {title}
          </h1>
        )}

        {text && (
          <p className="basis-full text-lg font-light text-gray-600 leading-normal mt-5 max-w-[720px] mx-auto md:text-2xl lg:text-[28px]">
            {text}
          </p>
        )}
      </div>
    </div>
  );
};
