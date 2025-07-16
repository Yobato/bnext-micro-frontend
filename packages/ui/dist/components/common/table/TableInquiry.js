"use client";
import { jsx as _jsx } from "react/jsx-runtime";
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
const TableInquiry = ({ response, columns, isLoading = false, pageSize, }) => {
    const startItem = (response.currentPage - 1) * pageSize;
    const mapColumnsToBase = (columns) => {
        return columns.map((col) => ({
            header: col.header,
            accessor: col.field,
            template: col.template
                ? (value) => isTemplate(col.template, value)
                : undefined,
        }));
    };
    return (_jsx(BaseTable, { variant: "inquiry", columns: mapColumnsToBase(columns), data: response.data, isLoading: isLoading, startItem: startItem, customNoDataMessage: "Data tidak ditemukan :(" }));
};
export default TableInquiry;
