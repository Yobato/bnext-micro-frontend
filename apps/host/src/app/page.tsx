// apps/host/app/login/page.tsx (atau sesuai struktur kamu)
"use client";

import Image from "next/image";
// import Link from "next/link";
// import FormLogin from "../../../../packages/ui/components/login/form";
import FormLogin from "@bnext/ui/components/login/form";
import "@bnext/ui/styles/login/layout.scss";
import Info from "@bnext/ui/components/login/info";
import NoSupport from "@bnext/ui/components/login/noSupport";

// import Header from "@bnext/ui/components/HeaderRefactor";

export default function Login() {
  // ✅ Dummy user object untuk Header
  // const dummyUser = {
  //   userName: "Satriyo",
  //   userGroupName: "Admin",
  //   branchCode: "001",
  //   branchName: "Jakarta",
  // };

  // // ✅ Dummy fungsi terjemahan
  // const t = (key: string) => {
  //   const dictionary: Record<string, string> = {
  //     greetings: "Hello",
  //     profile: "Profile",
  //     changePassword: "Change Password",
  //     logout: "Logout",
  //     confirmLogout: "Are you sure you want to logout?",
  //     confirmation: "Confirmation",
  //     "language.indonesian": "Bahasa Indonesia",
  //     "language.english": "English",
  //   };
  //   return dictionary[key] || key;
  // };

  return (
    <>
      {/* <Header
        user={dummyUser}
        onLogout={() => alert("Logged out")}
        onChangeLang={(lang) => console.log(`Change lang to: ${lang}`)}
        onChangePassword={() => alert("Change password")}
        onClearMenuSession={() => console.log("Clear menu session")}
        currentLang="en"
        t={t}
        LinkComponent={Link}
        ImageComponent={Image}
        HeaderToggleComponent={() => (
          <div className="header-toggle">Toggle</div>
        )}
      /> */}

      <div className="containers">
        <div className="rows">
          <div className="cols">
            <Image
              src="/layout/images/logo-bsi-green.png"
              className="logo"
              alt="Bank Syariah Indonesia"
              width={100}
              height={60}
            />
          </div>
        </div>

        <div className="rows">
          <div className="cols col1">
            <FormLogin />
          </div>

          <div className="cols col2 bottom">
            <Info />
            <div className="appsName">
              <h4>Branch New EXA Transformation V.1</h4>
              <p>
                &copy; 2024 PT Bank Syariah Indonesia Tbk. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      <NoSupport />
    </>
  );
}
