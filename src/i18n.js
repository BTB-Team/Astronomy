import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
     
  fa: {
    translation: {
        navBar: {
            home: "صفحه اصلی",
            about: "درباره ما",
            ourClass: "کلاس‌های ما",
            blog: "وبلاگ",
            media: "رسانه",
            contact: "تماس با ما",
            contact1: "تماس با ما"
        }
    },
   },
  en: {
    translation: {
        navBar: {
            home: "Home",
            about: "About",
            ourClass:"Our Class",
            blog: "Blog",
            media: "Media",
            contact: "Contact ",
            contact1: "Contact Us "
        }
    },
  },
 
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "fa",
    fallbackLng: "fa", 
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;