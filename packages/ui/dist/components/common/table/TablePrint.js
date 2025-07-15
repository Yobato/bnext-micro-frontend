"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
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
const TablePrint = ({ response, columns, addButton, printButton, exportButton, search, onEdit, isLoading = false, pageSize, onPageChange, onPageSizeChange, }) => {
    const startItem = (response.currentPage - 1) * pageSize;
    const renderToolbarLeft = () => search ? (_jsx("input", { type: "text", name: "search", id: "search", placeholder: search.placeholder || "Cari Data", className: "p-inputtext p-component", value: search.value, onChange: (e) => search.onChange(e.target.value) })) : null;
    const renderToolbarRight = () => (_jsxs("div", { className: "flex flex-wrap gap-3", children: [addButton?.visible && (_jsx(Button, { label: "Buat Baru", icon: "pi pi-plus", severity: "success", onClick: addButton.onClick })), printButton?.visible && (_jsx(Button, { label: "Cetak", icon: "pi pi-print", severity: "info", onClick: printButton.onClick })), exportButton?.visible && (_jsx(Button, { label: "Export", icon: "pi pi-file-excel", severity: "help", onClick: exportButton.onClick }))] }));
    const mapColumnsToBase = (columns) => {
        return columns.map((col) => ({
            header: col.header,
            accessor: col.field,
            template: col.template
                ? (value, row) => isTemplate(col.template, value)
                : undefined,
        }));
    };
    return (_jsx(BaseTable, { variant: "print", columns: mapColumnsToBase(columns), data: response.data, isLoading: isLoading, onEdit: (item) => onEdit?.({}, item.id), renderToolbarLeft: renderToolbarLeft, renderToolbarRight: renderToolbarRight, paginationProps: {
            totalRecords: response.totalItems,
            currentPage: response.currentPage,
            pageSize,
            onPageChange,
            onPageSizeChange,
        }, startItem: startItem }));
};
export default TablePrint;
