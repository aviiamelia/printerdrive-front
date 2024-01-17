import { ReactNode } from "react";
import { NavigateFunction } from "react-router-dom";

export interface LoginProviderProps {
  children: ReactNode;
}
export interface ILogin {
  email: string;
  password: string;
}
export interface LoginContextProps {
  login: (data: ILogin, navigate: NavigateFunction) => void;
}
