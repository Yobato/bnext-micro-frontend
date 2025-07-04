// 'use client'
// import React from "react";
// import { useSearchParams, useRouter, usePathname } from 'next/navigation';
// import { default as Pagination } from "./pagination";
// import { Toolbar } from 'primereact/toolbar';
// import { Button } from "primereact/button";
// import { Badge } from "primereact/badge";

// interface Data {
//     [key: string]: any;
// }

// interface AddButtonProps {
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
//     response: DataResponse;
//     children: React.ReactNode;
//     addButton?: AddButtonProps;
//     editBtnAct?: (event: React.MouseEvent<HTMLElement>, id: string) => void;
//     isLoading?: boolean | false;
// }

// interface Columnprops {
//     header: string;
//     field: string;
//     template?: string;
// }
// const Column: React.FC<Columnprops> = ({ header, field }) => {
//     return <></>;
// }

// const TableData: React.FC<TableDataProps> = React.memo(({ response, addButton, children, editBtnAct }) => {
//     const searchParams = useSearchParams();
//     const ParamNum = searchParams.get('pageNum') || '1';
//     const ParamSize = searchParams.get('pageSize') || '10';
//     const router = useRouter();
//     const pathname = usePathname();
//     const handleClick = (pageNum: number) => {
//         router.push(`${pathname}?pageNum=${pageNum}&pageSize=${ParamSize}`);
//     };
//     const handleChange = (pageSize: number) => {
//         router.push(`${pathname}?pageNum=1&pageSize=${pageSize}`);
//     };

//     const startItem = (Number(ParamNum) - 1) * Number(ParamSize);

//     const leftToolBar = () => {
//         return (
//             <>
//                 <input type="text" name="search" id="search" placeholder="Cari Data" className="p-inputtext p-component" />
//             </>
//         )
//     }


//     const rightToolbarTemplate = () => {
//         return (
//             <>
//                 <div className="my-2">
//                     {addButton && addButton.visible && (
//                         <Button
//                             label="New"
//                             icon="pi pi-plus"
//                             severity="success"
//                             className="mr-2"
//                             onClick={addButton.onClick}
//                         />
//                     )}
//                 </div>
//             </>
//         )
//     }

//     const isTemplate = (type: string, value: string) => {
//         let template;

//         switch (type) {
//             case "badge": 
//                 const type = (value == "1") ? "success" : "danger";
//                 const values = (value == "1") ? "Active" : "Inactive";
//                 template = <Badge value={values} severity={type}></Badge>
//                 break;
//         }

//         return template;
//     }

//     return (
//         <div className="p-datatable-gridlines p-datatable p-component p-datatable-responsive-scroll p-datatable-gridlines">
//             <div className="p-datatable-header">
//                 <Toolbar left={leftToolBar} right={rightToolbarTemplate()} />
//             </div>
//             <div className="p-datatable-wrapper loading-inside">
//                 <table className='p-datatable-table' role="table">
//                     <thead className="p-datatable-thead">
//                         <tr role="row">
//                             <th className="w-min">No</th>
//                             {React.Children.map(children, (child) => (
//                                 <th role="columnheader" key={(child as React.ReactElement).props.field}>
//                                     <div className="p-column-header-content">{(child as React.ReactElement).props.header}</div>
//                                 </th>
//                             ))}
//                             <th>#</th>
//                         </tr>
//                     </thead>
//                     <tbody className="p-datatable-tbody loading-inside">
//                         { response?.data.map((item, i) => {
//                                 const itemIndex = startItem + i + 1;
//                                 return (
//                                     <tr role="row" key={i}>
//                                         <td role="cell">{itemIndex}</td>
//                                         {React.Children.map(children, (child) => {
//                                             const field = (child as React.ReactElement).props.field;
//                                             const template = (child as React.ReactElement).props.template;

//                                             const cellValue = item[field as keyof Data];
//                                             const values = (typeof template != 'undefined') ? isTemplate(template, cellValue) : cellValue;

//                                             return <td role="cell" key={field}>{values}</td>;
//                                         })}
//                                         <td>
//                                             <Button icon="pi pi-pencil" rounded text raised size="small" severity="info"
//                                                 onClick={(event) => editBtnAct ? editBtnAct(event, item.id) : undefined} />
//                                             &nbsp;
//                                         </td>
//                                     </tr>
//                                 )
//                             })
//                         }
//                     </tbody>
//                 </table>
//             </div>
//             <div className="p-datatable-footer">
//                 <Pagination
//                     totalItems={response.totalItems}
//                     totalPages={response.totalPages}
//                     currentPage={response.currentPage}
//                     onPageChange={handleClick}
//                     onPageSize={handleChange}>
//                 </Pagination>
//             </div>
//         </div>
//     )
// })

// export { TableData, Column };