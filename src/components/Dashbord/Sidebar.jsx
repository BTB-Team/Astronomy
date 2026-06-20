import React from 'react';
import { useTranslation } from 'react-i18next'; // ۱. وارد کردن هوک ترجمه
import { Link } from 'react-router-dom';
// تمام متغیرها و توابع مورد نیاز به عنوان پراپ (Props) دریافت شدند
function Sidebar({ activeTab, setActiveTab, setShowLogoutModal }) {
  const { t } = useTranslation(); // ۲. مقداردهی تابع t برای ترجمه متون

  return (
    <div>
      <nav className="space-y-2 text-start">
      <div className="w-full pb-2 border-b border-gray-100 flex flex-col pt-3 w-fit">
      <Link to="/" className="inline-block text-center bg-[linear-gradient(90deg,#D66BFF_0%,#B85CFF_50%,#8B5CF6_100%)] text-white font-semibold rounded-xl px-3 py-2 text-xs transition-all duration-300 hover:opacity-90 shadow-md">
        {t("Dashbord.Sidebar.home_button")}
      </Link>
  </div>
        <button
          onClick={() => setActiveTab("dashboard")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-black ${
            activeTab === "dashboard"
              ? "bg-purple-100 text-purple-700"
              : "hover:bg-gray-50"
          }`}
        >
          <span>🏠</span> {t('Dashbord.Sidebar.sidebar_dashboard')}
        </button>

        <button
          onClick={() => setActiveTab("classes")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-black ${
            activeTab === "classes"
              ? "bg-purple-100 text-purple-700"
              : "hover:bg-gray-50"
          }`}
        >
          <span>📚</span> {t('Dashbord.Sidebar.sidebar_my_classes')}
        </button>

        <button
          onClick={() => setActiveTab("payments")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-black ${
            activeTab === "payments"
              ? "bg-purple-100 text-purple-700"
              : "hover:bg-gray-50"
          }`}
        >
          <span>💳</span> {t('Dashbord.Sidebar.sidebar_payments')}
        </button>

        <button
          onClick={() => setActiveTab("notifications")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-black ${
            activeTab === "notifications"
              ? "bg-purple-100 text-purple-700"
              : "hover:bg-gray-50"
          }`}
        >
          <span>🔔</span> {t('Dashbord.Sidebar.sidebar_notifications')}
          {/* تغییر mr-auto به ms-auto برای هماهنگی خودکار موقعیت با جهت زبان */}
          <span className="ms-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-sans">
            3
          </span>
        </button>

        <button
          onClick={() => setActiveTab("profile")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-black ${
            activeTab === "profile"
              ? "bg-purple-100 text-purple-700"
              : "hover:bg-gray-50"
          }`}
        >
          <span>👤</span> {t('Dashbord.Sidebar.sidebar_profile')}
        </button>

        <button
          onClick={() => setShowLogoutModal(true)}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 text-red-500"
        >
          <span>🚪</span> {t('Dashbord.Sidebar.sidebar_logout')}
        </button>

      </nav>
    </div>
  );
}

export default Sidebar;
