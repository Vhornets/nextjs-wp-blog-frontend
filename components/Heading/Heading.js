import React from "react";
import { getTextAlign, getFontsSizeForHeading } from "utils/fonts";

export const Heading = ({ textAlign, content, level = 1 }) => {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading max-w-2xl mx-auto my-12 font-semibold text-gray-800 leading-normal ${getFontsSizeForHeading(
      level
    )} ${getTextAlign(textAlign)}`,
  });

  return tag;
};
