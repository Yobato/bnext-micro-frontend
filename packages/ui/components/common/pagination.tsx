import React from "react";

interface PaginationProps {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSize: (size: number) => void;
}

const Pagination: React.FC<PaginationProps> = React.memo(
  ({
    totalItems,
    totalPages,
    currentPage,
    pageSize,
    onPageChange,
    onPageSize,
  }) => {
    const maxPagesToShow = 5;
    const getDisplayedPages = () => {
      const pages = [];
      const startPage = Math.max(1, currentPage - 1);
      const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      return pages;
    };

    const displayedPages = getDisplayedPages();
    const startItem = currentPage * pageSize + 1;
    const endItem = Math.min((currentPage + 1) * pageSize, totalItems);

    const Size = [10, 15, 20];

    return (
      <div className="p-paginator p-component p-paginator-bottom">
        <button
          title="first"
          className={`p-paginator-first p-paginator-element p-link ${
            currentPage === 0 && "p-disabled"
          }`}
          disabled={currentPage === 0}
          onClick={() => onPageChange(1)}
        >
          <i className="pi pi-angle-double-left"></i>
        </button>
        <button
          title="before"
          className={`p-paginator-first p-paginator-element p-link ${
            currentPage === 0 && "p-disabled"
          }`}
          disabled={currentPage === 0}
          onClick={() => onPageChange(currentPage)}
        >
          <i className="pi pi-angle-left"></i>
        </button>

        {displayedPages.map((page, i) => (
          <span className="p-paginator-pages" key={i}>
            <button
              className={`p-paginator-page p-paginator-element p-link ${
                page === currentPage + 1 ? "p-highlight" : ""
              }`}
              disabled={page === currentPage + 1}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </span>
        ))}

        <button
          title="next"
          className={`p-paginator-next p-paginator-element p-link ${
            currentPage + 1 === totalPages && "p-disabled"
          }`}
          disabled={currentPage + 1 === totalPages}
          onClick={() => onPageChange(currentPage + 2)}
        >
          <i className="pi pi-angle-right"></i>
        </button>
        <button
          title="last"
          className={`p-paginator-next p-paginator-element p-link ${
            currentPage + 1 === totalPages && "p-disabled"
          }`}
          disabled={currentPage + 1 === totalPages}
          onClick={() => onPageChange(totalPages)}
        >
          <i className="pi pi-angle-double-right"></i>
        </button>

        <span className="p-paginator-current">
          {startItem} - {endItem} of {totalItems} data
        </span>

        <select
          title="size"
          name="row"
          id="row"
          value={pageSize}
          onChange={(e) => onPageSize(Number(e.target.value))}
          className="p-dropdown p-component p-inputwrapper"
        >
          {Size.map((size, i) => (
            <option key={i} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default Pagination;
