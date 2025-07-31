"use client";

import React, { useEffect, useMemo, useState } from "react";
import { TableIBSM, ColumnProps } from "@bnext/ui";
import { deleteUser, getUsers, User } from "../../utils/userService"; // sesuaikan path
import { useRouter } from "next/navigation";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { useToast } from "@bnext/context";
import { getMe } from "@bnext/utils";

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
  const router = useRouter();

  const { globalOnSuccess, globalOnError } = useToast();
  const [deletingId, setDeletingId] = useState<string | null>(null);

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

  const [currentUser, setCurrentUser] = useState<User | null>(null);
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = await getMe();
      setCurrentUser(user);
    };
    fetchCurrentUser();
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
    router.push(`/users/${id}/edit`);
  };

  const handleAdd = () => {
    router.push("/users/create");
  };

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    try {
      await deleteUser(id);
      setUsers((prev) => prev.filter((u) => u.id !== id));
      globalOnSuccess("User berhasil dihapus");
    } catch (error) {
      globalOnError("Gagal menghapus user");
      console.error("Error deleting user:", error);
    } finally {
      setDeletingId(null);
    }
  };

  const confirmDelete = (id: string) => {
    if (id === currentUser?.id || id === currentUser?.userId) {
      globalOnError(
        "Kamu tidak bisa menghapus akunmu sendiri saat sedang login"
      );
      return;
    }
    confirmDialog({
      message: "Apakah Anda yakin ingin menghapus user ini?",
      header: "Konfirmasi Hapus",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Ya, hapus user",
      rejectLabel: "Batal",
      accept: () => handleDelete(id),
    });
  };

  return (
    <div>
      <ConfirmDialog />
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
        onDelete={confirmDelete}
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
