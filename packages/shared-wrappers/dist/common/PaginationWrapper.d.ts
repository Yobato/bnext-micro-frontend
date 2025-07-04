import React from "react";
interface PaginationProps {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    pageSize: number;
    onPageChange: (page: number) => void;
    onPageSize: (size: number) => void;
}
declare const Pagination: React.FC<PaginationProps>;
export default Pagination;
