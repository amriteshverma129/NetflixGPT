import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import commonEN from "../locale/en-US/common.json";
import commonES from "../locale/es-ES/common.json";
import navbarEN from "../locale/en-US/navbar.json";
import navbarES from "../locale/es-ES/navbar.json";

// Configure i18next
i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: commonEN,
      navbar: navbarEN,
    },
    es: {
      common: commonES,
      navbar: navbarES,
    },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // React already safe from XSS
  },
});

export default i18n;
