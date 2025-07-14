import React from "react";
import { PaginationProps } from "../Pagination";
export type TableVariant = "default" | "ibsm" | "print" | "inquiry";
export type Column = {
    header: string;
    accessor: string;
    template?: (value: any, row: any) => React.ReactNode;
};
export type BaseTableProps = {
    columns: Column[];
    data: Record<string, any>[];
    isLoading: boolean;
    renderToolbarLeft?: () => React.ReactNode;
    renderToolbarRight?: () => React.ReactNode;
    paginationProps?: PaginationProps;
    showActions?: boolean;
    onEdit?: (item: any) => void;
    onDelete?: (item: any) => void;
    customNoDataMessage?: string;
    variant: TableVariant;
    startItem?: number;
    templateResolver?: (templateType: string, value: any) => React.ReactNode;
};
declare const BaseTable: React.FC<BaseTableProps>;
export default BaseTable;
//# sourceMappingURL=BaseTable.d.ts.map