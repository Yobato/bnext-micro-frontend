"use client";
import React from "react";
import { useToast } from "@bnext/context";
// import Image from "next/image";

export default function Home() {
  const { globalOnSuccess, globalOnError } = useToast();
  return (
    <>
      <button
        // label="Success Toast"
        onClick={() => globalOnSuccess("Berhasil menambahkan data!")}
        className="p-button-success mr-2"
      >sukses</button>
      <button
        // label="Error Toast"
        onClick={() => globalOnError("Gagal menyimpan data!")}
        className="p-button-danger"
      >error</button>
    </>
  );
}
