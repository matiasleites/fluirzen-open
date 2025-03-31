import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import "./locales/i18n";
import Home from "./pages/Home.tsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./locales/i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <Home />
    </I18nextProvider>
  </StrictMode>
);
