"use client";

import React from "react";
import { RootForm } from "@bnext/ui";
import { FieldConfig } from "@bnext/ui";
import ClientOnly from "../../components/Sidebar/ClientOnly";
import { createUser } from "apps/settings/src/utils/userService";
import { useRouter } from "next/navigation";
import { useToast } from "@bnext/context";

export default function SearchPage() {
  const router = useRouter();
  const { globalOnSuccess, globalOnError } = useToast();

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
      isRequired: true,
      optionData: groupOptions,
    },
    {
      name: "branch",
      label: "Cabang",
      typeForm: "select",
      isRequired: true,
      optionData: branchOptions,
    },
    {
      name: "name",
      label: "Nama User",
      typeForm: "input",
      isRequired: true,
      maxLength: 60,
    },
    {
      name: "userId",
      label: "User Id",
      typeForm: "input",
      isRequired: true,
      maxLength: 60,
    },
    {
      name: "email",
      label: "Email",
      typeForm: "input",
      isRequired: true,
      maxLength: 120,
    },
    {
      name: "password",
      label: "Password",
      typeForm: "input",
      inputType: "password",
      isRequired: true,
      maxLength: 120,
    },
    {
      name: "status",
      label: "Status",
      typeForm: "toggle",
      //   isRequired: true,
    },
  ];

  const initialValue = {
    id: "",
    group: null,
    branch: null,
    name: "",
    userId: "",
    email: "",
    password: "",
    status: false,
    // userDukcapil: "",
    // activateDate: null,
  };

  const handleSubmit = async (data: typeof initialValue) => {
    try {
      const payload = {
        ...data,
        status: data.status ? "active" : "inactive", // ✅ konversi di sini
      };

      const result = await createUser(payload);
      console.log("Form submitted:", payload);
      globalOnSuccess("User created successfully");
      setTimeout(() => {
        router.push("/users");
      }, 1000);
    } catch (error) {
      console.error("Error creating user:", error);
      globalOnError("Gagal membuat user");
    }
  };


  return (
    <div className="grid">
      <div className="col-8">
        <div className="card p-fluid">
          <h6>Buat User</h6>
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
