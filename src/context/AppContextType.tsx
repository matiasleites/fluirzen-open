import IUser from "../interfaces/IUser";

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

export default AppContextType;
