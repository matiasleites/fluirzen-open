import { AppProvider } from "../context/AppProvider";
import { I18nextProvider } from "react-i18next";
import i18n from "../locales/i18n";
import "./style.css";
import "./tailwind.css";
import Back from "../assets/images/back-sky.webp";

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      <AppProvider>
        <div
          className="flex flex-col"
          style={{
            backgroundImage: `url(${Back})`,
            width: "100vw",
            minWidth: "100vw",
          }}
        >
          {children}
        </div>
      </AppProvider>
    </I18nextProvider>
  );
}
