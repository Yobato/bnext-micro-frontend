"use client";
import { jsx as _jsx } from "react/jsx-runtime";
// import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
// import Pagination from "../Pagination";
import BaseTable from "./BaseTable";
const isTemplate = (type, value) => {
    switch (type) {
        case "badge":
            const badgeType = value === "1" ? "success" : "danger";
            const label = value === "1" ? "Active" : "Inactive";
            return _jsx(Badge, { value: label, severity: badgeType });
        default:
            return value;
    }
};
const TableDefault = ({ response, columns, addButton, onEdit, onPageChange, onPageSizeChange, pageSize, isLoading = false, }) => {
    const startItem = (response.currentPage - 1) * pageSize;
    const renderToolbarLeft = () => (_jsx("input", { type: "text", name: "search", id: "search", placeholder: "Cari Data", className: "p-inputtext p-component" }));
    const renderToolbarRight = () => (_jsx("div", { className: "my-2", children: addButton?.visible && (_jsx(Button, { label: "New", icon: "pi pi-plus", severity: "success", className: "mr-2", onClick: addButton.onClick })) }));
    const mapColumnsToBase = (columns, templateResolver) => {
        return columns.map((col) => ({
            header: col.header,
            accessor: col.field,
            template: col.template
                ? (value, row) => templateResolver?.(col.template, value, row)
                : undefined,
        }));
    };
    return (_jsx(BaseTable, { variant: "default", columns: mapColumnsToBase(columns, isTemplate), data: response.data, isLoading: isLoading, onEdit: (item) => onEdit?.({}, item.id), renderToolbarLeft: renderToolbarLeft, renderToolbarRight: renderToolbarRight, paginationProps: {
            totalRecords: response.totalItems,
            currentPage: response.currentPage,
            pageSize,
            onPageChange,
            onPageSizeChange,
        }, startItem: startItem, templateResolver: isTemplate }));
};
export default TableDefault;
