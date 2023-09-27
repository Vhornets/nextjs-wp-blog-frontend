import { theme } from "theme";

import Image from "next/image";

import { Cover } from "components/Cover";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { CallToAction } from "components/CallToAction";
import { Columns } from "components/Columns";
import { Column } from "components/Column";
import { PropertySearch } from "components/PropertySearch";
import { PropertyFeatures } from "components/PropertyFeatures";
import { Gallery } from "components/Gallery";
import { TickItem } from "components/TickItem";

export const BlockRenderer = ({ blocks }) => {
  return blocks.map((block) => {
    console.log(block);

    switch (block.name) {
      case "vh/tick-item":
        return (
          <TickItem key={block.attributes.id} {...block.attributes}>
            <BlockRenderer blocks={block.innerBlocks} />
          </TickItem>
        );

      case "core/gallery":
        return (
          <Gallery
            key={block.id}
            columns={block.attributes.columns || 3}
            imageCrop={block.attributes.imageCrop}
            items={block.innerBlocks}
          />
        );

      case "vh/property-features":
        return <PropertyFeatures {...block.attributes} key={block.id} />;

      case "vh/property-search":
        return <PropertySearch key={block.id} />;

      case "core/block":
      case "core/group":
        return (
          <div key={block.id}>
            <BlockRenderer blocks={block.innerBlocks} />
          </div>
        );

      case "core/image":
        return (
          <Image
            key={block.id}
            alt="Image"
            src={block.attributes.url}
            width={block.attributes.width}
            height={block.attributes.height}
          />
        );

      case "core/column":
        return (
          <Column key={block.id} {...block.attributes}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        );

      case "core/columns":
        console.log(block);
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

      case "vh/cta":
        return <CallToAction {...block.attributes} key={block.id} />;

      case "core/paragraph":
        return (
          <Paragraph
            key={block.id}
            textAlign={block.attributes.align}
            content={block.attributes.content}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
          />
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
