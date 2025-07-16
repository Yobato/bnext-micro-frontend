"use client";

import React from "react";
import { Badge } from "primereact/badge";
import BaseTable, { Column } from "./BaseTable";

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

const isTemplate = (type: string, value: string): React.ReactNode => {
  switch (type) {
    case "badge":
      const badgeType = value === "1" ? "success" : "danger";
      const label = value === "1" ? "Active" : "Inactive";
      return <Badge value={label} severity={badgeType} />;
    default:
      return value;
  }
};

const TableInquiry: React.FC<TableInquiryProps> = ({
  response,
  columns,
  isLoading = false,
  pageSize,
}) => {
  const startItem = (response.currentPage - 1) * pageSize;

  const mapColumnsToBase = (columns: ColumnProps[]): Column[] => {
    return columns.map((col) => ({
      header: col.header,
      accessor: col.field,
      template: col.template
        ? (value) => isTemplate(col.template!, value)
        : undefined,
    }));
  };
  return (
    <BaseTable
      variant="inquiry"
      columns={mapColumnsToBase(columns)}
      data={response.data}
      isLoading={isLoading}
      startItem={startItem}
      customNoDataMessage="Data tidak ditemukan :("
    />
  );
};

export default TableInquiry;
