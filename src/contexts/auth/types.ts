import { Dispatch, ReactNode, SetStateAction } from "react";

export interface User {
  username: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
  updatedAt: string;
  id: number;
}

export interface IAuthProviderInterface {
  isLogged: boolean;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}

export interface AuthProviderProps {
  children: ReactNode;
}
