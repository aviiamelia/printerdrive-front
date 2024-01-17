import React from "react";
import { AuthProvider } from "./auth/authProvider";
import { SignInProvider } from "./signIn/signInProvider";
import { LoginProvider } from "./login/loginProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <LoginProvider>
        <SignInProvider>{children}</SignInProvider>
      </LoginProvider>
    </AuthProvider>
  );
};
