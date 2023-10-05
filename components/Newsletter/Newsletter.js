export const Newsletter = ({ title, text }) => {
  return (
    <div className="px-4 bg-white py-10 lg:py-14 text-center">
      <div className="flex flex-wrap justify-center items-center max-w-lg mx-auto">
        {title && (
          <h4 className="font-bold basis-full text-lg lg:text-3xl text-hot-gradient">
            Personally Newsletter
          </h4>
        )}

        {text && (
          <p className="basis-full text-[16px] font-light text-gray-600 leading-normal mt-3 md:text-lg">
            A bi-weekly newsletter of design inspiration, resources and anything
            related to career development.t
          </p>
        )}

        <form className="basis-full max-w-sm mx-auto mt-6 sm:mt-8">
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>

          <div className="relative">
            <input
              type="search"
              id="search"
              className="block w-full p-3.5 pl-5 text-sm font-medium text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search"
              required
            />

            <button
              type="submit"
              className="text-sm text-white p-3.5 right-0 bottom-0 mt-3 w-full border-gray-800 border-solid border-[1px] bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:bg-white hover:text-gray-800 rounded-l-lg rounded-r-lg px-8 transition-colors sm:absolute sm:h-full sm:mt-0 sm:rounded-l-none sm:w-auto"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
