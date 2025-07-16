"use client";

import React from "react";
import { RootForm } from "@bnext/ui";
import { FieldConfig } from "@bnext/ui";
import ClientOnly from "../components/Sidebar/ClientOnly";

export default function SearchPage() {
  const projectsOptions = [
    { label: "Landing Page Consumer", value: "LPC" },
    { label: "EXA", value: "EXA" },
    { label: "XPAN", value: "XPAN" },
  ];

  const fields: FieldConfig[] = [
    {
      name: "name",
      label: "Name",
      typeForm: "input",
      isRequired: true,
      maxLength: 60,
    },
    {
      name: "phone",
      label: "Phone",
      typeForm: "inputmask",
      isRequired: true,
      placeholder: "+62-8xx-xxxx-xxxx",
      mask: "+99-999-9999-9999",
    },
    {
      name: "birthDate",
      label: "Tanggal Lahir",
      typeForm: "calendar",
      isRequired: true,
    },
    {
      name: "gender",
      label: "Jenis Kelamin",
      typeForm: "radio",
      isRequired: true,
      optionData: [
        { label: "Laki-laki", value: "L" },
        { label: "Perempuan", value: "P" },
      ],
    },
    {
      name: "email",
      label: "Email",
      typeForm: "input",
      isRequired: true,
      maxLength: 120,
    },
    {
      name: "price",
      label: "Price",
      typeForm: "inputCurrency",
      isRequired: true,
      maxLength: 120,
    },
    {
      name: "category",
      label: "Kategori",
      typeForm: "select",
      isRequired: true,
      optionData: [
        { label: "Elektronik", value: "elektronik" },
        { label: "Furnitur", value: "furnitur" },
        { label: "Pakaian", value: "pakaian" },
      ],
    },
    {
      name: "active",
      label: "Status Aktivasi",
      typeForm: "toggle",
      isRequired: true,
    },
    {
      name: "projects",
      label: "Kategori Artikel",
      typeForm: "multiselect",
      isRequired: true,
      optionData: projectsOptions,
    },
    {
      name: "orders",
      label: "Jumlah Order",
      typeForm: "number",
      isRequired: true,
    },
    {
      name: "terms",
      label: "Saya menyetujui syarat dan ketentuan",
      typeForm: "checkbox",
      isRequired: true,
    },
  ];

  const initialValue = {
    name: "",
    phone: "",
    birthDate: null,
    gender: "",
    email: "",
    price: "",
    category: null,
    active: false,
    terms: false,
    projects: [],
    orders: 0,
  };

  const handleSubmit = (data: typeof initialValue) => {
    const konvert = {
      ...data,
      price: parseInt(data.price.replace(/\D/g, ""), 10),
    };
    console.log("Form submitted:", konvert);
  };

  return (
    <div className="grid">
      <div className="col-12">
        <div className="card p-fluid">
          <h6>My Form</h6>
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
