"use client";

import { actionLogout } from "@bnext/utils";
import { useRouter } from "next/navigation";

export const useLogout = () => {
  const router = useRouter();

  const redirectToLogin = () => {
    const currentHost = window.location.host;
    if (currentHost.startsWith("host.")) {
      router.push("/login");
    } else {
      window.location.href = "http://host.bnext.localhost:3000/login";
    }
  };

  const handleLogout = async () => {
    try {
      await actionLogout();
      redirectToLogin();
    } catch (e) {
      console.error("Logout error", e);
    }
  };

  return handleLogout;
};
