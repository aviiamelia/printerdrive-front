import { createContext, useContext } from "react";
import { ISignIn, SignInContextProps, SignInProviderProps } from "./types";
import { useAuth } from "../auth/authProvider";
import api from "../../axios";
import { NavigateFunction } from "react-router-dom";
const SignInContext = createContext<SignInContextProps>(
  {} as SignInContextProps
);
export const SignInProvider = ({ children }: SignInProviderProps) => {
  const { setUser } = useAuth();

  const signIn = (data: ISignIn, navigate: NavigateFunction) => {
    api
      .post("/users", data)
      .then((response) => setUser(response.data))
      .then(() => navigate("/login"));
  };
  return (
    <SignInContext.Provider value={{ signIn }}>
      {children}
    </SignInContext.Provider>
  );
};

export const useSignIn = () => useContext(SignInContext);
