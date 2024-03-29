import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_EN } from "./en";
import { TRANSLATIONS_DE } from "./de";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: i18n.language || window.localStorage.i18nextLng || "en",
    fallbackLng: "en",
    resources: {
      en: {
        translation: TRANSLATIONS_EN,
      },
      de: {
        translation: TRANSLATIONS_DE,
      },
    },
  });
