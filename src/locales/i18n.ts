import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptTranslations from "./pt.json";

const resources = {
  pt: {
    translation: ptTranslations,
  },
};

i18n.use(initReactI18next).init({
  lng: "pt",
  fallbackLng: "pt",
  resources,
});

export default i18n;
