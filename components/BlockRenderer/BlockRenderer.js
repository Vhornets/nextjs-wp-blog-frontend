import Image from "next/image";

import { Cover } from "components/Cover";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { Hero } from "components/Hero";
import { Newsletter } from "components/Newsletter";

export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    switch (block.name) {
      case "vh/newsletter":
        return <Newsletter {...block.attributes} />;

      case "vh/hero":
        return <Hero {...block.attributes} />;

      case "core/block":
      case "core/group":
      case "core/column":
      case "core/columns":
        return (
          <div key={block.id}>
            <BlockRenderer blocks={block.innerBlocks} />
          </div>
        );

      case "core/image":
        return (
          <div className="max-w-3xl mx-auto my-10 relative">
            <Image
              className="rounded-xl"
              key={block.id}
              alt="Image"
              src={block.attributes.url}
              width={block.attributes.width}
              height={block.attributes.height}
            />

            <div className="absolute left-4 bottom-4 rounded-full bg-white py-2 px-3 text-xs uppercase">
              {block.attributes.caption}
            </div>
          </div>
        );
        return (
          <Columns
            {...block.attributes}
            key={block.id}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        );

      case "core/paragraph":
        return (
          <Paragraph
            key={block.id}
            textAlign={block.attributes.align}
            content={block.attributes.content}
          />
        );

      case "core/quote":
        return (
          <blockquote className="max-w-[780px] [&>*]:max-w-none mx-auto my-10 border-solid border-l-8 border-[#C41740] pl-6">
            <BlockRenderer blocks={block.innerBlocks} />
          </blockquote>
        );

      case "core/post-title":
      case "core/heading":
        return <Heading key={block.id} {...block.attributes} />;

      case "core/cover":
        return (
          <Cover key={block.id} background={block.attributes.url}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        );

      default: {
        console.log("UNKNOWN BLOCK:", block);

        return null;
      }
    }
  });
};
