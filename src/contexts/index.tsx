import React from "react";
import { AuthProvider } from "./auth/authProvider";
import { SignInProvider } from "./signIn/signInProvider";
import { LoginProvider } from "./login/loginProvider";
import { FoldersProvider } from "./folders/foldersProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <LoginProvider>
        <SignInProvider>
          <FoldersProvider>{children}</FoldersProvider>
        </SignInProvider>
      </LoginProvider>
    </AuthProvider>
  );
};
