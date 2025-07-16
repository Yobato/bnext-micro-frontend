"use client";

import React, { useMemo, useState } from "react";
import { TableDefault, ColumnProps, TableIBSM } from "@bnext/ui";

const fullData = [
  { id: "1", name: "Satriyo Bagus", email: "satriyo@example.com" },
  { id: "2", name: "Nayla Aulia", email: "nayla@example.com" },
  { id: "3", name: "Rizki Pratama", email: "rizki@example.com" },
  { id: "4", name: "Adit", email: "adit@example.com" },
  { id: "5", name: "Salsa", email: "salsa@example.com" },
  { id: "6", name: "Fajar", email: "fajar@example.com" },
  { id: "7", name: "Citra", email: "citra@example.com" },
  { id: "8", name: "Dwi", email: "dwi@example.com" },
  { id: "9", name: "Dina", email: "dina@example.com" },
  { id: "10", name: "Putra", email: "putra@example.com" },
  { id: "11", name: "Joko", email: "joko@example.com" },
  { id: "12", name: "Lina", email: "lina@example.com" },
  { id: "13", name: "Arief", email: "arief@example.com" },
];

const columns: ColumnProps[] = [
  { header: "Nama", field: "name" },
  { header: "Email", field: "email" },
  //   { header: "Status", field: "status", template: "badge" },
];

const TableIBSMPage = () => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const filteredData = useMemo(() => {
    return fullData.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.email.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const paginatedData = filteredData.slice(start, end);

  const response = {
    data: paginatedData,
    totalItems: filteredData.length,
    totalPages: Math.ceil(filteredData.length / pageSize),
    currentPage,
  };

  const handleEdit = (_e: any, id: string) => {
    alert(`Edit data dengan ID: ${id}`);
  };

  const handleAdd = () => {
    alert("Klik tombol tambah data");
  };

  const handleDelete = (id: string) => {
    alert(`Delete data dengan dengan ID: ${id}`);
  };

  const addButton = {
    visible: true,
    onClick: handleAdd,
  };

  return (
    <div className="p-4">
      <TableIBSM
        response={response}
        columns={columns}
        addButton={addButton}
        search={{
          value: query,
          onChange: (v) => {
            setQuery(v);
            setCurrentPage(1);
          },
        }}
        onEdit={handleEdit}
        onDelete={handleDelete}
        isLoading={false}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
        onPageSizeChange={(newSize) => {
          setPageSize(newSize);
          setCurrentPage(1);
        }}
      />
    </div>
  );
};

export default TableIBSMPage;
