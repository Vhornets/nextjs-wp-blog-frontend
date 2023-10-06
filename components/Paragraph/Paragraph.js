import { getTextAlign } from "utils/fonts";
import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls";
import React from "react";

export const Paragraph = ({ textAlign = "left", textColor, content }) => {
  return (
    <p
      className={`max-w-2xl mx-auto my-12 leading-normal text-lg text-gray-800 font-light ${getTextAlign(
        textAlign
      )}`}
      style={{ color: textColor }}
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
    />
  );
};
