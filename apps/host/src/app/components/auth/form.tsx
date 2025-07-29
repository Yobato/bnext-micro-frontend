"use client";
// import Image from "next/image";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Ripple } from "primereact/ripple";
import React, { useEffect, useState } from "react";
import "@bnext/ui/src/styles/button/button.scss";
import { useRouter } from "next/navigation";
import { actionLogin } from "@bnext/utils";
import * as yup from "yup";
// import "@/styles/button/button.scss";

const loginSchema = yup.object().shape({
  userId: yup.string().required("User ID harus diisi"),
  password: yup.string().required("Password harus diisi"),
});

const FormLogin = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ userId?: string; password?: string }>(
    {}
  );
  const router = useRouter();

  useEffect(() => {
    document.body.classList.add("login");

    return () => {
      document.body.classList.remove("login");
    };
  }, []);

  // validasi
  const validateField = async (field: string, value: string) => {
    try {
      await(yup.reach(loginSchema, field) as yup.AnySchema).validate(value);
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    } catch (err: any) {
      setErrors((prev) => ({ ...prev, [field]: err.message }));
    }
  };


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    try {
      await loginSchema.validate({ userId, password }, { abortEarly: false });
      await actionLogin(userId, password);
      router.push("/dashboard");
    } catch (err: any) {
      const fieldErrors: typeof errors = {};

      if (err.inner && Array.isArray(err.inner)) {
        // Multiple validation errors
        err.inner.forEach((validationErr: yup.ValidationError) => {
          if (validationErr.path) {
            fieldErrors[validationErr.path as keyof typeof fieldErrors] =
              validationErr.message;
          }
        });
      } else if (err.path) {
        // Single validation error
        fieldErrors[err.path as keyof typeof fieldErrors] = err.message;
      }

      setErrors(fieldErrors);
      console.error("Login failed:", err);
    } finally {
      setLoading(false);
    }
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
          <form onSubmit={handleLogin}>
            <FloatLabel className="mt-3 mb-6">
              <InputText
                id="userId"
                keyfilter="email"
                className="field-login w-full"
                tabIndex={1}
                autoComplete="off"
                value={userId}
                onBlur={() => validateField("userId", userId)}
                onChange={(e) => setUserId(e.target.value)}
              />
              <label htmlFor="userId">User Id</label>
              {errors.userId && (
                <small className="p-error">{errors.userId}</small>
              )}
            </FloatLabel>
            <FloatLabel className="pass-me mb-6 w-full">
              <Password
                inputId="password"
                inputClassName="field-login w-full"
                feedback={false}
                tabIndex={2}
                toggleMask
                autoComplete="off"
                value={password}
                onBlur={()=> validateField("password", password)}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              {errors.password && (
                <small className="p-error">{errors.password}</small>
              )}
            </FloatLabel>
            <center>
              <Button
                label="Login"
                icon="pi pi-key"
                className="btn-login bg-green p-ripple"
                tabIndex={3}
                loading={loading}
                disabled={false}
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
