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
        hero: {
            badge: "انجمن ستاره‌شناسی افغانستان",
            title: "سفر به دنیای ستاره‌ها، علم و آینده‌ی فضایی افغانستان",
            description: "جایی برای آموزش نجوم، رصد آسمان، پژوهش‌های علمی و رشد علاقه‌مندان جوان به علوم فضایی.",
            searchPlaceholder: "جستجو در برنامه‌ها، مقاله‌ها و رویدادها...",
            searchBtn: "جستجو"
      },
        vision: {
        title: "چشم‌انداز، مأموریت و ارزش‌های ما",
        visionTitle: "چشم‌انداز",
        visionDesc: 'الهام‌بخشی و توانمندسازی نسل بعدی ستاره‌شناسان افغان، با پرورش یک جامعه پویا از علاقه‌مندان به علوم فضایی از طریق برنامه‌های آموزشی، پژوهشی و ترویجی که کنجکاوی، همکاری و برتری علمی را ترویج می‌کند.', 
        missionTitle: "ماموریت",
        missionDesc: "ارائه آموزش نجوم در دسترس، ترویج پژوهش‌های علمی و ایجاد فرصت‌هایی برای جوانان افغان جهت مشارکت در علوم فضایی از طریق کارگاه‌ها، رویدادهای رصدی و پروژه‌های مشترک.",
        valuesTitle: "ارزش‌ها",
        valuesDesc: "شمولیت، کنجکاوی، همکاری، برتری و صداقت ارزش‌های اصلی هستند که راهنمای کار ما در پرورش یک جامعه نجومی پویا در افغانستان هستند."
      },
        Gallery: {
        mainTitle: "چرا ما را انتخاب کنید؟",
          button: "بیشتر بدانید",
        items: [
        {
          title: "اکتشاف کهکشان‌ها",
          desc: "کهکشان‌های دوردست، رازهای کیهانی و کشفیات شگفت‌انگیز میان‌ستاره‌ای را فراتر از تصور انسان کشف کنید."
        },

        {
          title: "سفر در فضا",
          desc: "سفرهای فضایی آینده‌نگرانه را با فناوری پیشرفته سفینه‌ها و ماجراجویی‌های هیجان‌انگیز کیهانی تجربه کنید."
        },

        {
          title: "هوش مصنوعی در فضا",
          desc: "کشف کنید چگونه سیستم‌های هوش مصنوعی مأموریت‌های فضایی، ربات‌های اکتشافی و ناوبری هوشمند را متحول می‌کنند."
        },

        {
          title: "ایستگاه‌های فضایی نسل آینده",
          desc: "ایستگاه‌های مدرن مداری برای تحقیقات اعماق فضا، بقای انسان و محیط‌های زندگی آینده طراحی شده‌اند."
        }

    ]
  },
     features:{
      mainTitle: "آخرین کشفیات",  
      items: [
        
        {
          title: "سیارات فراخورشیدی",
          description: "اکتشاف سیارات خارج از منظومه شمسی."
        },
        {
          title: "تلسکوپ‌های فضایی",
          description: "تلسکوپ‌های مدرن به دانشمندان کمک می‌کنند تا فضا را مطالعه کنند."
        },

        {
          title: "علم کیهانی",
          description: "درک علمی پشت جهان را درک کنید."
        }
      ]
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
        },
        astronomyAboutSection: {
            title: "About the Astronomy Association",
            description: "The Afghanistan Astronomy Association was established in Kabul with the goal of promoting astronomy and inspiring a new generation of science enthusiasts. Today, with a forward-looking vision, the association is taking important steps toward the development of space sciences in Afghanistan. Through educational programs, scientific observation events, online and in-person courses, and collaboration with specialized teams, the association aims to transform young people’s interest in astronomy into a dynamic and impactful scientific movement.\n\nCurrently, two active branches in Kabul serve as educational and scientific centers. The association is working on projects such as space technology education, rocket and satellite construction, scientific seminars, and the development of astronomical equipment. Its long-term vision includes creating advanced space laboratories, expanding international collaborations, and moving toward the industrialization of space sciences in Afghanistan — a path toward building a brighter future for the country’s young generation."
        },
        hero: {
            badge: "Afghanistan Astronomy Association",
            title: "A Journey to the World of Stars, Science, and the Future of Space in Afghanistan",
            description: "A place for astronomy education, sky observation, scientific research, and the growth of young space science enthusiasts.",
            searchPlaceholder: "Search programs, articles, events...",
            searchBtn: "Search"
      },
        vision: {
            title: "Our Vision, Mission, and Values",
            visionTitle: "Vision",
            visionDesc: 'To inspire and empower the next generation of Afghan astronomers, fostering a vibrant community of space science enthusiasts through education, research, and outreach programs that promote curiosity, collaboration, and scientific excellence.',
            missionTitle: "Mission",
            missionDesc: "To provide accessible astronomy education, promote scientific research, and create opportunities for young Afghans to engage with space sciences through workshops, observation events, and collaborative projects.",
            valuesTitle: "Values",
            valuesDesc: "Inclusivity, Curiosity, Collaboration, Excellence, and Integrity are the core values that guide our work in fostering a vibrant astronomy community in Afghanistan."
        },
    Gallery: {
    mainTitle: "Why Choose Us?",
    button: "Learn More",
    items: [
      {
        title: "Exploring Galaxies",
        desc: "Discover distant galaxies, cosmic mysteries, and mind-blowing interstellar discoveries beyond human imagination."
      },

      {
        title: "Space Travel",
        desc: "Experience futuristic space travel with advanced spacecraft technology and thrilling cosmic adventures."
      },

      {
        title: "Artificial Intelligence in Space",
        desc: "Discover how AI systems are revolutionizing space missions, exploratory robots, and intelligent navigation."
      },

      {
        title: "Next-Generation Space Stations",
        desc: "Modern orbital stations designed for deep space research, human survival, and future living environments."
      }
    ]
    },
    features:{
    mainTitle: "Latest Discoveries",
    items: [
      {
        title: "Exoplanets",
        description: "Explore planets outside our solar system."
      },
      {
        title: "Space Telescopes",
        description: "Modern telescopes help scientists study space."
      },
      {
        title: "Cosmic Science",
        description: "Understand the science behind the universe."
      }
    ]
    }, 
  }
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