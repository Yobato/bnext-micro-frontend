"use client";
import React, { ReactNode } from "react";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import BaseTable, { Column } from "./BaseTable";

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
  search?: {
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
  };
  // onDelete?: (id: string) => void;
  onPageChange: (pageNum: number) => void;
  onPageSizeChange: (pageSize: number) => void;
  pageSize: number;
  isLoading?: boolean;
}

const isTemplate = (type: string, value: string): ReactNode => {
  switch (type) {
    case "badge":
      const badgeType = value === "1" ? "success" : "danger";
      const label = value === "1" ? "Active" : "Inactive";
      return <Badge value={label} severity={badgeType} />;
    default:
      return value;
  }
};

const TableDefault: React.FC<TableDefaultProps> = ({
  response,
  columns,
  addButton,
  search,
  onEdit,
  // onDelete,
  onPageChange,
  onPageSizeChange,
  pageSize,
  isLoading = false,
}) => {
  const startItem = (response.currentPage - 1) * pageSize;

  const renderToolbarLeft = () => (
    search?(
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Cari Data"
        className="p-inputtext p-component"
        value={search.value}
        onChange={(e)=> search.onChange(e.target.value)}
      />
    ):null
  );

  const renderToolbarRight = () => (
    <div className="my-2">
      {addButton?.visible && (
        <Button
          label="New"
          icon="pi pi-plus"
          severity="success"
          className="mr-2"
          onClick={addButton.onClick}
        />
      )}
    </div>
  );

  const mapColumnsToBase = (columns: ColumnProps[]): Column[] => {
    return columns.map((col) => ({
      header: col.header,
      accessor: col.field,
      template: col.template
        ? (value, row) => isTemplate(col.template!, value)
        : undefined,
    }));
  };

  return (
    <BaseTable
      variant="default"
      columns={mapColumnsToBase(columns)}
      data={response.data}
      isLoading={isLoading}
      onEdit={(item) => onEdit?.({} as any, item.id)}
      // onDelete={(item) => onDelete?.(item.id)}
      renderToolbarLeft={renderToolbarLeft}
      renderToolbarRight={renderToolbarRight}
      paginationProps={{
        totalRecords: response.totalItems,
        currentPage: response.currentPage,
        pageSize,
        onPageChange,
        onPageSizeChange,
      }}
      startItem={startItem}
    />
  );
};

export default TableDefault;
