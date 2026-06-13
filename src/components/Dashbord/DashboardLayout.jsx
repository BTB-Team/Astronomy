import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import DashboardHome from "./DashboardHome";
import MyClasses from "./MyClasses.jsx";
import Payments from "./Payments";
import Notifications from "./Notifications";
import Profile from './Profile.jsx';
import { useTranslation } from "react-i18next";

function DashboardLayout() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  
  // 🔹 ۱. استیت جدید برای مدیریت باز و بسته شدن سایدبار در موبایل و تبلت
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    // ویژگی dir حذف شد تا جهت صفحه (RTL/LTR) بر اساس زبان فعال به صورت خودکار تنظیم شود
    <div className="flex min-h-screen bg-gray-100 relative overflow-x-hidden">
      
      {/* 🔹 ۲. دکمه همبرگری شناور اختصاصی موبایل و تبلت */}
      {/* این دکمه فقط در حالت موبایل ظاهر می‌شود و سایدبار داشبورد را جلو و عقب می‌برد */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-[#2C1747] text-white p-2.5 rounded-xl shadow-lg border border-white/20 text-xl font-bold"
      >
        {isSidebarOpen ? '✕' : '☰'}
      </button>

      {/* 🔹 ۳. لایه تاریک شیشه‌ای پشت منو (فقط در موبایل هنگام باز بودن منو ظاهر می‌شود) */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* 🔹 ۴. بخش سایدبار ریسپانسیو شده */}
      {/* در دسکتاپ (md به بالا) ثابت در کنار صفحه است؛ در موبایل مخفی است و با انیمیشن کشویی باز می‌شود */}
      <aside className={`
        fixed top-0 bottom-0 right-0 z-40 w-64 bg-white border-l border-gray-200 p-4 transition-transform duration-300 ease-in-out
        md:sticky md:top-0 md:h-screen md:translate-x-0 md:z-0
        ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          setShowLogoutModal={setShowLogoutModal} 
          onClose={() => setIsSidebarOpen(false)} // ۵. وقتی کاربر روی گزینه‌ای کلیک کرد، منو در موبایل بسته شود
        />
      </aside>

      {/* 🔹 ۵. بخش محتوای اصلی صفحات (اصلاح پدینگ‌ها برای دسکتاپ و موبایل) */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 w-full overflow-x-hidden">
        
        {activeTab === "dashboard" && <DashboardHome activeTab={activeTab} />}
        {activeTab === "classes" && <MyClasses activeTab={activeTab} />} 
        {activeTab === "payments" && <Payments activeTab={activeTab} />} 
        {activeTab === "notifications" && <Notifications activeTab={activeTab} />} 
        {activeTab === "profile" && <Profile activeTab={activeTab} />}

        {/* مدال خروج بدون تغییر */}
        {showLogoutModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full text-center">
              <h3 className="font-bold text-lg mb-4 text-black">{t("Dashbord.dashboardLayout.logout_modal_title")}</h3>
              <div className="flex gap-3 justify-center">
                <button 
                  onClick={() => {
                    setShowLogoutModal(false);
                  }} 
                  className="bg-red-500 text-white px-4 py-2 rounded-xl"
                >
                  {t("Dashbord.dashboardLayout.logout_confirm")}
                </button>
                <button 
                  onClick={() => setShowLogoutModal(false)} 
                  className="border px-4 py-2 rounded-xl text-red-400 border-red-300 bg-white"
                >
                   {t("Dashbord.dashboardLayout.logout_cancel")}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default DashboardLayout;
