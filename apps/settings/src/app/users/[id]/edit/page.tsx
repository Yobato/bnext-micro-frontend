"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { RootForm, FieldConfig } from "@bnext/ui";
import ClientOnly from "../../../components/Sidebar/ClientOnly";
import { getUserById, editUser } from "apps/settings/src/utils/userService";
import { useToast } from "@bnext/context";

export default function EditUserPage() {
  const { id } = useParams();
  const router = useRouter();
  const { globalOnSuccess, globalOnError } = useToast();

  const [initialValue, setInitialValue] = useState<any>(null);

  const groupOptions = [
    { label: "Developer", value: "Developer" },
    { label: "Tester", value: "Tester" },
    { label: "User", value: "User" },
  ];

  const branchOptions = [
    { label: "ID001 - KANTOR PUSAT", value: "ID001 - KANTOR PUSAT" },
    { label: "ID002 - JAKARTA THAMRIN", value: "ID002 - JAKARTA THAMRIN" },
    {
      label: "ID003 - AREA JAKARTA THAMRIN",
      value: "ID003 - AREA JAKARTA THAMRIN",
    },
  ];

  const fields: FieldConfig[] = [
    {
      name: "group",
      label: "Group User",
      typeForm: "select",
      isRequired: false,
      optionData: groupOptions,
    },
    {
      name: "branch",
      label: "Cabang",
      typeForm: "select",
      isRequired: false,
      optionData: branchOptions,
    },
    {
      name: "name",
      label: "Nama User",
      typeForm: "input",
      isRequired: false,
      maxLength: 60,
    },
    {
      name: "userId",
      label: "User Id",
      typeForm: "input",
      isRequired: false,
      maxLength: 60,
      //   disabled: true, // 👈 User ID tidak bisa diubah
    },
    {
      name: "email",
      label: "Email",
      typeForm: "input",
      isRequired: false,
      maxLength: 120,
    },
    {
      name: "password",
      label: "Password",
      typeForm: "input",
      inputType: "password",
      isRequired: false, // Tidak wajib diisi ulang saat edit
    },
    {
      name: "status",
      label: "Status",
      typeForm: "toggle",
    },
  ];

  const handleSubmit = async (data: any) => {
    try {
      const payload = {
        ...data,
        id, // pastikan ID-nya tetap
        status: data.status ? "active" : "inactive",
      };
      if (!data.password) delete payload.password;
      await editUser(id as string, payload);
      globalOnSuccess("User updated successfully");
      setTimeout(() => router.push("/users"), 1000);
    } catch (error) {
      console.error("Error updating user:", error);
      globalOnError("Gagal mengupdate user");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getUserById(id as string);
        setInitialValue({
          ...user,
          status: user.status === "active",
          password: "",
        });
        console.log("initialValue:", user.branch);
      } catch (error) {
        globalOnError("Gagal mengambil data user");
      }
    };

    fetchData();
  }, [id]);

  if (!initialValue) return <p>Loading...</p>;

  return (
    <div className="grid">
      <div className="col-8">
        <div className="card p-fluid">
          <h6>Edit User</h6>
          <hr />
          <ClientOnly>
            <RootForm
              fields={fields}
              initialValue={initialValue}
              onSubmit={handleSubmit}
            />
          </ClientOnly>
        </div>
      </div>
    </div>
  );
}
