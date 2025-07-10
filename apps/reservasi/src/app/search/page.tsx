"use client";
import React from "react";
import {
  useForm,
  InputTextField,
  InputCurrencyField,
  SelectDropdownField,
  ToggleField,
  CheckboxField,
  MultiSelectField,
  InputMaskField,
} from "@bnext/ui";
import * as Yup from "yup";

export default function Search() {
  const projectsOptions = [
    { label: "Landing Page Consumer", value: "LPC" },
    { label: "EXA", value: "EXA" },
    { label: "XPAN", value: "XPAN" },
  ];

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Nama wajib diisi"),
    phone: Yup.string().required("Phone wajib diisi"),
    email: Yup.string().email().required("Email wajib diisi"),
    price: Yup.string().required("Price wajib diisi"),
    category: Yup.string().required("Category wajib diisi"),
    active: Yup.boolean().required("Status wajib dipilih"),
    terms: Yup.boolean().oneOf(
      [true],
      "**Anda harus menyetujui syarat dan ketentuan"
    ),
    projects: Yup.array().min(1, "Minimal pilih satu projects"),
  });

  const { formData, errors, handleChange, handleSubmit, handleBlur } = useForm({
    initialValue: {
      name: "",
      phone: "",
      email: "",
      price: "",
      category: null,
      active: false,
      terms: false,
      projects: [],
    },
    validationSchema,
    onSubmit: (data) => {
      const konvert = {
        ...data,
        price: parseInt(data.price.replace(/\D/g, ""), 10),
      };
      console.log("Form submitted:", konvert);
    },
  });

  return (
    <>
      <h5>My Form</h5>
      <form onSubmit={handleSubmit}>
        <InputTextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange("name")}
          onBlur={() => handleBlur("name")}
          error={errors.name}
          maxLength={60}
          required
        />
        <InputMaskField
          name="npwp"
          label="NPWP"
          value={formData.phone}
          onChange={handleChange("phone")}
          error={errors.phone}
          required
          placeholder="+62-8xx-xxxx-xxxx"
          mask="+99-999-9999-9999"
        />
        {/* {errors.name && <small className="p-error">{errors.name}</small>} */}
        <InputTextField
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange("email")}
          onBlur={() => handleBlur("email")}
          error={errors.email}
          maxLength={120}
        />
        <InputCurrencyField
          name="price"
          label="Price"
          value={formData.price}
          onChange={handleChange("price")}
          onBlur={() => handleBlur("price")}
          error={errors.price}
          maxLength={120}
        />
        <SelectDropdownField
          name="category"
          label="Kategori"
          value={formData.category}
          onChange={handleChange("category")}
          onBlur={() => handleBlur?.("category")}
          options={[
            { label: "Elektronik", value: "elektronik" },
            { label: "Furnitur", value: "furnitur" },
            { label: "Pakaian", value: "pakaian" },
          ]}
          error={errors.category}
          required
        />
        <ToggleField
          name="active"
          label="Status Aktivasi"
          value={formData.active}
          onChange={handleChange("active")}
          onBlur={() => handleBlur?.("active")}
          error={errors.active}
          required
          onLabel="Aktif"
          offLabel="Tidak Aktif"
        />
        <MultiSelectField
          name="categories"
          label="Kategori Artikel"
          value={formData.projects}
          options={projectsOptions}
          onChange={handleChange("projects")}
          error={errors.projects}
        />
        <CheckboxField
          name="terms"
          label="Saya menyetujui syarat dan ketentuan"
          checked={formData.terms}
          onChange={handleChange("terms")}
          error={errors.terms}
        />

        {/* {errors.email && <small className="p-error">{errors.email}</small>} */}
        <button type="submit">Submit</button>
      </form>
      {/* <Table></Table> */}
    </>
  );
}
