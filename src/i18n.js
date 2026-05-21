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
            login: "ورود", signup: "ثبت نام", 
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
            confirm: "تکرار رمز عبور درست نیست", },
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
            password: "Password", 
            forgot: "Forgot your password?", 
            login: "Login", signup: "Sign Up", 
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
            logout: "Logout"
        },
        validation: { 
            name: "Name must be at least 3 characters",  
            lastName: "Lastname must be at least 3 characters", 
            email: "Please enter a valid email",  
            password: "Password must be at least 6 characters",
            confirm: "Confirm password does not match", 
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