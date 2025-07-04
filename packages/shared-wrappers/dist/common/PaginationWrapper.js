import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
var Pagination = React.memo(function (_a) {
    var totalItems = _a.totalItems, totalPages = _a.totalPages, currentPage = _a.currentPage, pageSize = _a.pageSize, onPageChange = _a.onPageChange, onPageSize = _a.onPageSize;
    var maxPagesToShow = 5;
    var getDisplayedPages = function () {
        var pages = [];
        var startPage = Math.max(1, currentPage - 1);
        var endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
        for (var i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    };
    var displayedPages = getDisplayedPages();
    var startItem = currentPage * pageSize + 1;
    var endItem = Math.min((currentPage + 1) * pageSize, totalItems);
    var Size = [10, 15, 20];
    return (_jsxs("div", { className: "p-paginator p-component p-paginator-bottom", children: [_jsx("button", { title: "first", className: "p-paginator-first p-paginator-element p-link ".concat(currentPage === 0 && "p-disabled"), disabled: currentPage === 0, onClick: function () { return onPageChange(1); }, children: _jsx("i", { className: "pi pi-angle-double-left" }) }), _jsx("button", { title: "before", className: "p-paginator-first p-paginator-element p-link ".concat(currentPage === 0 && "p-disabled"), disabled: currentPage === 0, onClick: function () { return onPageChange(currentPage); }, children: _jsx("i", { className: "pi pi-angle-left" }) }), displayedPages.map(function (page, i) { return (_jsx("span", { className: "p-paginator-pages", children: _jsx("button", { className: "p-paginator-page p-paginator-element p-link ".concat(page === currentPage + 1 ? "p-highlight" : ""), disabled: page === currentPage + 1, onClick: function () { return onPageChange(page); }, children: page }) }, i)); }), _jsx("button", { title: "next", className: "p-paginator-next p-paginator-element p-link ".concat(currentPage + 1 === totalPages && "p-disabled"), disabled: currentPage + 1 === totalPages, onClick: function () { return onPageChange(currentPage + 2); }, children: _jsx("i", { className: "pi pi-angle-right" }) }), _jsx("button", { title: "last", className: "p-paginator-next p-paginator-element p-link ".concat(currentPage + 1 === totalPages && "p-disabled"), disabled: currentPage + 1 === totalPages, onClick: function () { return onPageChange(totalPages); }, children: _jsx("i", { className: "pi pi-angle-double-right" }) }), _jsxs("span", { className: "p-paginator-current", children: [startItem, " - ", endItem, " of ", totalItems, " data"] }), _jsx("select", { title: "size", name: "row", id: "row", value: pageSize, onChange: function (e) { return onPageSize(Number(e.target.value)); }, className: "p-dropdown p-component p-inputwrapper", children: Size.map(function (size, i) { return (_jsx("option", { value: size, children: size }, i)); }) })] }));
});
export default Pagination;
