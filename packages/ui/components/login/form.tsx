"use client";
// import Image from "next/image";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Ripple } from "primereact/ripple";
import React, { useEffect } from "react";
import "@bnext/ui/styles/button/button.scss";
// import "@/styles/button/button.scss";

const FormLogin = () => {
  useEffect(() => {
    document.body.classList.add("login");

    return () => {
      document.body.classList.remove("login");
    };
  }, []);

  const navigateToZone = (path: string) => {
    window.location.href = path;
  };

  return (
    <>
      <div className="login-page">
        <div className="title">
          <div>
            <img
              src={"/layout/images/bnext.png"}
              className="sublogo"
              alt="bnext"
              width={50}
              height={45}
            />
          </div>
          <img
            src={"/layout/images/ldap.png"}
            className="ldap"
            alt="lock-screen"
            width={50}
            height={55}
          />
        </div>
        <div>
          <form
            //   onSubmit={validateLogin}
            onSubmit={(e) => {
              e.preventDefault();
              navigateToZone("/reservasi");
            }}
          >
            <FloatLabel className="mt-3 mb-6">
              <InputText
                id="userId"
                keyfilter="email"
                className="field-login w-full"
                tabIndex={1}
                autoComplete="off"
                // value={credentialsData.userName}
                // onChange={(e) =>
                //   setCredentialsData({
                //     ...credentialsData,
                //     userName: e.target.value,
                //   })
                // }
              />
              <label htmlFor="userId">User Id</label>
            </FloatLabel>
            <FloatLabel className="pass-me mb-6 w-full">
              <Password
                inputId="password"
                inputClassName="field-login w-full"
                feedback={false}
                tabIndex={2}
                toggleMask
                autoComplete="off"
                // value={credentialsData.password}
                // onChange={(e) =>
                //   setCredentialsData({
                //     ...credentialsData,
                //     password: e.target.value,
                //   })
                // }
              />
              <label htmlFor="password">Password</label>
            </FloatLabel>
            <center>
              <Button
                label="Login"
                icon="pi pi-key"
                className="btn-login bg-green p-ripple"
                tabIndex={3}
                // loading={loading}
                disabled={false}
                // onClick={() => navigateToZone("/reservasi")}
              >
                <Ripple />
              </Button>
            </center>
          </form>
        </div>
      </div>
      {/* <Toast ref={toast} /> */}
    </>
  );
};

export default FormLogin;
