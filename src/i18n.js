import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from "i18next";

import enTranslate from "./languages/en.json"
import zhTranslate from "./languages/zh.json"

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        fallbackLng: "en",
        interpolation:{
            escapeValue: false,
        },
        resources:{
            en: {
                translation: enTranslate
            },
            zh: {
                translation: zhTranslate
            }
        }
    })

export default i18n
