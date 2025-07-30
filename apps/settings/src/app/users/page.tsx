"use client";

import React, { useEffect, useMemo, useState } from "react";
import { TableIBSM, ColumnProps } from "@bnext/ui";
import { getUsers } from "../../utils/userService"; // sesuaikan path

const columns: ColumnProps[] = [
  { header: "Nama", field: "name" },
  { header: "User ID", field: "userId" },
  { header: "Email", field: "email" },
  { header: "Branch", field: "branch" },
  { header: "Group", field: "group" },
  { header: "Status", field: "status", template: "badge" },
];

const TableUsersPage = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data || []); // jaga-jaga kalau undefined
      } catch (error) {
        console.error("Failed to fetch users", error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const filteredData = useMemo(() => {
    return (users || []).filter(
      (user) =>
        user.name.toLowerCase().includes(query.toLowerCase()) ||
        user.email.toLowerCase().includes(query.toLowerCase())
    );
  }, [users, query]);

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
    alert(`Delete data dengan ID: ${id}`);
  };

  return (
    <div className="p-4">
      <TableIBSM
        response={response}
        columns={columns}
        addButton={{ visible: true, onClick: handleAdd }}
        search={{
          value: query,
          onChange: (v) => {
            setQuery(v);
            setCurrentPage(1);
          },
        }}
        onEdit={handleEdit}
        onDelete={handleDelete}
        isLoading={loading}
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

export default TableUsersPage;
