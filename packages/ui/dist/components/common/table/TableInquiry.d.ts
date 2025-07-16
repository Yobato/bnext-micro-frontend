import React from "react";
export interface ColumnProps {
    header: string;
    field: string;
    template?: string;
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
interface TableInquiryProps {
    response: DataResponse;
    columns: ColumnProps[];
    isLoading?: boolean;
    pageSize: number;
}
declare const TableInquiry: React.FC<TableInquiryProps>;
export default TableInquiry;
//# sourceMappingURL=TableInquiry.d.ts.map