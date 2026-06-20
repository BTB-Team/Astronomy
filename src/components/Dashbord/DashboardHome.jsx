import React, { useState } from "react";
import { useTranslation } from "react-i18next"; 

const DashboardHome = () => {
  const { t } = useTranslation(); 

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

  // داده‌های بخش Overview
  const overviewStats = [
    { id: 2, label: t("Dashbord.DashboardHome.my_classes"), value:  t("Dashbord.DashboardHome.my_classes"), color: "bg-[#51368B]", icon: "📚" },
    { id: 3, label: t("Dashbord.DashboardHome.payment"), value: t("Dashbord.DashboardHome.paid_status"), color: "bg-[#D85E7D]", icon: "💳" },
    { id: 4, label: t("Dashbord.DashboardHome.my_profile"), value: t("Dashbord.DashboardHome.active_status"), color: "bg-[#B5A5DB]", icon: "👤" },
  ];
            
  // داده‌های بخش دوره‌ها
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
    <div className="min-h-screen bg-[#FDF8EE] py-4 md:py-8 px-2 md:px-6">
      
      <div className="max-w-6xl mx-auto bg-white rounded-[24px] md:rounded-[32px] shadow-xl border border-gray-100 min-h-[85vh] p-4 md:p-10">
        
        {/* هدر صفحه - ریسپانسیو شده برای نمایش مناسب در موبایل */}
        <header className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-8 pb-4 border-b border-gray-50">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 bg-[#51368B] rounded-full flex items-center justify-center text-white text-xs font-bold">P</span>
              <span className="font-extrabold text-gray-900 text-base md:text-lg">{t("Dashbord.DashboardHome.app_name")}</span>
            </div>
            <div className="text-start">
              <span className="text-gray-800 font-bold text-xs md:text-sm">{t("Dashbord.DashboardHome.dashboard_title")}</span>
              <span className="text-gray-400 text-[10px] md:text-xs block mt-0.5">{t("Dashbord.DashboardHome.current_date")}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100">
            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-gray-600 text-lg">✉️</button>
              <button className="text-gray-400 hover:text-gray-600 text-lg">🔔</button>
            </div>
            <div 
              onClick={() => setIsProfileOpen(true)} 
              className="flex items-center gap-2 bg-gray-50 p-1.5 pr-4 rounded-full border border-gray-100 cursor-pointer hover:bg-gray-100 transition"
            >
              <div className="w-8 h-8 rounded-full bg-[#B5A5DB] flex items-center justify-center text-[#51368B] font-bold text-xs">AJ</div>
              <span className="text-xs font-bold text-gray-700 hidden sm:inline">{userProfile.fullName}</span>
              <span className="text-gray-400 text-[10px]">▼</span>
            </div>
          </div>
        </header>

        {/* بنر خوش‌آمادگویی - کدهای مخرّب و اضافه از این قسمت کاملاً پاکسازی شد */}
        <section className="bg-[#EAE4F6] rounded-[20px] md:rounded-[24px] p-6 md:p-8 flex justify-between items-center mb-8 relative overflow-hidden">
          <div className="text-start z-10 w-full">
            <h2 className="text-xl md:text-3xl font-black text-[#2D1454] mb-2 leading-tight">
              {t("Dashbord.DashboardHome.welcome_user", { name: userProfile.fullName })}
            </h2>
            <p className="text-[#51368B] text-xs md:text-sm font-medium">{t("Dashbord.DashboardHome.welcome_back_message")}</p>
          </div>
        </section>

        {/* بخش Overview - در موبایل ۱ ستون، در تبلت ۲ ستون و در دسکتاپ ۳ ستونه چیده می‌شود */}
        <h3 className="text-xs md:text-sm font-bold text-gray-400 mb-4 text-start">{t("Dashbord.DashboardHome.overview")}</h3>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {overviewStats.map((stat) => (
            <div key={stat.id} className={`${stat.color} p-4 rounded-2xl text-white flex items-center justify-between shadow-xs`}>
              <div className="text-start overflow-hidden flex-1 pl-2">
                <span className="block text-base md:text-xl font-black truncate">{stat.value}</span>
                <span className="text-[11px] md:text-xs opacity-90 font-medium block truncate mt-0.5">{stat.label}</span>
              </div>
              <span className="bg-white/20 p-2 rounded-xl text-base md:text-lg shrink-0">{stat.icon}</span>
            </div>
          ))}
        </section>

        {/* لیست دوره‌ها */}
        <section className="space-y-4">
          {myCourses.map((course) => (
            <div key={course.id} className="bg-white p-4 md:p-5 rounded-2xl border border-gray-100 hover:shadow-md transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-start">
              <div className="flex items-start gap-4 flex-1 w-full">
                <div className="w-full">
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">{course.title}</h4>
                  <p className="text-[11px] md:text-xs text-gray-400 mt-1 leading-relaxed max-w-xl">{course.description}</p>
                </div>
              </div>
              
              {/* بخش سوییچ عمومی/خصوصی */}
              <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-50">
                <div className="flex items-center gap-2 mr-auto sm:mr-0">
                  <span className="text-[11px] md:text-xs font-bold text-gray-500">
                    {courseStatus[course.id] ? t("Dashbord.DashboardHome.public_status") : t("Dashbord.DashboardHome.private_status")}
                  </span>
                  <button 
                    onClick={() => toggleStatus(course.id)}
                    className={`w-10 h-5 flex items-center rounded-full p-0.5 transition-colors duration-300 ${courseStatus[course.id] ? "bg-[#51368B]" : "bg-gray-300"}`}
                  >
                    {/* هماهنگ‌سازی جهت انیمیشن سوییچ بر اساس مستندات پروژه شما */}
                    <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${courseStatus[course.id] ? "translate-x-5" : "translate-x-0"}`} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

      </div>

      {/* مدال تنظیمات پروفایل کاربری با بسته‌شدن امن تگ ناقص */}
      {isProfileOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden border border-gray-100">
            <div className="bg-[#51368B] p-5 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span>👤</span>
                <h3 className="font-bold text-sm">{t("Dashbord.DashboardHome.account_settings_title")}</h3>
              </div>
              <button onClick={() => setIsProfileOpen(false)} className="text-white hover:opacity-80 font-bold">✕</button>
            </div>
            <div className="p-6 text-center text-xs text-gray-500">
            {t("Dashbord.DashboardHome.account_settings")}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardHome;
