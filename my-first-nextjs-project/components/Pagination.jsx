"use client";

import useUrlParams from "@/hooks/useUrlParams";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const Pagination = ({ paginationInfo }) => {
  const { currentPage, pages, next, prev } = paginationInfo;
  const prevPage = prev && new URL(prev).searchParams.get("page");
  const nextPage = next && new URL(next).searchParams.get("page");

  const router = useRouter();
  const { createQueryString } = useUrlParams();

  const handlePageChange = useCallback((newPage) => {
    if (newPage >= 1 && newPage <= pages) {
      router.push(`/characters?${createQueryString("page", newPage)}`);
    }
  }, []);

  return (
    <div className="flex items-center h-8 justify-center mt-8 gap-4">
      <button
        className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 disabled:cursor-not-allowed"
        disabled={!prev}
        onClick={() => handlePageChange(1)}
      >
        <svg
          className="w-3.5 h-3.5 mr-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
        First Page
      </button>
      <button
        className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 disabled:cursor-not-allowed"
        disabled={!prev}
        onClick={() => handlePageChange(Number(currentPage) - 1)}
      >
        {prevPage ?? 0}
      </button>

      <span>{`Page ${currentPage} of ${pages}`}</span>

      <button
        className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 disabled:cursor-not-allowed"
        disabled={!next}
        onClick={() => handlePageChange(Number(currentPage) + 1)}
      >
        {nextPage ?? pages + 1}
      </button>

      <button
        className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 disabled:cursor-not-allowed"
        disabled={!next}
        onClick={() => handlePageChange(pages)}
      >
        Last Page
        <svg
          className="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
