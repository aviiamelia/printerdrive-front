import { createContext, useContext } from "react";
import { ILogin, LoginContextProps, LoginProviderProps } from "./types";
import { useAuth } from "../auth/authProvider";

import api from "../../axios";

const LoginContext = createContext<LoginContextProps>({} as LoginContextProps);
export const LoginProvider = ({ children }: LoginProviderProps) => {
  const { setIsLogged, setToken, setUser } = useAuth();
  const login = async (data: ILogin) => {
    const response = await api
      .post("/login", data)
      .then((response) => {
        const token = response.data.response.token;
        setUser(response.data.response);
        localStorage.setItem("printApplication: token", JSON.stringify(token));
        api.defaults.headers.common = { Authorization: `Bearer ${token}` };
        setToken(token);
        setIsLogged(true);
        return response.data.response;
      })
      .catch((error) => console.log(error));
    return response;
  };
  return (
    <LoginContext.Provider value={{ login }}>{children}</LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
