// 'use client'
// import React, { useState } from "react";
// import { useSearchParams, useRouter, usePathname } from 'next/navigation';
// import { default as Pagination } from "./pagination";
// import { Toolbar } from 'primereact/toolbar';
// import { Button } from "primereact/button";

// interface Data {
//     [key: string]: any;
// }

// interface AddButtonProps {
//     visible: boolean; 
//     onClick: () => void; 
// }

// interface PrintButtonProps {
//     visible: boolean;
//     onClick: () => void;
// }

// interface ExportButtonProps {
//     visible: boolean;
//     onClick: () => void;
// }

// interface DataResponse {
//     [key: string]: any;
//     data: Data[];
//     totalItems: number;
//     totalPages: number;
//     currentPage: number;
// }

// interface TableDataProps {
//     response: DataResponse | undefined;
//     children: React.ReactNode;
//     addButton?: AddButtonProps;
//     printButton?: PrintButtonProps;
//     exportButton?: ExportButtonProps;
//     editBtnAct?: (event: React.MouseEvent<HTMLElement>, id: string) => void;
//     isLoading?: boolean | false;
// }

// interface PaginationProps {
//     totalItems: number;
//     totalPages: number;
//     currentPage: number;
// }

// interface Columnprops {
//     header: string;
//     field: string;
// }

// const ColumnPrint: React.FC<Columnprops> = ({ header, field }) => {
//     return <></>;
// }

// const TableDataPrint: React.FC<TableDataProps> = React.memo(({ response, addButton, printButton, exportButton, children, editBtnAct, isLoading }) => {
//     const searchParams = useSearchParams(); // Use searchParams to get query parameters
//     const ParamNum = searchParams.get('pageNum') || '1'; // Get pageNum from searchParams, default to 1
//     const ParamSize = searchParams.get('pageSize') || '10'; // Get pageNum from searchParams, default to 1
//     const router = useRouter();
//     const [loading, setLoading] = useState<boolean>(false)
//     const pathname = usePathname();

//     const currentPage = Number(ParamNum);
//     const pageSize = Number(ParamSize);

//     const handleClick = (pageNum: number) => {
//         router.push(`${pathname}?pageNum=${pageNum}&pageSize=${ParamSize}`);
//     };
//     const handleChange = (pageSize: number) => {
//         router.push(`${pathname}?pageNum=1&pageSize=${pageSize}`);
//     };

//     const startItem = (Number(ParamNum) - 1) * Number(ParamSize);

//     const rightToolbarTemplate = () => {
//         return (
//             <>
//                 <div className="flex flex-warp gap-3">
//                     {addButton && addButton.visible && (
//                         <Button
//                             label="Buat Baru"
//                             icon="pi pi-plus"
//                             severity="success"
//                             // className="mr-2"
//                             onClick={addButton.onClick}
//                         />
//                     )}
//                     {printButton && printButton.visible && (
//                         <Button
//                             label="Cetak"
//                             icon="pi pi-print"
//                             severity="success"
//                             onClick={printButton.onClick}
//                         />
//                     )}
//                     {exportButton && exportButton.visible && (
//                         <Button
//                             label="Export"
//                             icon="pi pi-file-excel"
//                             severity="success"
//                             onClick={exportButton.onClick}
//                         />
//                     )}
//                 </div>
//             </>
//         )
//     }


//     const leftToolBar = () => {
//         return (
//             <>
//                 <input type="text" name="search" id="search" placeholder="Cari Data" className="p-inputtext p-component" />
//             </>
//         )
//     }

//     return (
//         <div className="p-datatable-gridlines p-datatable p-component p-datatable-responsive-scroll p-datatable-gridlines">
//             <div className="p-datatable-header">
//                 <Toolbar start={leftToolBar} end={rightToolbarTemplate()} />
//             </div>
//             <div className="p-datatable-wrapper loading-inside">
//                 <table className='p-datatable-table' role="table">
//                     <thead className="p-datatable-thead">
//                         <tr role="row">
//                             <th style={{ width: 10 }}>No</th>
//                             {React.Children.map(children, (child) => (
//                                 <th role="columnheader" key={(child as React.ReactElement).props.field}>
//                                     <div className="p-column-header-content">{(child as React.ReactElement).props.header}</div>
//                                 </th>
//                             ))}
//                             <th>#</th>
//                         </tr>
//                     </thead>
//                     <tbody className="p-datatable-tbody loading-inside">
//                         {isLoading == true ? (
//                             <tr>
//                                 <td>
//                                     <div className="loading-start">
//                                     </div>
//                                 </td>
//                             </tr>
//                         ) : (
//                             response?.data?.map((item, i) => {
//                                 const itemIndex = startItem + i + 1;
//                                 return (
//                                     <tr role="row" key={i}>
//                                         <td role="cell">{itemIndex}</td>
//                                         {React.Children.map(children, (child) => {
//                                             const field = (child as React.ReactElement).props.field;
//                                             const cellValue = item[field as keyof Data];
//                                             return <td role="cell" key={field}>{cellValue}</td>;
//                                         })}
//                                         <td><i className="pi pi-pencil" onClick={(event) => editBtnAct ? editBtnAct(event, item.id) : undefined} style={{cursor: 'pointer'}}></i></td>
//                                     </tr>
//                                 );
//                             }) || (
//                                 <tr>
//                                     <td colSpan={React.Children.count(children) + 2}>
//                                         Belum connect DB :(
//                                     </td>
//                                 </tr>
//                             )
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//             <div className="p-datatable-footer">
//                 <Pagination
//                     totalItems={response?.totalItems || 0}
//                     totalPages={response?.totalPages || 1}
//                     currentPage={currentPage}
//                     // pageSize={pageSize}
//                     onPageChange={handleClick}
//                     onPageSize={handleChange}>
//                 </Pagination>
//             </div>
//         </div>
//     )
// })

// export { TableDataPrint, ColumnPrint };
