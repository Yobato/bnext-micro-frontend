import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Pagination from "../Pagination";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
const BaseTable = ({ columns, data, isLoading = false, renderToolbarLeft, renderToolbarRight, paginationProps, showActions = false, onEdit, onDelete, customNoDataMessage = "Data tidak ditemukan", variant, startItem = 0, templateResolver, }) => {
    const renderActionButtons = (item) => {
        return (_jsxs("div", { className: "flex gap-2", children: [onEdit && (_jsx(Button, { icon: "pi pi-pencil", className: "p-button-text p-button-rounded p-button-plain", onClick: () => onEdit(item) })), onDelete && (_jsx(Button, { icon: "pi pi-trash", className: "p-button-text p-button-rounded p-button-plain", onClick: () => onDelete(item) }))] }));
    };
    return (_jsxs("div", { className: "p-datatable-gridlines p-datatable p-component p-datatable-responsive-scroll p-datatable-gridlines", children: [(renderToolbarLeft || renderToolbarRight) && (_jsx("div", { className: "p-datatable-header", children: _jsx(Toolbar, { start: renderToolbarLeft ? renderToolbarLeft() : undefined, end: renderToolbarRight ? renderToolbarRight() : undefined }) })), _jsx("div", { className: "p-datatable-wrapper loading-inside", children: _jsxs("table", { className: "p-datatable-table", role: "table", children: [_jsx("thead", { className: "p-datatable-thead", children: _jsxs("tr", { role: "row", children: [_jsx("th", { className: "w-min", children: "No" }), columns.map((col) => (_jsx("th", { role: "columnheader", children: _jsx("div", { className: "p-column-header-content", children: col.header }) }, col.accessor))), showActions && _jsx("th", { style: { width: 60 }, children: "#" })] }) }), _jsx("tbody", { className: "p-datatable-tbody loading-inside", children: isLoading ? (_jsx("tr", { children: _jsx("td", { colSpan: columns.length + (showActions ? 2 : 1), children: _jsx("div", { className: "loading-start", children: "Memuat..." }) }) })) : data.length > 0 ? (data.map((item, index) => (_jsxs("tr", { role: "row", children: [_jsx("td", { role: "cell", children: startItem + index + 1 }), columns.map((col) => {
                                        const value = item[col.accessor];
                                        let rendered;
                                        if (typeof col.template === "function") {
                                            rendered = col.template(value, item);
                                        }
                                        else if (typeof col.template === "string" &&
                                            templateResolver) {
                                            rendered = templateResolver(col.template, value);
                                        }
                                        else {
                                            rendered = value;
                                        }
                                        return (_jsx("td", { role: "cell", children: rendered }, col.accessor));
                                    }), showActions && _jsx("td", { children: renderActionButtons(item) })] }, index)))) : (_jsx("tr", { children: _jsx("td", { colSpan: columns.length + (showActions ? 2 : 1), children: customNoDataMessage }) })) })] }) }), paginationProps && (_jsx("div", { className: "p-datatable-footer", children: _jsx(Pagination, { ...paginationProps }) }))] }));
};
export default BaseTable;
