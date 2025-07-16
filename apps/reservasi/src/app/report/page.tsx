"use client";

import React, { useMemo, useState } from "react";
import { TableDefault, ColumnProps } from "@bnext/ui";

const fullData = [
  { id: "1", name: "Satriyo Bagus", email: "satriyo@example.com", status: "1" },
  { id: "2", name: "Nayla Aulia", email: "nayla@example.com", status: "0" },
  { id: "3", name: "Rizki Pratama", email: "rizki@example.com", status: "1" },
  { id: "4", name: "Adit", email: "adit@example.com", status: "1" },
  { id: "5", name: "Salsa", email: "salsa@example.com", status: "0" },
  { id: "6", name: "Fajar", email: "fajar@example.com", status: "1" },
  { id: "7", name: "Citra", email: "citra@example.com", status: "0" },
  { id: "8", name: "Dwi", email: "dwi@example.com", status: "1" },
  { id: "9", name: "Dina", email: "dina@example.com", status: "1" },
  { id: "10", name: "Putra", email: "putra@example.com", status: "0" },
  { id: "11", name: "Joko", email: "joko@example.com", status: "1" },
  { id: "12", name: "Lina", email: "lina@example.com", status: "1" },
  { id: "13", name: "Arief", email: "arief@example.com", status: "0" },
];

const columns: ColumnProps[] = [
  { header: "Nama", field: "name" },
  { header: "Email", field: "email" },
  { header: "Status", field: "status", template: "badge" },
];

const TableDefaultPage = () => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const filteredData = useMemo(() => {
    return fullData.filter((item) =>
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

  const addButton = {
    visible: true,
    onClick: handleAdd,
  };

  return (
    <div className="p-4">
      <TableDefault
        columns={columns}
        response={response}
        onEdit={handleEdit}
        isLoading={false}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
        onPageSizeChange={(newSize) => {
          setPageSize(newSize);
          setCurrentPage(1);
        }}
        addButton={addButton}
        search={{
          value: query,
          onChange: (v) => {
            setQuery(v);
            setCurrentPage(1);
          },
        }}
      />
    </div>
  );
};

export default TableDefaultPage;
