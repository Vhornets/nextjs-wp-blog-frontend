import { v4 as uuid } from "uuid";

export const assignIdsToBlocks = (blocksJSON) => {
  const blocks = JSON.parse(blocksJSON);

  const assignIds = (b) => {
    b.forEach((block) => {
      block.id = uuid();

      if (block.innerBlocks?.length) {
        assignIds(block.innerBlocks);
      }
    });
  };

  assignIds(blocks);

  return blocks;
};
