"use client"

import React from "react";
import BaseTable, { Column } from "./BaseTable";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";

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

const TableIBSM: React.FC<TableIBSMProps> = ({
  response,
  columns,
  search,
  addButton,
  onEdit,
  onDelete,
  isLoading = false,
  pageSize,
  onPageChange,
  onPageSizeChange,
}) => {
  const startItem = (response.currentPage - 1) * pageSize;
  const renderToolbarLeft = () =>
    search ? (
      <IconField iconPosition="left">
        <InputIcon className="pi pi-search" />
        <InputText
          type="text"
          placeholder={search.placeholder || "Cari Data"}
          value={search.value}
          onChange={(e) => search.onChange(e.target.value)}
        />
      </IconField>
    ) : null;

  const renderToolbarRight = () =>
    addButton?.visible ? (
      <div className="my-2">
        <Button
          label="Buat Baru"
          icon="pi pi-plus"
          severity="success"
          onClick={addButton.onClick}
        />
      </div>
    ) : null;

  const mapColumnsToBase = (columns: ColumnProps[]): Column[] => {
    return columns.map((col) => ({
      header: col.header,
      accessor: col.field,
      template: undefined, // No template used for IBSM
    }));
  };

  return (
    <BaseTable
      variant="ibsm"
      columns={mapColumnsToBase(columns)}
      data={response.data}
      isLoading={isLoading}
      onEdit={(item) => onEdit?.({} as any, item.id)}
      onDelete={(item) => onDelete?.(item.id)}
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
      showActions
    />
  );
};

export default TableIBSM;
