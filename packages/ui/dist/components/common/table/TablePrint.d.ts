import React from "react";
export interface ColumnProps {
    header: string;
    field: string;
    template?: string;
}
export interface AddButtonProps {
    visible: boolean;
    onClick: () => void;
}
export interface PrintButtonProps {
    visible: boolean;
    onClick: () => void;
}
export interface ExportButtonProps {
    visible: boolean;
    onClick: () => void;
}
export interface SearchProps {
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
}
export interface Data {
    [key: string]: any;
}
export interface DataResponse {
    data: Data[];
    totalItems: number;
    totalPages: number;
    currentPage: number;
}
interface TablePrintProps {
    response: DataResponse;
    columns: ColumnProps[];
    addButton?: AddButtonProps;
    printButton?: PrintButtonProps;
    exportButton?: ExportButtonProps;
    search?: SearchProps;
    onEdit?: (event: React.MouseEvent<HTMLElement>, id: string) => void;
    isLoading?: boolean;
    pageSize: number;
    onPageChange: (page: number) => void;
    onPageSizeChange: (size: number) => void;
}
declare const TablePrint: React.FC<TablePrintProps>;
export default TablePrint;
//# sourceMappingURL=TablePrint.d.ts.map