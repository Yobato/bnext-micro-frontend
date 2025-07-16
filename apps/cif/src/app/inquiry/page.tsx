"use client";

import React from "react";
import { TableInquiry, ColumnProps } from "@bnext/ui";

const inquiryData = [
  {
    id: "CIF001",
    name: "Satriyo Bagus",
    status: "1", // Aktif
    jenisNasabah: "Perorangan",
    noKTP: "3173xxxxxxxx0001",
    tempatLahir: "Jakarta",
    tanggalRegister: "11/20/2019",
    saldo: "Rp.20.000.000",
    saldoRata: "Rp.30.000.000",
  },
];

const columns: ColumnProps[] = [
  { header: "ID CIF", field: "id" },
  { header: "Nama", field: "name" },
  { header: "Status", field: "status", template: "badge" },
  { header: "Jenis Nasabah", field: "jenisNasabah" },
  { header: "No. KTP", field: "noKTP" },
  { header: "Tempat Lahir", field: "tempatLahir" },
  { header: "Saldo", field: "saldo" },
  { header: "Saldo Rata-Rata", field: "saldoRata" },
];

const InquiryPage = () => {
  const response = {
    data: inquiryData,
    totalItems: inquiryData.length,
    totalPages: 1,
    currentPage: 1,
  };

  return (
    <div className="p-4">
      <TableInquiry
        response={response}
        columns={columns}
        isLoading={false}
        pageSize={10}
      />
    </div>
  );
};

export default InquiryPage;
