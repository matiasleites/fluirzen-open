import { useEffect, useState } from "react";
import IUser from "../interfaces/IUser";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { AppContext } from "./AppContext";

interface Props {
  children: React.ReactNode;
}

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState({} as IUser);
  const [loadingSession, setLoadingSession] = useState(true);
  const [lang, setLang] = useState("pt");

  useEffect(() => {
    try {
      const unsub = onAuthStateChanged(auth, async (user) => {
        setLoadingSession(true);
        if (user) {
          if (user.uid.length > 5) {
            const newUser = {} as IUser;
            newUser.uid = user.uid;
            newUser.email = user.email || "";
            setLogged(true);
            setUser(newUser);
          }
        }
      });
      return unsub;
    } catch (g) {
      console.error(g);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  async function logout() {
    await auth.signOut();
    setLogged(false);
    setLoadingSession(false);
    setUser({} as IUser);
    window.location.reload();
  }

  return (
    <AppContext.Provider
      value={{
        width,
        height,
        isMobile: width < 767,
        isLogged: logged,
        user,
        setUser,
        loadingSession,
        logout,
        lang,
        setLang,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
