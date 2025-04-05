import { createContext } from "react";
import IUser from "../interfaces/IUser";
import AppContextType from "./AppContextType";

export const AppContext = createContext<AppContextType>({
  width: 700,
  height: 300,
  isMobile: true,
  isLogged: false,
  user: {} as IUser,
  setUser: function (): void {},
  loadingSession: false,
  logout: function (): void {},
  lang: "pt",
  setLang: function (): void {},
});
