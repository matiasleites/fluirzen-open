import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptTranslations from "./pt.json";
import esTranslations from "./es.json";
import enTranslations from "./en.json";
const resources = {
  pt: {
    translation: ptTranslations,
  },
  es: {
    translation: esTranslations,
  },
  en: {
    translation: enTranslations,
  },
};

i18n.use(initReactI18next).init({
  lng: "pt",
  fallbackLng: "pt",
  resources,
});

export default i18n;
