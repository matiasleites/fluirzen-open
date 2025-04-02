import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import "./locales/i18n";
import Home from "./pages/Home.tsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./locales/i18n";
import { AppProvider } from "./context/AppProvider.tsx";
import { IconContext } from "react-icons";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IconContext.Provider value={{ className: "fluirzen-icons" }}>
      <I18nextProvider i18n={i18n}>
        <AppProvider>
          <Home />
        </AppProvider>
      </I18nextProvider>
    </IconContext.Provider>
  </StrictMode>
);
