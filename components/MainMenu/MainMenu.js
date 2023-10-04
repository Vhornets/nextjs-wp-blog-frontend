import Link from "next/link";

export const MainMenu = ({ items }) => {
  return (
    <>
      {(items || []).map((item) => (
        <Link
          key={item.id}
          className="p-5 block bg-clip-text hover:bg-hot-gradient hover:text-transparent"
          href={item.url}
        >
          {item.title}
        </Link>
      ))}
    </>
  );
};
