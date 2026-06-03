import firstImage from "../assets/images/firstimage.webp";
import secondImage from "../assets/images/secendimage.webp";
import thirdImage from "../assets/images/thredimage.webp";

import { Link } from "react-router-dom";
const courses = [
  {
    id: 1,
    title: "مبانی نجوم و کیهان‌شناسی",
    image: firstImage,
    slug: "astronomy",
    
    content: {
      duration: "۳ ماه",
      sessions: "۴ جلسه در ماه",
      certificate: "سرتیفیکت پایان دوره",
      topics: [
        "آشنایی با جهان هستی",
        "مفاهیم بنیادی نجوم",
        "مبانی کیهان‌شناسی",
        "منظومه شمسی و اجرام آسمانی",
        "ستارگان و کهکشان‌ها"
      ]
    }
  },
  
  {
    id: 2,
    title: "نجوم و کیهان‌شناسی تخصصی",
    image: secondImage,
    slug: "astronomy-advanced",

    content: {
      duration: "۲ ماه",
      sessions: "۸ جلسه در ماه",
      level: "پیشرفته",
      topics: [
        "معادلات نجومی پیشرفته",
        "اخترفیزیک",
        "نجوم تخصصی",
        "تحلیل پدیده‌های کیهانی"
      ]
    }
  },

  {
    id: 3,
    title: "تکنولوژی فضایی و مهندسی فضا",
    image: thirdImage,
    slug: "space-technology",

    content: {
      duration: "۱ ماه",
      partner: "تیم رباتیک افغانستان",
      certificate: "دیپلم + عضویت انجمن",
      topics: [
        "آشنایی با تکنولوژی فضایی",
        "اصول ساخت موشک",
        "اصول طراحی ماهواره",
        "عملکرد سیستم‌های فضایی"
      ]
    }
  }
];



export default courses;