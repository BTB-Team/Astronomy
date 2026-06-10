import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // ۱. وارد کردن هوک ترجمه
import PaymentModal from './PaymentModal'; 

function Payments() {
  const { t } = useTranslation(); // ۲. مقداردهی تابع t برای ترجمه متون
  
  // مدیریت وضعیت باز و بسته بودن پاپ‌آب پرداخت
  const [showModal, setShowModal] = useState(false);

  return (
    // حذف ویژگی dir="rtl" برای مدیریت خودکار جهت صفحه
    <div className="max-w-4xl mx-auto p-4 space-y-6 text-start">
      
      {/* کارت وضعیت پرداخت */}
      <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl shadow-sm">
        
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">⚠️</span>
          <h2 className="font-bold text-amber-800 text-base">
            {t('Dashbord.Payment.payment_status_title')}
          </h2>
        </div>

        <div className="space-y-1.5 text-sm text-slate-700 font-medium">
          <p>
            {t('Dashbord.Payment.course_amount_label')}: <span className="font-bold font-sans text-slate-900">1,000 AFN</span>
          </p>
          <p>
            {t('Dashbord.Payment.status_label')}: <span className="text-amber-600 font-bold">{t('Dashbord.Payment.status_pending')}</span>
          </p>
        </div>

        {/* دکمه باز کردن پاپ‌آپ */}
        <button
          onClick={() => setShowModal(true)}
          className="mt-5 bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-sm shadow-amber-100 transition-colors"
        >
          {t('Dashbord.Payment.pay_now_btn')} 💳
        </button>

      </div>

      {/* فراخوانی کامپوننت پاپ‌آپ */}
      <PaymentModal isOpen={showModal} onClose={() => setShowModal(false)} />

    </div>
  );
}

export default Payments;
