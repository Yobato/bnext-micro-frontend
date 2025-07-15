"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const Pagination = ({ currentPage, pageSize, totalRecords, onPageChange, onPageSizeChange, }) => {
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
    const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    const startRecordIndex = (currentPage - 1) * pageSize + 1;
    const endRecordIndex = Math.min(totalRecords, currentPage * pageSize);
    if (totalRecords === 0) {
        return (_jsx("div", { className: "p-paginator p-component p-paginator-bottom", children: _jsx("span", { className: "p-paginator-current", children: "No data found." }) }));
    }
    return (_jsxs("div", { className: "p-paginator p-component p-paginator-bottom", children: [_jsx("button", { title: "First", "aria-label": "First Page", className: `p-paginator-first p-paginator-element p-link ${isFirstPage ? "p-disabled" : ""}`, disabled: isFirstPage, onClick: () => onPageChange(1), children: _jsx("i", { className: "pi pi-angle-double-left" }) }), _jsx("button", { title: "Previous", "aria-label": "Previous Page", className: `p-paginator-prev p-paginator-element p-link ${isFirstPage ? "p-disabled" : ""}`, disabled: isFirstPage, onClick: () => onPageChange(currentPage - 1), children: _jsx("i", { className: "pi pi-angle-left" }) }), _jsxs("span", { className: "p-paginator-pages", children: [startPage > 1 && (_jsxs(_Fragment, { children: [_jsx("button", { className: "p-paginator-page p-paginator-element p-link", onClick: () => onPageChange(1), children: "1" }), startPage > 2 && _jsx("span", { className: "p-ellipsis", children: "..." })] })), pageNumbers.map((page) => (_jsx("button", { className: `p-paginator-page p-paginator-element p-link ${currentPage === page ? "p-highlight" : ""}`, onClick: () => onPageChange(page), children: page }, page))), endPage < totalPages && (_jsxs(_Fragment, { children: [endPage < totalPages - 1 && (_jsx("span", { className: "p-ellipsis", children: "..." })), _jsx("button", { className: "p-paginator-page p-paginator-element p-link", onClick: () => onPageChange(totalPages), children: totalPages })] }))] }), _jsx("button", { title: "Next", "aria-label": "Next Page", className: `p-paginator-next p-paginator-element p-link ${isLastPage ? "p-disabled" : ""}`, disabled: isLastPage, onClick: () => onPageChange(currentPage + 1), children: _jsx("i", { className: "pi pi-angle-right" }) }), _jsx("button", { title: "Last", "aria-label": "Last Page", className: `p-paginator-last p-paginator-element p-link ${isLastPage ? "p-disabled" : ""}`, disabled: isLastPage, onClick: () => onPageChange(totalPages), children: _jsx("i", { className: "pi pi-angle-double-right" }) }), _jsxs("span", { className: "p-paginator-current", children: [startRecordIndex, " - ", endRecordIndex, " of ", totalRecords, " data"] }), _jsxs("select", { title: "Page size", name: "row", id: "row", className: "p-dropdown p-component p-inputwrapper", value: pageSize, onChange: (e) => {
                    const newSize = parseInt(e.target.value);
                    if (onPageSizeChange) {
                        onPageSizeChange(newSize);
                    }
                }, children: [_jsx("option", { value: "5", children: "5" }), _jsx("option", { value: "10", children: "10" }), _jsx("option", { value: "15", children: "15" }), _jsx("option", { value: "20", children: "20" })] })] }));
};
export default Pagination;
