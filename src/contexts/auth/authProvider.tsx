import { createContext, useContext, useEffect, useState } from "react";
import { IAuthProviderInterface, AuthProviderProps, User } from "./types";
import api from "../../axios";

const AuthContext = createContext({} as IAuthProviderInterface);
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState("");
  const [user, setUser] = useState<User>({} as User);
  useEffect(() => {
    const tokenStoraged =
      JSON.parse(localStorage.getItem("printApplication: token") || "null") ||
      false;
    if (tokenStoraged) {
      api.defaults.headers.common = {
        Authorization: `Bearer ${tokenStoraged}`,
      };
      setToken(tokenStoraged);
      setIsLogged(true);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{ isLogged, token, setIsLogged, user, setUser, setToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
