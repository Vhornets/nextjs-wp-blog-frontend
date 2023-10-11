import { getTextAlign } from "utils/fonts";
import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls";

export const Paragraph = ({ textAlign = "left", content }) => {
  return (
    <p
      className={`max-w-2xl mx-auto my-12 leading-normal text-lg text-gray-800 font-light px-4 ${getTextAlign(
        textAlign
      )}`}
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
    />
  );
};
