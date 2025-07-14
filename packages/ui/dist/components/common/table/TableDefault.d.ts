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
export interface Data {
    [key: string]: any;
}
export interface DataResponse {
    data: Data[];
    totalItems: number;
    totalPages: number;
    currentPage: number;
}
interface TableDefaultProps {
    response: DataResponse;
    columns: ColumnProps[];
    addButton?: AddButtonProps;
    onEdit?: (event: React.MouseEvent<HTMLElement>, id: string) => void;
    onPageChange: (pageNum: number) => void;
    onPageSizeChange: (pageSize: number) => void;
    pageSize: number;
    isLoading?: boolean;
}
declare const TableDefault: React.FC<TableDefaultProps>;
export default TableDefault;
//# sourceMappingURL=TableDefault.d.ts.map