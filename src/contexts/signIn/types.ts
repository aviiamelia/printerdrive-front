import { ReactNode } from "react";
import { NavigateFunction } from "react-router-dom";

export interface ISignIn {
  username: string;
  password: string;
  email: string;
  isAdmin: boolean;
}

export interface SignInContextProps {
  signIn: (data: ISignIn, navifate: NavigateFunction) => void;
}

export interface SignInProviderProps {
  children: ReactNode;
}
