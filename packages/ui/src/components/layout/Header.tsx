"use client";

// import "./tailwindUsage.css";
import React, { useState, useRef, useEffect } from "react";
import { Badge } from "primereact/badge";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import HeaderToggle from "./HeaderToggle";

const Flag = ({ src, alt }: { src: string; alt: string }) => (
  <img alt={alt} src={src} className="mr-2" style={{ width: "18px" }} />
);

type User = {
  id: string;
  name: string;
  email: string;
  branch: string;
  group: string;
  userId: string;
  status: string;
};

type HeaderProps = {
  onLogout?: () => void;
  currentUser?: User;
};

const dropdownStyle: React.CSSProperties = {
  position: "absolute",
  right: 0,
  marginTop: "8px",
  width: "220px",
  backgroundColor: "#fff",
  borderRadius: "6px",
  boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
  zIndex: 9999,
  overflow: "hidden",
  border: "1px solid #ddd",
};

const dropdownItemStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  padding: "8px 16px",
  fontSize: "14px",
  backgroundColor: "white",
  border: "none",
  textAlign: "left",
  cursor: "pointer",
};

const dropdownItemHover = {
  backgroundColor: "#f5f5f5",
};

const Header = ({ onLogout, currentUser }: HeaderProps) => {
  const langRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        langRef.current &&
        !langRef.current.contains(e.target as Node) &&
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setIsLangOpen(false);
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const displayGroup =
    currentUser?.group?.length > 10
      ? currentUser.group.slice(0, 10) + "..."
      : currentUser?.group;

  return (
    <>
      <ConfirmDialog />
      <div className="layout-topbar">
        <a href="/home" className="layout-topbar-logo">
          <img
            src={`${process.env.NEXT_PUBLIC_ASSET_URL}/layout/images/logo-bsi.png`}
            alt="logo"
            width={200}
            height={100}
            style={{ width: "auto", height: "3rem" }}
          />
        </a>

        <HeaderToggle />

        <div
          className="layout-menu-right"
          style={{ position: "relative", alignItems: "center" }}
        >
          <p className="p-topbar mr-3">
            Hello, <b>{currentUser?.name || "User"}</b>
            <br />
            {displayGroup || "Role"}
            <br />
            &#91; {currentUser?.branch.slice(0, 5) || "-"} -{" "}
            {currentUser?.branch.slice(8) || "-"} &#93;
          </p>

          <i className="menu-right pi pi-bell mr-3 ml-3 p-link p-overlay-badge">
            <Badge value={1} severity="danger" />
          </i>

          {/* Profile Dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              type="button"
              className="menu-right pi pi-user mr-3 ml-3 p-link"
              onClick={(e) => {
                e.stopPropagation();
                setIsProfileOpen((prev) => !prev);
              }}
              style={{ background: "none", border: "none" }}
            />
            {isProfileOpen && (
              <div style={dropdownStyle}>
                <div
                  style={{
                    padding: "12px 16px",
                    borderBottom: "1px solid #eee",
                    fontSize: "13px",
                  }}
                >
                  <p style={{ margin: 0, fontWeight: "bold" }}>
                    {currentUser?.name}
                  </p>
                  <p style={{ margin: 0, color: "#666" }}>{displayGroup}</p>
                  <p style={{ margin: 0, color: "#666" }}>
                    {currentUser?.branch.slice(0, 5)} -{" "}
                    {currentUser?.branch.slice(8)}
                  </p>
                </div>
                <button
                  style={dropdownItemStyle}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      dropdownItemHover.backgroundColor!)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "white")
                  }
                  onClick={() => alert("Change Password clicked")}
                >
                  <i className="pi pi-user-edit mr-2"></i>
                  Change Password
                </button>
                <button
                  style={{ ...dropdownItemStyle, color: "#e11d48" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#fdecea")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "white")
                  }
                  onClick={() =>
                    confirmDialog({
                      message: "Are you sure you want to logout?",
                      header: "Confirmation",
                      icon: "pi pi-exclamation-triangle",
                      defaultFocus: "reject",
                      acceptClassName: "p-button-danger",
                      acceptLabel: "Yes",
                      rejectLabel: "No",
                      accept: onLogout,
                    })
                  }
                >
                  <i className="pi pi-sign-out mr-2"></i>
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Language Dropdown */}
          <div className="relative" ref={langRef}>
            <button
              type="button"
              className="menu-right pi pi-globe mr-3 ml-3 p-link"
              onClick={(e) => {
                e.stopPropagation();
                setIsLangOpen((prev) => !prev);
              }}
              style={{ background: "none", border: "none" }}
            >
              <span className="language-label"> EN </span>
            </button>
            {isLangOpen && (
              <div style={dropdownStyle}>
                <button
                  style={{
                    ...dropdownItemStyle,
                    display: "flex",
                    alignItems: "center",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      dropdownItemHover.backgroundColor!)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "white")
                  }
                  onClick={() => alert("Change lang to ID")}
                >
                  <Flag
                    src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
                    alt="id-flag"
                  />
                  Bahasa Indonesia
                </button>
                <button
                  style={{
                    ...dropdownItemStyle,
                    display: "flex",
                    alignItems: "center",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      dropdownItemHover.backgroundColor!)
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "white")
                  }
                  onClick={() => alert("Change lang to EN")}
                >
                  <Flag
                    src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
                    alt="en-flag"
                  />
                  English
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Header);
