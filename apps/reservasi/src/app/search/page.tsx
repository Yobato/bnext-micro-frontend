"use client";
import React from "react";
import { useForm, InputTextField } from "@bnext/ui";
import * as Yup from "yup";

export default function Search() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Nama wajib diisi"),
    email: Yup.string().email().required("Email wajib diisi"),
  });

  const { formData, errors, handleChange, handleSubmit, handleBlur } = useForm({
    initialValue: {
      name: "",
      email: "",
    },
    validationSchema,
    onSubmit: (data) => {
      console.log("Form submitted:", data);
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
        {/* {errors.email && <small className="p-error">{errors.email}</small>} */}
        <button type="submit">Submit</button>
      </form>
      {/* <Table></Table> */}
    </>
  );
}
