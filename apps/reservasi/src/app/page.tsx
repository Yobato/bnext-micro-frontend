"use client";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import React, { useEffect, useRef, useState } from "react";
// import { useToast } from "@bnext/context";
// import { usePathname } from "next/navigation";
// import { resolveMenu } from "@bnext/utils";
// import { menuRaw } from "@bnext/ui";
// import Image from "next/image";

export default function Home() {
  // const { globalOnSuccess, globalOnError } = useToast();
  const toast = useRef<Toast>(null);

  const [loading, setLoading] = useState(false);
  const [ticketno, setTicket] = useState<string>("");

  const load = () => {
    setLoading(true);

    const ticket = ticketno.substring(0, 4);

    switch (ticket) {
      case "OBBT":
        console.log("buka cif rekening mobile banking");
        break;
      case "BYND":
        console.log("buka cif rekening superapps");
        break;
      case "WFBT":
        console.log("buka cif rekening webform");
        break;
      case "WFST":
        console.log("setor tunai webform");
        break;
      case "WFTR":
        console.log("tarik tunai webform");
        break;
      default:
        toast.current?.show({
          severity: "error",
          summary: "error",
          detail: "Kode Reservasi Tidak Valid",
          life: 3000,
        });
        break;
    }

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <>
      <div className="grid">
        <div className="col-8 lg:col-6 xl:col-4">
          <Toast ref={toast} />
          <div className="card p-fluid">
            <h6>
              <i className="pi pi-th-large"></i>&nbsp; Verifikasi Kode Reservasi
            </h6>
            <hr />
            <div>
              <div className="flex flex-column gap-2">
                <label htmlFor="reservasi">Kode Reservasi</label>
                <InputText
                  id="reservasi"
                  name="ticketno"
                  maxLength={12}
                  value={ticketno}
                  onChange={(e) => setTicket(e.target.value.toUpperCase())}
                  keyfilter={/[A-Za-z0-9]/}
                  aria-describedby="reservasi-help"
                />
                <small id="reservasi-help">
                  Hanya masukan huruf kapital dan angka
                </small>
              </div>
              <br />
              <Button
                label="Submit"
                icon="pi pi-check"
                className="submit col-5 col-offset-7"
                severity="success"
                loading={loading}
                onClick={load}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <button
        // label="Success Toast"
        onClick={() => globalOnSuccess("Berhasil menambahkan data!")}
        className="p-button-success mr-2"
      >
        sukses
      </button>
      <button
        // label="Error Toast"
        onClick={() => globalOnError("Gagal menyimpan data!")}
        className="p-button-danger"
      >
        error
      </button> */}
    </>
  );
}
