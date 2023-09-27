import Link from "next/link";

export const Pagination = ({ onPageClick, totalPages }) => {
  return (
    <div className="max-w-5xl mx-auto mb-10 flex justify-center gap-2">
      {Array.from({ length: totalPages }).map((_, i) => (
        <div
          onClick={() => onPageClick(i + 1)}
          className="btn"
          key={i}
          href={i}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
};
