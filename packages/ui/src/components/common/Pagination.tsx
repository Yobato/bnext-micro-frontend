"use client";
import React from "react";

const Pagination = () => {
  return (
    <div className="p-paginator p-component p-paginator-bottom">
      <button
        title="first"
        className="p-paginator-first p-paginator-element p-link p-disabled"
        disabled
      >
        <i className="pi pi-angle-double-left"></i>
      </button>
      <button
        title="before"
        className="p-paginator-first p-paginator-element p-link p-disabled"
        disabled
      >
        <i className="pi pi-angle-left"></i>
      </button>

      <span className="p-paginator-pages">
        <button className="p-paginator-page p-paginator-element p-link">
          1
        </button>
        <button
          className="p-paginator-page p-paginator-element p-link p-highlight"
          disabled
        >
          2
        </button>
        <button className="p-paginator-page p-paginator-element p-link">
          3
        </button>
        <button className="p-paginator-page p-paginator-element p-link">
          4
        </button>
        <button className="p-paginator-page p-paginator-element p-link">
          5
        </button>
      </span>

      <button
        title="next"
        className="p-paginator-next p-paginator-element p-link"
      >
        <i className="pi pi-angle-right"></i>
      </button>
      <button
        title="last"
        className="p-paginator-next p-paginator-element p-link"
      >
        <i className="pi pi-angle-double-right"></i>
      </button>

      <span className="p-paginator-current">11 - 20 of 100 data</span>

      <select
        title="size"
        name="row"
        id="row"
        className="p-dropdown p-component p-inputwrapper"
        defaultValue="10"
      >
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>
  );
};

export default Pagination;
