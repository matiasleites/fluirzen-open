import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";

interface Props {
  children: React.ReactNode;
}

export const AppProvider: React.FC<Props> = ({ children }: Props) => {
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState(800);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <AppContext.Provider
      value={{
        width,
        height,
        isMobile: width < 767,
        lang: "pt",
      }}
    >
      <div
        className="main-div bg-back text-white"
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {children}
      </div>
    </AppContext.Provider>
  );
};
