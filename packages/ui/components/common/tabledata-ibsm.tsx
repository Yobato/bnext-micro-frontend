// 'use client';
// import React, { useState, useCallback, useMemo, useEffect, useRef, } from 'react';
// import { useSearchParams, useRouter, usePathname, } from 'next/navigation';
// import { default as Pagination } from './pagination';
// import { Toolbar } from 'primereact/toolbar';
// import { Button } from 'primereact/button';
// import { IconField } from 'primereact/iconfield';
// import { InputIcon } from 'primereact/inputicon';
// import { InputText } from 'primereact/inputtext';
// import debounce from 'lodash.debounce';

// interface Data { 
//     [key: string]: any; 
// }

// interface AddButtonProps { 
//     visible: boolean; 
//     onClick: () => void; 
// }

// interface DataResponse { 
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
//     deleteBtnAct?: (id: string) => void;
//     isLoading?: boolean;
// }

// interface ColumnProps { 
//     header: string; 
//     field: string; 
// }

// const ColumnIbsm: React.FC<ColumnProps> = () => {
//     return null;
// };

// const TableDataIbsm: React.FC<TableDataProps> = React.memo(({ response, addButton, children, editBtnAct, deleteBtnAct, isLoading = false, }) => {
//     const searchParams = useSearchParams();
//     const router = useRouter();
//     const pathname = usePathname();

//     const ParamNum = searchParams.get('pageNum') || '1';
//     const ParamSize = searchParams.get('pageSize') || '10';
//     const ParamSearch = searchParams.get('search') || '';

//     const [searchTerm, setSearchTerm] = useState(ParamSearch);

//     const currentPage = Number(ParamNum);
//     const pageSize = Number(ParamSize);

//     const handlePageChange = useCallback((pageNum: number) => {
//         router.push(`${pathname}?pageNum=${pageNum}&pageSize=${ParamSize}&search=${searchTerm}`);
//     }, [router, pathname, ParamSize, searchTerm]);

//     const handlePageSizeChange = useCallback((pageSize: number) => {
//             router.push(`${pathname}?pageNum=1&pageSize=${pageSize}&search=${searchTerm}`);
//         }, [router, pathname, searchTerm]
//     );

//     const startItem = useMemo(() => (Number(ParamNum) - 1) * Number(ParamSize), [ParamNum, ParamSize]);

//     // Add
//     const rightToolbarTemplate = useMemo(() => {
//         return (
//             <div className="my-2">
//                 {addButton && addButton.visible && (
//                     <Button
//                     label="Buat Baru"
//                     icon="pi pi-plus"
//                     severity="success"
//                     className="mr-2"
//                     onClick={addButton.onClick}
//                     />
//                 )}
//             </div>
//         );
//     }, [addButton]);

//     // Search
//     const debouncedSearch = useMemo(() => debounce((value: string) => {
//         router.push(`${pathname}?pageNum=1&pageSize=${ParamSize}&search=${value}`);
//     }, 500), [router, pathname, ParamSize]);

//     const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setSearchTerm(e.target.value);
//         debouncedSearch(e.target.value);
//     };

//     const leftToolBar = useMemo(() => {
//         return (
//             <IconField iconPosition='left'>
//                 <InputIcon className='pi pi-search'/>
//                 <InputText
//                     type='text'
//                     placeholder='Cari Data'
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                 />
//             </IconField>
//         );
//     }, [searchTerm]);

//     useEffect(() => {
//         return () => {
//             debouncedSearch.cancel();
//         };
//     }, [debouncedSearch]);

//     return (
//       <div className="p-datatable-gridlines p-datatable p-component p-datatable-responsive-scroll p-datatable-gridlines">
//         <div className="p-datatable-header">
//             <Toolbar start={leftToolBar} end={rightToolbarTemplate} />
//         </div>
//         <div className="p-datatable-wrapper loading-inside">
//           <table className="p-datatable-table" role="table">
//             <thead className="p-datatable-thead">
//               <tr role="row">
//                 <th style={{ width: '30px' }}>No</th>
//                 {React.Children.map(children, (child) => (
//                   <th role="columnheader" key={(child as React.ReactElement).props.field}>
//                     <div className="p-column-header-content">
//                         {(child as React.ReactElement).props.header}
//                     </div>
//                   </th>
//                 ))}
//                 <th style={{ width: '30px' }}>Ubah</th>
//                 <th style={{ width: '30px' }}>Hapus</th>
//               </tr>
//             </thead>
//             <tbody className="p-datatable-tbody loading-inside">
//               {isLoading ? (
//                 <tr>
//                   <td colSpan={React.Children.count(children) + 2}>
//                     <div className="loading-start">Memuat...</div>
//                   </td>
//                 </tr>
//               ) : response && response.data && response.data.length > 0 ? (
//                 response.data.map((item, i) => {
//                   const itemIndex = startItem + i + 1;
//                   return (
//                     <tr role="row" key={i}>
//                       <td role="cell">{itemIndex}</td>
//                       {React.Children.map(children, (child) => {
//                         const field = (child as React.ReactElement).props.field;
//                         const cellValue = item[field];
//                         return (
//                           <td role="cell" key={field}>
//                             {cellValue}
//                           </td>
//                         );
//                       })}
//                       <td>
//                         {editBtnAct && (
//                             <Button
//                                 icon="pi pi-pencil"
//                                 className="p-button-text p-button-rounded p-button-plain"
//                                 onClick={(event) => editBtnAct(event, item.id)}
//                             />
//                         )}
//                       </td>
//                       <td>
//                         {deleteBtnAct && (
//                             <Button
//                                 icon="pi pi-trash"
//                                 className="p-button-text p-button-rounded p-button-plain"
//                                 onClick={() => deleteBtnAct(item.id)}
//                             />
//                         )}
//                       </td>
//                     </tr>
//                   );
//                 })
//               ) : (
//                 <tr>
//                   <td colSpan={React.Children.count(children) + 2}>
//                     Data tidak ditemukan.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//         <div className="p-datatable-footer">
//           <Pagination
//             totalItems={response.totalItems}
//             totalPages={response.totalPages}
//             currentPage={response.currentPage}
//             // pageSize={pageSize}
//             onPageChange={handlePageChange}
//             onPageSize={handlePageSizeChange}
//           />
//         </div>
//       </div>
//     );
//   }
// );

// export { TableDataIbsm, ColumnIbsm };
