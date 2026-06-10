import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // ۱. وارد کردن هوک ترجمه

const DashboardHome = () => {
  const { t } = useTranslation(); // ۲. مقداردهی تابع t برای ترجمه متون

  // مدیریت وضعیت پاپ‌آپ‌ها و مدال‌ها
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("edit");

  // وضعیت فعال یا غیرفعال بودن (سوییچ‌های Public/Private)
  const [courseStatus, setCourseStatus] = useState({
    1: true,
    2: false,
  });

  // اطلاعات کاربری
  const [userProfile, setUserProfile] = useState({
    fullName: "Firooz Danesh",
    username: "Danesh",
    email: "Danesh@gmail.com",
    phone: "0799123456",
    profileImage: "https://unsplash.com",
  });

  // داده‌های بخش Overview (انتقال به داخل تابع جهت ترجمه داینامیک)
  const overviewStats = [
    { id: 2, label: t("Dashbord.DashboardHome.my_classes"), value:  t("Dashbord.DashboardHome.my_classes"), color: "bg-[#51368B]", icon: "📚" },
    { id: 3, label: t("Dashbord.DashboardHome.payment"), value: t("Dashbord.DashboardHome.paid_status"), color: "bg-[#D85E7D]", icon: "💳" },
    { id: 4, label: t("Dashbord.DashboardHome.my_profile"), value: t("Dashbord.DashboardHome.active_status"), color: "bg-[#B5A5DB]", icon: "👤" },
  ];

  // داده‌های بخش دوره‌ها (انتقال به داخل تابع جهت ترجمه داینامیک)
  const myCourses = [
    { 
      id: 1, 
      title: t("Dashbord.DashboardHome.course_1_title"), 
      description: t("Dashbord.DashboardHome.course_1_desc"),
    },
    { 
      id: 2, 
      title: t("Dashbord.DashboardHome.course_2_title"), 
      description: t("Dashbord.DashboardHome.course_2_desc"),
    },
  ];

  // جابجایی وضعیت سوییچ (Public / Private)
  const toggleStatus = (id) => {
    setCourseStatus(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    // ویژگی dir حذف شد تا جهت کل صفحه بر اساس زبان (rtl/ltr) خودکار تنظیم شود
    <div className="min-h-screen bg-[#FDF8EE] py-8 px-4 md:px-12">
      
      <div className="max-w-6xl mx-auto bg-white rounded-[32px] shadow-xl border border-gray-100 min-h-[85vh] p-6 md:p-10">
        
        {/* هدر صفحه */}
        <header className="flex justify-between items-center mb-8 pb-4 border-b border-gray-50">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 bg-[#51368B] rounded-full flex items-center justify-center text-white text-xs font-bold">P</span>
              <span className="font-extrabold text-gray-900 text-lg">{t("Dashbord.DashboardHome.app_name")}</span>
            </div>
            <div className="text-start">
              <span className="text-gray-800 font-bold text-sm">{t("Dashbord.DashboardHome.dashboard_title")}</span>
              <span className="text-gray-400 text-xs block mt-0.5">{t("Dashbord.DashboardHome.current_date")}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 ">
            <button className="text-gray-400 hover:text-gray-600 text-lg">✉️</button>
            <button className="text-gray-400 hover:text-gray-600 text-lg">🔔</button>
            <div 
              onClick={() => setIsProfileOpen(true)} 
              className="flex items-center gap-2 bg-gray-50 p-1.5 pr-4 rounded-full border border-gray-100 cursor-pointer hover:bg-gray-100 transition"
            >
              <div className="w-8 h-8 rounded-full bg-[#B5A5DB] flex items-center justify-center text-[#51368B] font-bold text-xs">AJ</div>
              <span className="text-xs font-bold text-gray-700 hidden sm:inline">{userProfile.fullName}</span>
              <span className="text-gray-400 text-xs">▼</span>
            </div>
          </div>
        </header>

        {/* بنر خوش‌آمدگویی */}
        <section className="bg-[#EAE4F6] rounded-[24px] p-6 md:p-8 flex justify-between items-center mb-8 relative overflow-hidden">
          <div className="text-start z-10">
            <h2 className="text-3xl font-black text-[#2D1454] mb-2">
              {t("Dashbord.DashboardHome.welcome_user", { name: userProfile.fullName })}
            </h2>
            <p className="text-[#51368B] text-sm font-medium">{t("Dashbord.DashboardHome.welcome_back_message")}</p>
          </div>
        </section>

        {/* بخش Overview */}
        <h3 className="text-sm font-bold text-gray-400 mb-4 text-start">{t("Dashbord.DashboardHome.overview")}</h3>
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {overviewStats.map((stat) => (
            <div key={stat.id} className={`${stat.color} p-4 rounded-2xl text-white flex items-center justify-between shadow-sm`}>
              <div className="text-start">
                <span className="block text-2xl font-black">{stat.value}</span>
                <span className="text-xs opacity-90 font-medium">{stat.label}</span>
              </div>
              <span className="bg-white/20 p-2 rounded-xl text-lg">{stat.icon}</span>
            </div>
          ))}
        </section>

        {/* لیست دوره‌ها */}
        <section className="space-y-4">
          {myCourses.map((course) => (
            <div key={course.id} className="bg-white p-5 rounded-2xl border border-gray-100 hover:shadow-md transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-start">
              <div className="flex items-start gap-4 flex-1">
                <div>
                  <h4 className="font-bold text-gray-900 text-base">{course.title}</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed max-w-xl">{course.description}</p>
                </div>
              </div>
              
              {/* بخش سوییچ عمومی/خصوصی */}
              <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-gray-50">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-500">
                    {courseStatus[course.id] ? t("Dashbord.DashboardHome.public_status") : t("Dashbord.DashboardHome.private_status")}
                  </span>
                  <button 
                    onClick={() => toggleStatus(course.id)}
                    className={`w-10 h-5 flex items-center rounded-full p-0.5 transition-colors duration-300 ${courseStatus[course.id] ? "bg-[#51368B]" : "bg-gray-300"}`}
                  >
                    <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${courseStatus[course.id] ? (document.dir === "rtl" ? "-translate-x-5" : "translate-x-5") : "translate-x-0"}`} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

      </div>

      {/* مدال تنظیمات پروفایل کاربری */}
      {isProfileOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden border border-gray-100">
            <div className="bg-[#51368B] p-5 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span>👤</span>
                <h3 className="font-bold text-sm">{t("Dashbord.DashboardHome.account_settings_title")}</h3>
              </div>
              <button onClick={() => setIsProfileOpen(false)} className="text-white hover:opacity-80 font-bold">✕</button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6 border-b border-gray-50 pb-4">
                <img src={userProfile.profileImage} alt="Profile" className="w-14 h-14 rounded-full bg-gray-200 object-cover" />
                <div className="text-start">
                  <h4 className="font-bold text-gray-900 text-sm">{userProfile.fullName}</h4>
                  <p className="text-xs text-gray-400 mt-0.5">{userProfile.email}</p>
                </div>
              </div>
              {/* ادامه کدهای مدال بر اساس نیاز شما در فایل کپی می‌شود */}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default DashboardHome;
