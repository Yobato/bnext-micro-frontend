"use client";

import { Button } from "primereact/button";
import React from "react";
import Pagination from "./Pagination";

const Table = () => {
  return (
    <div className="p-datatable-gridlines p-datatable p-component p-datatable-responsive-scroll p-datatable-gridlines">
      <div className="p-datatable-header">
        <div className="p-toolbar">
          {/* Left toolbar */}
          <div className="p-toolbar-group-left">
            <>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Cari Data"
                className="p-inputtext p-component"
              />
            </>
          </div>

          {/* Right toolbar */}
          <div className="p-toolbar-group-right">
            <div className="my-2">
              <Button
                label="New"
                icon="pi pi-plus"
                // severity="success"
                className="mr-2"
                // onClick={addButton.onClick}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-datatable-wrapper loading-inside">
        <table className="p-datatable-table" role="table">
          <thead className="p-datatable-thead">
            <tr role="row">
              <th className="w-min">No</th>
              <th>Nama</th>
              <th>Email</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody className="p-datatable-tbody loading-inside">
            <tr role="row">
              <td role="cell">1</td>
              <td role="cell">Satriyo Bagus</td>
              <td role="cell">satriyo@example.com</td>
              <td role="cell">
                <Button>Edit</Button>&nbsp;<Button>Delete</Button>
              </td>
            </tr>
            <tr role="row">
              <td role="cell">2</td>
              <td role="cell">Nayla Aulia</td>
              <td role="cell">nayla@example.com</td>
              <td role="cell">
                <Button>Edit</Button>&nbsp;<Button>Delete</Button>
              </td>
            </tr>
            <tr role="row">
              <td role="cell">3</td>
              <td role="cell">Rizki Pratama</td>
              <td role="cell">rizki@example.com</td>
              <td role="cell">
                <Button>Edit</Button>&nbsp;<Button>Delete</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="p-datatable-footer">
        <span>Total: 3 data</span>
      </div>
      <Pagination></Pagination>
    </div>
  );
};

export default Table;
