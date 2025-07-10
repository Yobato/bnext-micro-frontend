"use client";
import React from "react";
import {
  useForm,
  InputTextField,
  InputCurrencyField,
  SelectDropdownField,
  ToggleField,
  CheckboxField,
} from "@bnext/ui";
import * as Yup from "yup";

export default function Search() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Nama wajib diisi"),
    email: Yup.string().email().required("Email wajib diisi"),
    price: Yup.string().required("Price wajib diisi"),
    category: Yup.string().required("Category wajib diisi"),
    active: Yup.boolean().required("Status wajib dipilih"),
    terms: Yup.boolean().oneOf(
      [true],
      "**Anda harus menyetujui syarat dan ketentuan"
    ),
  });

  const { formData, errors, handleChange, handleSubmit, handleBlur } = useForm({
    initialValue: {
      name: "",
      email: "",
      price: "",
      category: null,
      active: false,
      terms: false,
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
