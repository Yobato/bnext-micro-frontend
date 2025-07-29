"use client";

import React from "react";
import { useSession } from "./useSession";
import { redirectLogin } from "./RedirectLogin";

export function withAuthProtection(Component: React.ComponentType) {
  return function ProtectedComponent(props: any) {
    const { user, loading } = useSession();

    if (loading) return <div>Loading session...</div>;

    if (!user) {
      redirectLogin();
      return null;
    }

    return <Component {...props} />;
  };
}
