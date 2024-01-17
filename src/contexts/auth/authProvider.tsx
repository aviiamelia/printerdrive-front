import { createContext, useContext, useEffect, useState } from "react";
import { IAuthProviderInterface, AuthProviderProps, User } from "./types";

const AuthContext = createContext({} as IAuthProviderInterface);
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState("");
  const [user, setUser] = useState<User>({} as User);
  const tokenStoraged = "";
  if (tokenStoraged) {
    setToken(tokenStoraged);
  }
  useEffect(() => {
    if (token) {
      return setIsLogged(true);
    }
  }, [token]);
  return (
    <AuthContext.Provider
      value={{ isLogged, token, setIsLogged, user, setUser, setToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
