/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import { ReactNode } from "react";

export interface LoginProviderProps {
  children: ReactNode;
}
export interface ILogin {
  email: string;
  password: string;
}
export interface LoginContextProps {
  login: (data: ILogin) => Promise<AxiosResponse<any, any>>;
}
