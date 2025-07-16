"use client";
import React from "react";
import { useToast } from "@bnext/context";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
// import Image from "next/image";

export default function Search() {
  //   const { globalOnSuccess, globalOnError } = useToast();
  return (
    <>
      <h5>Search CIF</h5>
      <div className="grid">
        <div className="col-8 lg:col-6 xl:col-4">
          <div className="card p-fluid">
            <h6>
              <i className="pi pi-th-large"></i>&nbsp; Verifikasi Kode Reservasi
            </h6>
            <hr />
            <div>
              <div className="flex flex-column gap-2">
                <label htmlFor="cif">Kode cif</label>
                <InputText
                  name="search-cif"
                  maxLength={12}
                  value=""
                  onChange={(e) => e.target.value}
                  keyfilter={/[A-Za-z0-9]/}
                  aria-describedby="cif-search-sign"
                />
                <small id="cif-search-sign">
                  Hanya masukan huruf kapital dan angka
                </small>
              </div>
              <br />
              <Button
                label="Submit"
                icon="pi pi-check"
                className="submit col-5 col-offset-7"
                severity="success"
                // loading={loading}
                // onClick={load}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
