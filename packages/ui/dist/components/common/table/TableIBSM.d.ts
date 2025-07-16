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
interface TableIBSMProps {
    response: DataResponse;
    columns: ColumnProps[];
    addButton?: AddButtonProps;
    search?: SearchProps;
    onEdit?: (event: React.MouseEvent<HTMLElement>, id: string) => void;
    onDelete?: (id: string) => void;
    isLoading?: boolean;
    pageSize: number;
    onPageChange: (page: number) => void;
    onPageSizeChange: (size: number) => void;
}
declare const TableIBSM: React.FC<TableIBSMProps>;
export default TableIBSM;
//# sourceMappingURL=TableIBSM.d.ts.map