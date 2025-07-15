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
  InputNumberField,
  CalendarField,
  RadioGroupField,
} from "@bnext/ui";
import * as Yup from "yup";
import { Button } from "primereact/button";

export default function Search() {
  const projectsOptions = [
    { label: "Landing Page Consumer", value: "LPC" },
    { label: "EXA", value: "EXA" },
    { label: "XPAN", value: "XPAN" },
  ];

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Nama wajib diisi"),
    phone: Yup.string().required("Phone wajib diisi"),
    birthDate: Yup.date().required("Tanggal lahir wajib diisi"),
    gender: Yup.string().required("Jenis kelamin wajib diisi"),
    email: Yup.string().email().required("Email wajib diisi"),
    price: Yup.string().required("Price wajib diisi"),
    category: Yup.string().required("Category wajib diisi"),
    active: Yup.boolean().required("Status wajib dipilih"),
    terms: Yup.boolean().oneOf(
      [true],
      "**Anda harus menyetujui syarat dan ketentuan"
    ),
    projects: Yup.array().min(1, "Minimal pilih satu projects"),
    orders: Yup.number()
      .required("Wajib order min 1")
      .min(1, "Minimal order adalah 1")
      .max(100, "Maksimal order adalah 100"),
  });

  const { formData, errors, handleChange, handleSubmit, handleBlur } = useForm({
    initialValue: {
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
      <div className="grid">
        <div className="col-12">
          <div className="card p-fluid">
            <h6>My Form</h6>
            <hr />
            <div>
              <form onSubmit={handleSubmit} className="flex flex-column gap-3">
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
                  name="phone"
                  label="Phone"
                  value={formData.phone}
                  onChange={handleChange("phone")}
                  error={errors.phone}
                  required
                  placeholder="+62-8xx-xxxx-xxxx"
                  mask="+99-999-9999-9999"
                />
                {/* {errors.name && <small className="p-error">{errors.name}</small>} */}
                <CalendarField
                  name="birthDate"
                  label="Tanggal Lahir"
                  value={formData.birthDate}
                  onChange={handleChange("birthDate")}
                  onBlur={() => handleBlur("birthDate")}
                  error={errors.birthDate}
                  required
                />
                <RadioGroupField
                  name="gender"
                  label="Jenis Kelamin"
                  value={formData.gender}
                  onChange={handleChange("gender")}
                  onBlur={() => handleBlur("gender")}
                  options={[
                    { label: "Laki-laki", value: "L" },
                    { label: "Perempuan", value: "P" },
                  ]}
                  error={errors.gender}
                />
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
                <InputNumberField
                  name="orders"
                  label="Jumlah Order"
                  value={formData.orders}
                  onChange={handleChange("orders")}
                  error={errors.orders}
                  required
                  min={0}
                  max={100}
                  step={1}
                />
                <CheckboxField
                  name="terms"
                  label="Saya menyetujui syarat dan ketentuan"
                  checked={formData.terms}
                  onChange={handleChange("terms")}
                  error={errors.terms}
                />
                <hr />
                {/* {errors.email && <small className="p-error">{errors.email}</small>} */}
                <div className="flex justify-end max-w-sm ml-auto">
                  <Button className="primary" type="submit">
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <Table></Table> */}
    </>
  );
}
