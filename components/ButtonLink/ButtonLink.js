import Link from "next/link";

export const ButtonLink = ({ title, url = "#" }) => {
  return (
    <Link
      href={url}
      className="btn"
      dangerouslySetInnerHTML={{ __html: title }}
    ></Link>
  );
};
