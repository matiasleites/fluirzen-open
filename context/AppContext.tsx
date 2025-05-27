import { createContext } from "react";
import AppContextType from "./AppContextType";

export const AppContext = createContext<AppContextType>({
  width: 700,
  height: 300,
  isMobile: true,
  lang: "pt",
});
