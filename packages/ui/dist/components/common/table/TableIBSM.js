"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import BaseTable from "./BaseTable";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
const TableIBSM = ({ response, columns, search, addButton, onEdit, onDelete, isLoading = false, pageSize, onPageChange, onPageSizeChange, }) => {
    const startItem = (response.currentPage - 1) * pageSize;
    const renderToolbarLeft = () => search ? (_jsxs(IconField, { iconPosition: "left", children: [_jsx(InputIcon, { className: "pi pi-search" }), _jsx(InputText, { type: "text", placeholder: search.placeholder || "Cari Data", value: search.value, onChange: (e) => search.onChange(e.target.value) })] })) : null;
    const renderToolbarRight = () => addButton?.visible ? (_jsx("div", { className: "my-2", children: _jsx(Button, { label: "Buat Baru", icon: "pi pi-plus", severity: "success", onClick: addButton.onClick }) })) : null;
    const mapColumnsToBase = (columns) => {
        return columns.map((col) => ({
            header: col.header,
            accessor: col.field,
            template: undefined, // No template used for IBSM
        }));
    };
    return (_jsx(BaseTable, { variant: "ibsm", columns: mapColumnsToBase(columns), data: response.data, isLoading: isLoading, onEdit: (item) => onEdit?.({}, item.id), onDelete: (item) => onDelete?.(item.id), renderToolbarLeft: renderToolbarLeft, renderToolbarRight: renderToolbarRight, paginationProps: {
            totalRecords: response.totalItems,
            currentPage: response.currentPage,
            pageSize,
            onPageChange,
            onPageSizeChange,
        }, startItem: startItem, showActions: true }));
};
export default TableIBSM;
