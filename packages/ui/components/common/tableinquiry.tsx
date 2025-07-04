'use client';
import React from 'react';

interface Data {
  [key: string]: any;
}

interface DataResponse {
  data: Data[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
}

interface TableDataProps {
  response: DataResponse;
  children: React.ReactNode;
  isLoading?: boolean;
}

interface ColumnProps {
  header: string;
  field: string;
  template?: string;
}

const ColumnInquiry: React.FC<ColumnProps> = ({ header }) => {
  return <></>; 
};

const TableDataInquiry: React.FC<TableDataProps> = React.memo(({ response, children }) => {
  const startItem = ((response.currentPage || 1) - 1) * 10;

  const isTemplate = (type: string, value: string) => {
    let template;
    switch (type) {
      case 'badge':
        const badgeType = value == '1' ? 'success' : 'danger';
        const displayText = value == '1' ? 'Active' : 'Inactive';
        template = <span className={`badge badge-${badgeType}`}>{displayText}</span>;
        break;
    }
    return template;
  };

  return (
    <div className="p-datatable-gridlines p-datatable p-component p-datatable-responsive-scroll p-datatable-gridlines">
            <div className="p-datatable-wrapper loading-inside">
                <table className='p-datatable-table' role="table">
                    <thead className="p-datatable-thead" >
                        <tr role="row">
                            <th className="w-min">No</th>
                                {React.Children.map(children, (child) => (
                                    <th role="columnheader" key={(child as React.ReactElement).props.field}>
                                        <div className="p-column-header-content">{(child as React.ReactElement).props.header}</div>
                                    </th>
                                ))}
                        </tr>
                    </thead>
                    <tbody className="p-datatable-tbody loading-inside">
                      {Array.isArray(response?.data) && response.data.length > 0 ? (
                        response.data.some((item) => item.empty === true) ? (
                          <tr>
                            <td colSpan={React.Children.count(children)} >Tidak Ada Data</td>
                          </tr>
                        ) : (
                          response.data.map((item, i) => {
                            const itemIndex = startItem + i + 1;
                            return (
                              <tr role="row" key={i}>
                              <td role="cell">{itemIndex}</td>
                                {React.Children.map(children, (child) => {
                                  const field = (child as React.ReactElement).props.field;
                                  const template = (child as React.ReactElement).props.template;
                                  const cellValue = item[field as keyof typeof item] || '-';
                                  const values = typeof template !== 'undefined'
                                    ? isTemplate(template, cellValue)
                                    : cellValue;
                                  return <td role="cell" key={field}>{values}</td>;
                                })}
                              </tr>
                            );
                          })
                        )
                      ) : (
                      <tr>
                      <td colSpan={React.Children.count(children)}>
                            Data tidak ditemukan :(
                      </td>
                      </tr>
                      )}
                    </tbody>
                </table>
            </div>
        </div>
  );
});

export { TableDataInquiry, ColumnInquiry };
