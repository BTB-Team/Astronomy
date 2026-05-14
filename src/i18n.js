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
        },
        astronomyAboutSection: {
            title: "درباره انجمن نجوم",
            description: "انجمن نجوم افغانستان با هدف ترویج علم نجوم و پرورش نسل نو دانش‌پژوهان، فعالیت خود را از کابل آغاز کرده و امروز با نگاهی آینده‌نگر، در مسیر توسعه علوم فضایی در افغانستان گام برمی‌دارد. این انجمن با برگزاری برنامه‌های آموزشی، رصدهای علمی، دوره‌های حضوری و آنلاین و همکاری با تیم‌های تخصصی، تلاش می‌کند تا علاقه‌مندی جوانان به نجوم را به یک جریان علمی پویا و اثرگذار تبدیل کند.\n\nدر حال حاضر، دو شعبه فعال در کابل به‌عنوان مراکز آموزشی و علمی فعالیت دارند و برنامه‌هایی چون آموزش تکنولوژی فضایی، ساخت موشک و ماهواره، برگزاری سمینارها و توسعه تجهیزات نجومی در دستور کار انجمن قرار دارد. چشم‌انداز بلندمدت انجمن، ایجاد آزمایشگاه‌های پیشرفته فضایی، گسترش همکاری‌های بین‌المللی و حرکت به‌سوی صنعتی‌سازی علوم فضایی در افغانستان است؛ مسیری برای ساختن آینده‌ای روشن‌تر برای نسل جوان کشور."
        },
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
        },
        astronomyAboutSection: {
            title: "About the Astronomy Association",
            description: "The Afghanistan Astronomy Association was established in Kabul with the goal of promoting astronomy and inspiring a new generation of science enthusiasts. Today, with a forward-looking vision, the association is taking important steps toward the development of space sciences in Afghanistan. Through educational programs, scientific observation events, online and in-person courses, and collaboration with specialized teams, the association aims to transform young people’s interest in astronomy into a dynamic and impactful scientific movement.\n\nCurrently, two active branches in Kabul serve as educational and scientific centers. The association is working on projects such as space technology education, rocket and satellite construction, scientific seminars, and the development of astronomical equipment. Its long-term vision includes creating advanced space laboratories, expanding international collaborations, and moving toward the industrialization of space sciences in Afghanistan — a path toward building a brighter future for the country’s young generation."
        },
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