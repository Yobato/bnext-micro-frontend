import React from "react";
import Pagination, { PaginationProps } from "../Pagination";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
// import { TableVariant } from "./tablevariants";

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

const BaseTable: React.FC<BaseTableProps> = ({
  columns,
  data,
  isLoading = false,
  renderToolbarLeft,
  renderToolbarRight,
  paginationProps,
  showActions = false,
  onEdit,
  onDelete,
  customNoDataMessage = "Data tidak ditemukan",
  variant,
  startItem = 0,
  templateResolver,
}) => {
  const renderActionButtons = (item: any) => {
    return (
      <div className="flex gap-2">
        {onEdit && (
          <Button
            icon="pi pi-pencil"
            className="p-button-text p-button-rounded p-button-plain"
            onClick={() => onEdit(item)}
          />
        )}
        {onDelete && (
          <Button
            icon="pi pi-trash"
            className="p-button-text p-button-rounded p-button-plain"
            onClick={() => onDelete(item)}
          />
        )}
      </div>
    );
  };

  const shouldShowActions = showActions || !!onEdit || !!onDelete;
  return (
    <div className="p-datatable-gridlines p-datatable p-component p-datatable-responsive-scroll p-datatable-gridlines">
      {(renderToolbarLeft || renderToolbarRight) && (
        <div className="p-datatable-header">
          <Toolbar
            start={renderToolbarLeft ? renderToolbarLeft() : undefined}
            end={renderToolbarRight ? renderToolbarRight() : undefined}
          />
        </div>
      )}

      <div className="p-datatable-wrapper loading-inside">
        <table className="p-datatable-table" role="table">
          <thead className="p-datatable-thead">
            <tr role="row">
              <th className="w-min">No</th>
              {columns.map((col) => (
                <th role="columnheader" key={col.accessor}>
                  <div className="p-column-header-content">{col.header}</div>
                </th>
              ))}
              {shouldShowActions && <th style={{ width: 60 }}>#</th>}
            </tr>
          </thead>
          <tbody className="p-datatable-tbody loading-inside">
            {isLoading ? (
              <tr>
                <td colSpan={columns.length + (shouldShowActions ? 2 : 1)}>
                  <div className="loading-start">Memuat...</div>
                </td>
              </tr>
            ) : data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} role="row">
                  <td role="cell">{startItem + index + 1}</td>
                  {columns.map((col) => {
                    const value = item[col.accessor];
                    let rendered: React.ReactNode;
                    if (typeof col.template === "function") {
                      rendered = col.template(value, item);
                    } else if (
                      typeof col.template === "string" &&
                      templateResolver
                    ) {
                      rendered = templateResolver(col.template, value);
                    } else {
                      rendered = value;
                    }
                    return (
                      <td key={col.accessor} role="cell">
                        {rendered}
                      </td>
                    );
                  })}
                  {shouldShowActions && <td>{renderActionButtons(item)}</td>}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length + (shouldShowActions ? 2 : 1)}>
                  {customNoDataMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {paginationProps && (
        <div className="p-datatable-footer">
          <Pagination {...paginationProps} />
        </div>
      )}
    </div>
  );
};

export default BaseTable;
