import Image from "next/image";

export const Gallery = ({ columns, imageCrop, items }) => {
  const columnWidth = 100 / columns;

  return (
    <div className="flex flex-wrap max-w-5xl my-10 mx-auto">
      {items.map((item) => (
        <div
          key={item.id}
          className={`p-2 ${imageCrop ? "flex" : ""} flex-grow`}
          style={{ width: `${columnWidth}%` }}
        >
          <Image
            alt="Image"
            className="block object-cover"
            src={item.attributes.url}
            width={item.attributes.width}
            height={item.attributes.height}
          />
        </div>
      ))}
    </div>
  );
};
