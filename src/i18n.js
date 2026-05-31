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
  }  ,
       contact: {
             title: "تماس با ما",
             fullName: "نام شما",
             email: "ایمیل",
            message: "پیام",
             submit: "ارسال",
             nameError: "نام ضروری است",
             emailError: "ایمیل ضروری است",
             messageError: "پیام ضروری است",
        },
        auth: { 
            loginTitle: "ورود به حساب", 
            signupTitle: "ثبت نام", 
            emailPlaceholder: "ایمیل", 
            password: "رمز عبور",  
            login: "ورود", 
            signup: "ثبت نام",
            welcome: "خوش آمدید!", 
            noAccount: "اگر هنوز در سایت ثبت‌نام نکرده‌اید، همین حالا حساب کاربری خود را بسازید.", 
            create: "ثبت نام", 
            haveAccount: "حساب دارید؟", 
            haveAccountText: "اگر قبلاً حساب ساخته‌اید، از این بخش وارد حساب کاربری خود شوید.", 
            firstName: "نام شما", 
            lastName: "نام خانواده گی ",  
            phoneNumber: "شماره تماس", 
            confirmPassword: "تکرار رمز عبور",
             googleLogin: "ورود با گوگل",
            googleLoginSuccess: "ورود با گوگل موفق بود",
            googleLoginFailed: "ورود با گوگل ناموفق بود",

            loginSuccess: "ورود موفق بود",
            loginFailed: "ایمیل یا رمز عبور اشتباه است",

            registerSuccess: "ثبت‌نام موفق بود",
            registerFailed: "ثبت‌نام ناموفق بود",

            networkLoginError: "اتصال به سرور برقرار نشد",
            networkRegisterError: "ثبت‌نام انجام نشد",

            orLoginWith: "همچنین می‌توانید با این روش وارد شوید",
            logout: "خروج", 
        },
        validation: { 
            name: "نام  باید حداقل ۳ حرف باشد", 
            lastName: "نام خانواده گی باید حداقل ۳ حرف باشد", 
            email: "ایمیل درست وارد کنید", 
            password: "رمز عبور باید حداقل ۶ حرف باشد", 
            confirm: "تکرار رمز عبور درست نیست", 
        },
         footer: {
            legal: "قوانین",
            terms: "شرایط استفاده",
            privacy: "حریم خصوصی",
            cookies: "کوکی‌ها",

            information: "اطلاعات",
            faq: "سوالات متداول",
            blog:"وبلاگ",
            support: "پشتیبانی",

            company: "شرکت",
            aboutUs: "درباره ما",
            careers: "فرصت‌های شغلی",
            contactUs: "تماس با ما",

            subscribe: "اشتراک",
            emailPlaceholder: "ایمیل خود را وارد کنید",

            bottomTerms: "قوانین",
            bottomCookies: "کوکی‌ها"
        },
         aboutHero: {
          orgName: "انجمن ستاره شناسی افغانستان",
          heroTitle: "کاوش کیهان از افغانستان",
          heroDescription: "ترویج علم نجوم و علوم فضایی در افغانستان از طریق آموزش، پژوهش، برنامه‌های رصدی و الهام‌بخشی به نسل آینده.",
          exploremorebtn: "کاوش بیشتر",
          joinCommbtn : "پیوستن به کمیونیتی"
        },
        aboutStory:{
          title: "از رویا ها تا ستارگان",
          discription1: "انجمن نجوم افغانستان یکی از نخستین حرکت‌های علمی مستقل در افغانستان در حوزه نجوم و علوم فضایی بود.",
          discription2 : " هدف اصلی این انجمن ترویج علم، مبارزه با خرافات و ایجاد امید برای نسل جوان افغانستان بود.",
          discription3 : " امروز این انجمن با مدیریت جدید در تلاش است تا دوباره علم نجوم  را در افغانستان زنده کند."
        },

        AboutMission: {
          misionTitle: "ماموریت ما",
          misiondisc: "ترویج علم نجوم و علوم فضایی در افغانستان از طریق آموزش، برنامه‌های رصدی، فعالیت‌های علمی و پرورش نسل نو پژوهشگران و ستاره‌شناسان جوان.",
          Education: "تعلیم و تربیه",
          edudisc: "ترویج آموزش نجوم در مکاتب، دانشگاه‌ها و جوامع",
          observation: "رصد",
          obsdisc: "تشویق رصدهای عملی و عکاسی نجومی در سراسر کشور",
          commuity: "انجمن",
          commdisc: "ساختن جامعه‌ای قوی از علاقه‌مندان نجوم و ستاره‌شناسان جوان",
          research: "تحقیق",
          researchdisc: "حمایت از پژوهش‌های فضایی و همکاری‌های علمی در سطح بین‌المللی",
          events: "رویداد ها",
          members: "اعضا",
          province: "ولایات",
          researchProject: "پروژه های تحقیقی"
        },

        AboutValues:{
          value: "ارزش ها",
          valuedisc: "ما فعالیت‌های مختلفی در زمینهٔ نجوم و علوم فضایی برگزار می‌کنیم و در آن‌ها شرکت می‌کنیم",
         value1: "آموزش و آگاهی علمی",
         value2: "نوآوری و آینده‌نگری",
         value3: "حمایت از استعدادهای جوان",
         value4: "همکاری و کار تیمی",
         value5: "توسعه پایدار علمی",
         value6: "ایجاد امید و انگیزه برای نسل آینده"
        },

        AboutVisions: {
          vision: "چشم انداز",
          visionDisc:"تبدیل افغانستان به یکی از مراکز فعال علمی و فضایی منطقه ",
          vision1: "ایجاد آزمایشگاه‌های پیشرفته",
          vision2: "توسعه فناوری فضایی",
          vision3: "همکاری‌های بین‌المللی ",
          vision4: " ساخت و پرتاب ماهواره‌های داخلی"
        },
        teamCard: [
        
        {
           id: 1,
          name:"فیروز دانش",
          role: "مدیر انجمن",
          quote : "گاهی به آسمان نگاه می‌کنم و یادم می‌آید انسان فقط برای زندگی کردن به این جهان نیامده است؛ ما آمده‌ایم تا بفهمیم، کشف کنیم و معنای هستی را لمس کنیم. برای من، ستاره‌ها فقط نقطه‌های نورانی نیستند؛ هر کدام پرسشی‌اند درباره جهان، زمان و جایگاه انسان در این کیهان بی‌پایان. من باور دارم بزرگ‌ترین زیبایی انسان، توانایی او در اندیشیدن و فهمیدن ناشناخته‌هاست.",
        },
        {
           id: 2,
          name: " صالحه نبی زاده",
          role: " پژوهشگر",
          quote: "علاقه‌منی من به علم نجوم، انگیزه‌ای شد تا شناخت عمیق‌تری از کیهان و شگفتی‌های بی‌پایان آن به‌دست آورم و دریابم که جهان پیرامون ما تا چه اندازه گسترده و الهام‌بخش است.هدف من این است که این زیبایی‌ها و دانسته‌ها را با دیگران نیز به اشتراک بگذارم و الهام‌بخش افرادی باشم که همچون من، شیفته کشف ناشناخته‌ها و اسرار جهان هستند.بیایید با هم سفری به دنیای ستارگان و کهکشان‌ها آغاز کنیم و تجربه‌هایی فراموش‌نشدنی از عظمت کیهان رقم بزنیم."
        },
        {
           id: 3,
          name: " سهیلا محمدی",
          role: " مربی آموزش",
          quote:"اگر بخواهم صادقانه بگویم، نجوم برای من فقط یک علاقه ساده نیست؛ بیشتر شبیه یک نیاز فکری است. وقتی شب‌ها به آسمان نگاه می‌کنم، ذهنم آرام نمی‌گیرد تا برای این همه سکوت و این همه نظم یک معنی پیدا کند. ستاره‌ها برایم مثل سوال‌هایی‌اند که هیچ وقت تمام نمی‌شوند؛ هر جواب، خودش چند سوال تازه می‌سازد. شاید به همین خاطر است که از نجوم فاصله نمی‌گیرم، چون هر بار که برمی‌گردم به آسمان، احساس می‌کنم هنوز چیزهای زیادی هست که باید بفهمم، و هنوز راه زیادی مانده تا آدم واقعاً بتواند این جهان را درک کند."
        },
        {  
           id: 4,
          name: " شکیب سروری",
          role: " نویسنده مقاله های نجومی",
          quote: "سمان صفحه بزرگی است كه داستان هاى گذشته را براى ما روايت میكند و در دل هر ستاره سرگذشت هزاران ساله نورى پنهان شده كه هنوز در راه رسيدن است . همه چیز در هستى به هم متصل است ، حتى فاصله ها ، فقط شكل پيوند ها پنهان اند و این جملات اغلب بر كوچکی انسان در برابر عظمت كائنات ، زيبايى ستارگان وحس آرامش يا كنجكاوى در برابر راز هاى دنيا تمركز دارند .ما از گرد و غبار ستاره ها ساخته شده ايم و روزى به آسمان باز خواهيم گشت ."
        },
         {  
           id: 5,
          name: "  سید حسین حسینی",
          role: " عضو",
          quote: "ما فرزندان ستاره‌ها هستیم؛ اتم‌های بدن ما روزی در قلب ستارگان متولد شده‌اند. وقتی انسان به آسمان نگاه می‌کند، در حقیقت به گذشته‌ی خودش خیره شده است؛ به جایی که نور، زمان و هستی برای نخستین‌بار داستان وجود ما را نوشتند."
        },
         {  
           id: 6,
          name: "  علی فرزاد",
          role: " عضو انجمن   ",
          quote: "نجوم فقط مطالعه‌ی ستاره‌ها نیست؛ سفری‌ست برای فهمیدن جایگاه انسان در این جهان بی‌انتها. هر نوری که از اعماق کیهان به چشمان ما می‌رسد، یادآوری می‌کند که حتی در تاریک‌ترین شب‌ها نیز، جهان هنوز در حال سخن گفتن با ماست"
        },
         {  
           id: 7,
          name: "  شبنم هاشمی",
          role: " مقاله نویس",
          quote: "ما فرزندان ستاره‌ها هستیم؛ اتم‌های بدن ما روزی در قلب ستارگان متولد شده‌اند. وقتی انسان به آسمان نگاه می‌کند، در حقیقت به گذشته‌ی خودش خیره شده است؛ به جایی که نور، زمان و هستی برای نخستین‌بار داستان وجود ما را نوشتند"
        },
          {  
           id: 8,
          name: " نجمین افق",
          role: " مربی آموزش",
          quote: "سمان صفحه بزرگی است كه داستان هاى گذشته را براى ما روايت میكند و در دل هر ستاره سرگذشت هزاران ساله نورى پنهان شده كه هنوز در راه رسيدن است . همه چیز در هستى به هم متصل است ، حتى فاصله ها ، فقط شكل پيوند ها پنهان اند و این جملات اغلب بر كوچکی انسان در برابر عظمت كائنات ، زيبايى ستارگان وحس آرامش يا كنجكاوى در برابر راز هاى دنيا تمركز دارند .ما از گرد و غبار ستاره ها ساخته شده ايم و روزى به آسمان باز خواهيم گشت ."
        },
          {  
           id: 9,
          name: " تقی رایا",
          role: "  همکار",
          quote: "سمان صفحه بزرگی است كه داستان هاى گذشته را براى ما روايت میكند و در دل هر ستاره سرگذشت هزاران ساله نورى پنهان شده كه هنوز در راه رسيدن است . همه چیز در هستى به هم متصل است ، حتى فاصله ها ، فقط شكل پيوند ها پنهان اند و این جملات اغلب بر كوچکی انسان در برابر عظمت كائنات ، زيبايى ستارگان وحس آرامش يا كنجكاوى در برابر راز هاى دنيا تمركز دارند .ما از گرد و غبار ستاره ها ساخته شده ايم و روزى به آسمان باز خواهيم گشت ."
        }

        ],
        blog: {
            featuredPost: "پست ویژه",
            readArticle: "مطالعه مقاله",
            searchPlaceholder: "جستجو در شگفتی‌های فضا...",
            categories: "دسته‌بندی‌ها",
            featuredPosts: "پست‌های ویژه",
            showAll: "مشاهده همه ←",
            close: "بستن ←",
            allPosts: "همه پست‌ها",
            noPosts: "هیچ پستی در این دسته‌بندی پیدا نشد.",
            solarSystem: "منظومه شمسی",
            stars: "ستاره‌گان",
            galaxies: "کهکشان‌ها",
            spaceEvents: "رویدادهای فضایی",
            all: "همه",
            minutesRead: "دقیقه مطالعه",
            writeComment: "نظر خود را بنویسید...",
            noComments: "هنوز نظری ثبت نشده است."

        },
        postDetails: {
            back: "برگشت",
            category: "دسته‌بندی",
            views: "تعداد بازدید",
            notFound: "پست پیدا نشد"
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
    contact: {
        title: "Contact Us",
        fullName: "Full Name",
        email: "E-mail",
         message: "Message",
        submit: "Submit",
        nameError: "Name is required",
        emailError: "Email is required",
        messageError: "Message is required",
    },
    auth: { 
        loginTitle: "Login to Account", 
        signupTitle: "Sign Up", 
        emailPlaceholder: "Email Address",
        password: "Password", forgot: "Forgot your password?", 
        login: "Login", 
        signup: "Sign Up",
        welcome: "Welcome!", 
        noAccount: "If you do not have an account yet, create your account now.", 
        create: "Sign Up", 
        haveAccount: "Already have an account?", 
        haveAccountText: "If you already created an account, login from this section.", 
        firstName: "First Name", 
        lastName: "Last Name", 
        emailAddress: "Email Address", 
        phoneNumber: "Phone Number", 
        confirmPassword: "Confirm Password", 
        googleLogin: "Login with Google",
        googleLoginSuccess: "Google login successful",
        googleLoginFailed: "Google login failed",

        loginSuccess: "Login successful",
        loginFailed: "Invalid email or password",

        registerSuccess: "Registration successful",
        registerFailed: "Registration failed",

        networkLoginError: "Failed to connect to server",
        networkRegisterError: "Failed to register",

        orLoginWith: "Also you are able to login with",
        logout: "Logout" },
        validation: { 
            name: "Name must be at least 3 characters",  
            lastName: "Lastname must be at least 3 characters", 
            email: "Please enter a valid email", 
            password: "Password must be at least 6 characters",
            confirm: "Confirm password does not match", 
        },
         footer: {
            legal: "Legal",
            terms: "Terms of Service",
            privacy: "Privacy Policy",
            cookies: "Cookies",

            information: "Information",
            faq: "FAQ",
            blog: "Blog",
            support: "Support",

            company: "Company",
            aboutUs: "About Us",
            careers: "Careers",
            contactUs: "Contact Us",

            subscribe: "Subscribe",
            emailPlaceholder: "Email address",

            bottomTerms: "Terms",
            bottomCookies: "Cookies"
        },
         aboutHero: {
          orgName: " Afghanistan Astronomy Society  ",
          heroTitle: "Exploring Universe from Afghanistan",
          heroDescription: "Promoting astronomy and space science in Afghanistan through education, research,observational programs, and inspiring future generation.",
          exploremorebtn: "Explore More",
          joinCommbtn : " Join Community"
        },
         aboutStory:{
          title: "From Dream To The Stars",
          discription1: "The Afghanistan Astronomy Association was one of the first independent scientific movements in Afghanistan in the field of astronomy and space sciences",
          discription2 : " The main goal of this association was to promote science, fight superstition, and create hope for the young generation of Afghanistan",
          discription3 : " Today, under new leadership, the association is striving to revive astronomy in Afghanistan once again."
        },
          AboutMission: {
          misionTitle: "Our Mission",
          misiondisc: "We aim to inspire the next generation by making astronomy accessible to everyone through education, observation, research, and collaboration.",
          Education: " Education ",
          edudisc: "Promoting astronomy education in schools, universities and communities.",
          observation: "observation",
          obsdisc: "Encouraging practical observations and astrophotography across the country.",
          commuity: "Community",
          commdisc: "Building a strong community of astronomy enthusiasts and young astronomers.",
          research: "Research",
          researchdisc: "Supporting space research and scientific collaboration internationally.",
          events: " Events",
          members: "Members",
          province: "Provinces",
          researchProject: " Research Projects "
        },

        AboutValues:{
          value: " Values",
          valuedisc: "We organize and participate in various astronomy and space scienceactivities.",
         value1: "Scientific Education and Awareness",
         value2: "Innovation and Future Vision",
         value3: "Support for Young Talents",
         value4: "Collaboration and Teamwork",
         value5: "Sustainable Scientific Development",
         value6: "Creating Hope and Motivation for Future Generations"
        },

        AboutVisions: {
          vision: " Vision",
          visionDisc:"Transforming Afghanistan into one of the region’s active scientific and space centers through:",
          vision1: "Establishment Of Advanced Laboratories",
          vision2: "Development Of Space Technology",
          vision3: " International Collaborations ",
          vision4: " Voving Toward The Construction And Launch Of Domestic Satellites "
        },
        teamCard: [
  {
    id: 1,
    name: "Firooz Danesh",
    role: "Association Director",
    quote:
      "Sometimes I look at the sky and remember that humanity was not brought into this world merely to live; we are here to understand, to discover, and to touch the meaning of existence. To me, the stars are not just bright points of light; each one is a question about the universe, time, and the place of humanity in this endless cosmos. I believe the greatest beauty of human beings lies in their ability to think and to understand the unknown."
  },
  {
    id: 2,
    name: "Saleha Nabi Zada",
    role: "Researcher",
    quote:
      "My interest in astronomy became a motivation for me to gain a deeper understanding of the universe and its endless wonders, and to realize how vast and inspiring the world around us truly is. My goal is to share these beauties and discoveries with others and inspire people who, like me, are passionate about uncovering the mysteries and secrets of the cosmos. Let us begin a journey together into the world of stars and galaxies and create unforgettable experiences of the greatness of the universe."
  },
  {
    id: 3,
    name: "Sohaila Mohammadi",
    role: "Education Instructor",
    quote:
      "If I want to be honest, astronomy is not just a simple interest for me; it feels more like an intellectual need. When I look at the night sky, my mind cannot rest until it finds meaning in all this silence and order. The stars are like endless questions to me; every answer creates several new questions. Perhaps that is why I never distance myself from astronomy, because every time I return to the sky, I feel there is still so much left to understand, and a long way to go before humanity can truly comprehend this universe."
  },
  {
    id: 4,
    name: "Shakib Sarwari",
    role: "Astronomy Article Writer",
    quote:
      "The sky is a vast page that tells us stories of the past, and within every star lies the hidden tale of ancient light still traveling toward us. Everything in existence is connected, even distances; only the forms of these connections remain unseen. These thoughts often focus on the smallness of humanity before the greatness of the cosmos, the beauty of the stars, and the sense of peace and curiosity in the face of the mysteries of the world. We are made of stardust, and one day we shall return to the sky."
  },
  {
    id: 5,
    name: "Sayed Hussain Hussaini",
    role: "Member",
    quote:
      "We are the children of the stars; the atoms within our bodies were once born in the hearts of stars. When humans look at the sky, they are in fact staring into their own past — to the place where light, time, and existence first wrote the story of our being."
  },
  {
    id: 6,
    name: "Ali Farzad",
    role: "Association Member",
    quote:
      "Astronomy is not merely the study of stars; it is a journey to understand humanity’s place in this infinite universe. Every light that reaches our eyes from the depths of the cosmos reminds us that even in the darkest nights, the universe is still speaking to us."
  },
  {
    id: 7,
    name: "Shabnam Hashimi",
    role: "Article Writer",
    quote:
      "We are the children of the stars; the atoms within our bodies were once born in the hearts of stars. When humans look at the sky, they are in fact staring into their own past — to the place where light, time, and existence first wrote the story of our being."
  },
  {
    id: 8,
    name: "Najmin Ofoq",
    role: "Education Instructor",
    quote:
      "The sky is a vast page that tells us stories of the past, and within every star lies the hidden tale of ancient light still traveling toward us. Everything in existence is connected, even distances; only the forms of these connections remain unseen. These thoughts often focus on the smallness of humanity before the greatness of the cosmos, the beauty of the stars, and the sense of peace and curiosity in the face of the mysteries of the world. We are made of stardust, and one day we shall return to the sky."
  },
  {
    id: 9,
    name: "Taqi Raya",
    role: "Collaborator",
    quote:
      "The sky is a vast page that tells us stories of the past, and within every star lies the hidden tale of ancient light still traveling toward us. Everything in existence is connected, even distances; only the forms of these connections remain unseen. These thoughts often focus on the smallness of humanity before the greatness of the cosmos, the beauty of the stars, and the sense of peace and curiosity in the face of the mysteries of the world. We are made of stardust, and one day we shall return to the sky."
  }
],
    blog: {
        featuredPost: "Featured Post",
        readArticle: "Read Article",
        searchPlaceholder: "Search the wonders of space...",
        categories: "Categories",
        featuredPosts: "Featured Posts",
        showAll: "View All →",
        close: "Close ←",
        allPosts: "All Posts",
        noPosts: "No posts found in this category.",
        solarSystem: "Solar System",
        stars: "Stars",
        galaxies: "Galaxies",
        spaceEvents: "Space Events",
        all: "All",
        minutesRead: "min read",
        writeComment: "نظر خود را بنویسید...",
        noComments: "هنوز نظری ثبت نشده است."


    },
    postDetails: {
        back: "Back",
        category: "Category",
        views: "Views",
        notFound: "Post not found"
    }
        
        
      
    
 

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