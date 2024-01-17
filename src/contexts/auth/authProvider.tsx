import { createContext } from "react";
import { IAuthProviderInterface } from "./types";

const AuthContext = createContext({} as IAuthProviderInterface);
const { Provider } = AuthContext;
