import React from 'react';
import { useTranslation } from 'react-i18next'; // ۱. وارد کردن هوک ترجمه

function Notifications() {
  const { t } = useTranslation(); // ۲. مقداردهی تابع t برای ترجمه متون
  
  const handleNotificationClick = (type) => {
    console.log(`Notification clicked: ${type}`);
  };

  return (
    // ویژگی dir حذف شد و کلاس‌های text-right به text-start تغییر یافتند
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      
      {/* هدر بخش اعلان‌ها */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          <span>🔔</span> {t('Dashbord.Notification.notifications_list_title')}
        </h2>
        <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-2.5 py-1 rounded-full">
          {t('Dashbord.Notification.unread_count_label', { count: 3 })} {/* ارسال عدد ۳ به صورت داینامیک */}
        </span>
      </div>

      {/* اعلان اول: هشدار پرداخت */}
      <button 
        onClick={() => handleNotificationClick("payment_warning")}
        className="w-full text-start bg-white hover:bg-amber-50/40 border-r-4 border-amber-500 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-between group"
      >
        <div className="flex items-center gap-4">
          <div className="bg-amber-100 p-2.5 rounded-xl text-lg group-hover:scale-110 transition-transform">
            🚨
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">{t('Dashbord.Notification.notif_payment_warning_title')}</h4>
            <p className="text-xs text-slate-500 mt-1">{t('Dashbord.Notification.notif_payment_warning_desc')}</p>
          </div>
        </div>
        <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-1 rounded-md shrink-0 mx-4">{t('Dashbord.Notification.time_one_hour_ago')}</span>
      </button>

      {/* اعلان دوم: درس جدید */}
      <button 
        onClick={() => handleNotificationClick("new_lesson")}
        className="w-full text-start bg-white hover:bg-purple-50/40 border-r-4 border-purple-600 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-between group"
      >
        <div className="flex items-center gap-4">
          <div className="bg-purple-100 p-2.5 rounded-xl text-lg group-hover:scale-110 transition-transform">
            📚
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">{t('Dashbord.Notification.notif_new_lesson_title')}</h4>
            <p className="text-xs text-slate-500 mt-1">{t('Dashbord.Notification.notif_new_lesson_desc')}</p>
          </div>
        </div>
        <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-1 rounded-md shrink-0 mx-4">{t('Dashbord.Notification.time_today')}</span>
      </button>

      {/* اعلان سوم: تایید پرداخت */}
      <button 
        onClick={() => handleNotificationClick("payment_success")}
        className="w-full text-start bg-white hover:bg-emerald-50/40 border-r-4 border-emerald-500 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-between group"
      >
        <div className="flex items-center gap-4">
          <div className="bg-emerald-100 p-2.5 rounded-xl text-lg group-hover:scale-110 transition-transform">
            ✅
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">{t('Dashbord.Notification.notif_payment_success_title')}</h4>
            <p className="text-xs text-slate-500 mt-1">{t('Dashbord.Notification.notif_payment_success_desc')}</p>
          </div>
        </div>
        <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-1 rounded-md shrink-0 mx-4">{t('Dashbord.Notification.time_yesterday')}</span>
      </button>

    </div>
  );
}

export default Notifications;
