/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import { ReactNode } from "react";

export interface ISignIn {
  username: string;
  password: string;
  email: string;
  isAdmin: boolean;
}

export interface SignInContextProps {
  signIn: (data: ISignIn) => Promise<AxiosResponse<any, any>>;
}

export interface SignInProviderProps {
  children: ReactNode;
}
