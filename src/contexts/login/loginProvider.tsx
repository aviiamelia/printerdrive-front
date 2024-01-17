import { createContext, useContext } from "react";
import { ILogin, LoginContextProps, LoginProviderProps } from "./types";
import { useAuth } from "../auth/authProvider";

import api from "../../axios";
import { NavigateFunction } from "react-router-dom";
const LoginContext = createContext<LoginContextProps>({} as LoginContextProps);
export const LoginProvider = ({ children }: LoginProviderProps) => {
  const { setIsLogged, setToken } = useAuth();
  const login = (data: ILogin, navigate: NavigateFunction) => {
    api
      .post("/login", data)
      .then((response) => {
        const token = response.data.response.token;
        setToken(token);
        setIsLogged(true);
      })
      .then(() => navigate("/"));
  };
  return (
    <LoginContext.Provider value={{ login }}>{children}</LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
