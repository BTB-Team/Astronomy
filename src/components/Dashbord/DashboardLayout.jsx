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
  
  // استیت کنترل باز/بسته شدن منوی همبرگری در موبایل و تبلت
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // افزودن دایرکشن پویا (بر اساس مستندات پروژه شما، کلاس flex قرار گرفت)
    <div className="flex min-h-screen bg-gray-100 relative">
    
      {/* ----------------- حالت دسکتاپ ----------------- */}
      {/* این بخش سایدبار اصلی شما را در صفحات بزرگ (lg به بالا) ثابت نگه می‌دارد و در موبایل مخفی می‌کند */}
      <div className="hidden lg:block shrink-0">
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          setShowLogoutModal={setShowLogoutModal} 
        />
      </div>

      {/* ----------------- حالت موبایل و تبلت (منوی کشویی / Drawer) ----------------- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* لایه تاریک پشت منو برای تمرکز کاربر؛ با کلیک روی آن منو بسته می‌شود */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-xs"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* بدنه سایدبار در موبایل */}
          <div className="relative bg-white h-full shadow-2xl z-10 animate-fade-in">
            {/* دکمه بستن منوی کشویی موبایل */}
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 left-4 bg-gray-100 hover:bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center font-bold text-base z-50"
            >
              ×
            </button>
            
            <Sidebar 
              activeTab={activeTab} 
              setActiveTab={(tab) => {
                setActiveTab(tab);
                setIsMobileMenuOpen(false); // پس از کلیک روی هر صفحه، منو در موبایل خودکار بسته شود
              }} 
              setShowLogoutModal={setShowLogoutModal} 
            />
          </div>
        </div>
      )}

      {/* ----------------- کانتینر اصلی صفحات داخلی ----------------- */}
      {/* پدینگ در موبایل p-4 و در دسکتاپ p-8 می‌شود تا فضا فشرده نشود. overflow-x-hidden جلو بیرون‌زدگی افقی صفحات را می‌گیرد */}
      <main className="flex-1 p-4 md:p-8 w-full overflow-x-hidden">
        
        {/* نوار بالای صفحه مخصوص موبایل (دکمه همبرگری) - در دسکتاپ مخفی است (lg:hidden) */}
        <div className="lg:hidden mb-6 flex justify-between items-center bg-white p-4 rounded-2xl shadow-xs border border-gray-50">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="px-4 py-2 bg-[#51368B] hover:bg-[#3d286b] text-white rounded-xl font-bold flex items-center justify-center gap-2 text-xs transition"
          >
            <span>☰</span>
            <span>{t("منو")}</span>
          </button>
          
          {/* نمایش نام صفحه فعلی در بالای موبایل */}
          <div className="text-xs font-black text-gray-700">
            {activeTab === "dashboard" && t("Dashbord.DashboardHome.dashboard_title")}
            {activeTab === "classes" && t("Dashbord.DashboardHome.my_classes")}
            {activeTab === "payments" && t("Dashbord.DashboardHome.payment")}
            {activeTab === "notifications" && t("اعلان‌ها")}
            {activeTab === "profile" && t("Dashbord.DashboardHome.my_profile")}
          </div>
        </div>

        {/* رندر شدن صفحات بدون هیچ تغییر منطقی در استیت‌های شما */}
        {activeTab === "dashboard" && <DashboardHome activeTab={activeTab} />}
        {activeTab === "classes" && <MyClasses activeTab={activeTab} />} 
        {activeTab === "payments" && <Payments activeTab={activeTab} />} 
        {activeTab === "notifications" && <Notifications activeTab={activeTab} />} 
        {activeTab === "profile" && <Profile activeTab={activeTab} />}

        {/* مدال خروج ایمن و ریسپانسیو پدینگ‌دار */}
        {showLogoutModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full text-center">
              <h3 className="font-bold text-base md:text-lg mb-4 text-black">{t("Dashbord.dashboardLayout.logout_modal_title")}</h3>
              <div className="flex gap-3 justify-center">
                <button 
                  onClick={() => setShowLogoutModal(false)} 
                  className="bg-red-500 text-white px-4 py-2 rounded-xl text-xs md:text-sm font-semibold"
                >
                  {t("Dashbord.dashboardLayout.logout_confirm")}
                </button>
                <button 
                  onClick={() => setShowLogoutModal(false)} 
                  className="border px-4 py-2 rounded-xl text-red-400 border-red-300 bg-white text-xs md:text-sm font-semibold"
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
