import { createContext, useContext } from "react";
import { ISignIn, SignInContextProps, SignInProviderProps } from "./types";

import api from "../../axios";

const SignInContext = createContext<SignInContextProps>(
  {} as SignInContextProps
);
export const SignInProvider = ({ children }: SignInProviderProps) => {
  const signIn = async (data: ISignIn) => {
    const result = await api
      .post("/users", data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));

    return result;
  };
  return (
    <SignInContext.Provider value={{ signIn }}>
      {children}
    </SignInContext.Provider>
  );
};

export const useSignIn = () => useContext(SignInContext);
