import React from "react";
import { getTextAlign, getFontsSizeForHeading } from "utils/fonts";

export const Heading = ({ textAlign, content, level = 1 }) => {
  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading max-w-5xl mx-auto my-5 px-4 ${getFontsSizeForHeading(
      level
    )} ${getTextAlign(textAlign)}`,
  });

  return tag;
};
