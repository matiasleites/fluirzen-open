import { createContext, useContext } from "react";
import IUser from "../interfaces/IUser";

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

type AppContextType = {
  width: number;
  height: number;
  isMobile: boolean;
  isLogged: boolean;
  user: IUser;
  setUser: (user: IUser) => void;
  loadingSession: boolean;
  logout: () => void;
  lang: string;
  setLang: (lang: string) => void;
};

export const UseAppContext = () => useContext(AppContext);
