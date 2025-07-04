"use client";

import React, { useRef } from "react";
import { Menu } from "primereact/menu";
import { Badge } from "primereact/badge";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

import HeaderToggle from "./HeaderToggle";
import { useToast } from "@bnext/context";

const Header = () => {
  const profile = useRef<Menu>(null);
  const language = useRef<Menu>(null);
  const { globalOnSuccess } = useToast();

  const handleLogout = () => {
    globalOnSuccess("Otsukaresama Satriyo\nWasalamualaikum wr. wb.");
    setTimeout(() => {
      alert("Logging out...");
    }, 1000);
  };

  const profileItems = [
    {
      template: () => (
        <span className="pop-profile">
          <p className="p-profile">
            <b>Satriyo</b>
            <br />
            Admin
            <br />
            001 - Jakarta
          </p>
          <hr />
        </span>
      ),
    },
    {
      label: "Profile",
      items: [
        {
          label: "Change Password",
          icon: "pi pi-user-edit",
          command: () => alert("Change Password clicked"),
        },
        {
          label: "Logout",
          icon: "pi pi-sign-out",
          command: () =>
            confirmDialog({
              message: "Are you sure you want to logout?",
              header: "Confirmation",
              icon: "pi pi-exclamation-triangle",
              defaultFocus: "reject",
              acceptClassName: "p-button-danger",
              acceptLabel: "Yes",
              rejectLabel: "No",
              accept: handleLogout,
            }),
        },
      ],
    },
  ];

  const languageItems = [
    {
      label: "Bahasa Indonesia",
      icon: () => (
        <img
          alt="id-flag"
          src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
          className="mr-2 flag flag-id"
          style={{ width: "18px" }}
        />
      ),
      command: () => alert("Change lang to ID"),
    },
    {
      label: "English",
      icon: () => (
        <img
          alt="en-flag"
          src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
          className="mr-2 flag flag-us"
          style={{ width: "18px" }}
        />
      ),
      command: () => alert("Change lang to EN"),
    },
  ];

  return (
    <>
      <ConfirmDialog />
      <div className="layout-topbar">
        <a href="/home" className="layout-topbar-logo">
          <img
            src="/layout/images/logo-bsi.png"
            alt="logo"
            width={200}
            height={100}
            style={{ width: "auto", height: "3rem" }}
          />
        </a>

        <HeaderToggle />

        <div className="layout-menu-right">
          <p className="p-topbar mr-3">
            Hello, <b>Satriyo</b>
            <br />
            Admin
            <br />
            &#91; 001 - Jakarta &#93;
          </p>

          <i className="menu-right pi pi-bell mr-3 ml-3 p-link p-overlay-badge">
            <Badge value={1} severity="danger" />
          </i>

          <Menu
            model={profileItems}
            popup
            ref={profile}
            id="popup_profile_menu"
          />
          <i
            className="menu-right pi pi-user mr-3 ml-3 p-link"
            onClick={(e) => profile.current?.toggle(e)}
          ></i>

          <Menu
            model={languageItems}
            popup
            ref={language}
            id="popup_lang_menu"
          />
          <i
            className="menu-right pi pi-globe mr-3 ml-3 p-link"
            onClick={(e) => language.current?.toggle(e)}
          >
            <span className="language-label"> EN </span>
          </i>
        </div>
      </div>
    </>
  );
};

export default React.memo(Header);
