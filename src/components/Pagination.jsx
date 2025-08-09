import { useEffect, useState } from "react";

export default function Pagination({ page, totalPages, onPageChange }) {
  const [pagesToShow, setPagesToShow] = useState([]);

  useEffect(() => {

    let pages = [];
    const minPage = Math.max(2, page - 2);
    const maxPage = Math.min(totalPages - 1, page + 2);
    if (minPage > 2) pages.push("...");
    for (let i = minPage; i <= maxPage; i++) {
      pages.push(i);
    }
    if (maxPage < totalPages - 1) pages.push("...");
    setPagesToShow(pages);
  }, [page, totalPages]);

  const pageButtonClass = (p) =>
    `px-4 py-2 rounded-md font-semibold cursor-pointer ${
      p === page? "bg-blue-600 text-white": "bg-white text-blue-800 hover:bg-blue-200"
    }`;

  return (
    <div className="flex justify-center items-center flex-wrap gap-2 mt-20 text-sm">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        className="px-4 cursor-pointer py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed shadow">
        Prev
      </button>
      <button onClick={() => onPageChange(1)} className={pageButtonClass(1)}> 1 </button>
      {pagesToShow.map((p, index) =>
        p === "..." ? (
          <span key={index} className="px-2 text-gray-400">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(p)}
            className={pageButtonClass(p)}>
            {p}
          </button>
        )
      )}

      {totalPages > 1 && (
        <button
          onClick={() => onPageChange(totalPages)}
          className={pageButtonClass(totalPages)}>
          {totalPages}
        </button>
      )}
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
        className="px-4 py-2 cursor-pointer bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed shadow">
        Next
      </button>
    </div>
  );
}
