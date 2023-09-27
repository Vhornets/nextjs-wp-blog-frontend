import { getTextAlign } from "utils/fonts";
import { relativeToAbsoluteUrls } from "utils/relativeToAbsoluteUrls";
import React from "react";

export const Paragraph = ({ textAlign = "left", textColor, content }) => {
  return (
    <p
      className={`max-w-5xl mx-auto my-3 leading-7 ${getTextAlign(textAlign)}`}
      style={{ color: textColor }}
      dangerouslySetInnerHTML={{ __html: relativeToAbsoluteUrls(content) }}
    />
  );
};
