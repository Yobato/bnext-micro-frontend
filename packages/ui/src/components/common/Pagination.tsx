"use client";
import React from "react";

export type PaginationProps = {
  currentPage: number;
  pageSize: number;
  totalRecords: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (newSize: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  pageSize,
  totalRecords,
  onPageChange,
  onPageSizeChange,
}) => {
  const totalPages = Math.ceil(totalRecords / pageSize);
  const maxPageButtons = 5;

  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= totalPages;

  let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  let endPage = startPage + maxPageButtons - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxPageButtons + 1);
  }

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  const startRecordIndex = (currentPage - 1) * pageSize + 1;
  const endRecordIndex = Math.min(totalRecords, currentPage * pageSize);

  if (totalRecords === 0) {
    return (
      <div className="p-paginator p-component p-paginator-bottom">
        <span className="p-paginator-current">No data found.</span>
      </div>
    );
  }

  return (
    <div className="p-paginator p-component p-paginator-bottom">
      <button
        title="First"
        aria-label="First Page"
        className={`p-paginator-first p-paginator-element p-link ${
          isFirstPage ? "p-disabled" : ""
        }`}
        disabled={isFirstPage}
        onClick={() => onPageChange(1)}
      >
        <i className="pi pi-angle-double-left"></i>
      </button>

      <button
        title="Previous"
        aria-label="Previous Page"
        className={`p-paginator-prev p-paginator-element p-link ${
          isFirstPage ? "p-disabled" : ""
        }`}
        disabled={isFirstPage}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <i className="pi pi-angle-left"></i>
      </button>

      <span className="p-paginator-pages">
        {startPage > 1 && (
          <>
            <button
              className="p-paginator-page p-paginator-element p-link"
              onClick={() => onPageChange(1)}
            >
              1
            </button>
            {startPage > 2 && <span className="p-ellipsis">...</span>}
          </>
        )}

        {pageNumbers.map((page) => (
          <button
            key={page}
            className={`p-paginator-page p-paginator-element p-link ${
              currentPage === page ? "p-highlight" : ""
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && (
              <span className="p-ellipsis">...</span>
            )}
            <button
              className="p-paginator-page p-paginator-element p-link"
              onClick={() => onPageChange(totalPages)}
            >
              {totalPages}
            </button>
          </>
        )}
      </span>

      <button
        title="Next"
        aria-label="Next Page"
        className={`p-paginator-next p-paginator-element p-link ${
          isLastPage ? "p-disabled" : ""
        }`}
        disabled={isLastPage}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <i className="pi pi-angle-right"></i>
      </button>

      <button
        title="Last"
        aria-label="Last Page"
        className={`p-paginator-last p-paginator-element p-link ${
          isLastPage ? "p-disabled" : ""
        }`}
        disabled={isLastPage}
        onClick={() => onPageChange(totalPages)}
      >
        <i className="pi pi-angle-double-right"></i>
      </button>

      <span className="p-paginator-current">
        {startRecordIndex} - {endRecordIndex} of {totalRecords} data
      </span>

      <select
        title="Page size"
        name="row"
        id="row"
        className="p-dropdown p-component p-inputwrapper"
        value={pageSize}
        onChange={(e) => {
          const newSize = parseInt(e.target.value);
          if (onPageSizeChange) {
            onPageSizeChange(newSize);
          }
        }}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>
  );
};

export default Pagination;
