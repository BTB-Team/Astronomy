import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // ۱. وارد کردن هوک ترجمه

function PaymentModal({ isOpen, onClose }) {
  const { t } = useTranslation(); // ۲. مقداردهی تابع t برای ترجمه متون

  // مدیریت وضعیت فیلدهای فرم
  const [gateway, setGateway] = useState('AtomaPay');
  const [transactionId, setTransactionId] = useState('');
  const [receiptFile, setReceiptFile] = useState(null);

  // اگر مودال باز نباشد، چیزی رندر نمی‌شود
  if (!isOpen) return null;

  // تابع عملیات ارسال فرم
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // ساخت پلود دیتا برای ارسال به بک‌اند
    const formData = {
      gateway,
      transactionId,
      receiptFile
    };
    
    console.log("اطلاعات ارسال شد:", formData);
    alert(t('Dashbord.PaymentModal.payment_submit_success_alert')); // استفاده از پیام ترجمه‌شده برای آلرت
    
    // بستن مودال پس از ارسال موفق
    onClose();
  };

  return (
    // ویژگی dir="rtl" حذف شد تا بر اساس جهت زبان جاری سیستم کنترل شود
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      
      <div className="bg-white w-full max-w-lg p-6 rounded-2xl shadow-xl border border-slate-100 transform scale-100 transition-transform text-start">
        
        {/* هدر پاپ‌آپ */}
        <div className="flex justify-between items-center mb-5 border-b border-slate-100 pb-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <span>💳</span> {t('Dashbord.PaymentModal.payment_modal_header')}
          </h2>
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-slate-600 text-xl font-semibold"
          >
            ×
          </button>
        </div>

        {/* فرم ثبت اطلاعات */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* انتخاب درگاه */}
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1.5">{t('Dashbord.PaymentModal.select_gateway_label')}</label>
            <select 
              value={gateway}
              onChange={(e) => setGateway(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm focus:outline-none focus:border-purple-500 font-medium text-slate-800"
            >
              <option value="AtomaPay">AtomaPay</option>
              <option value="MTN MoMo">MTN MoMo</option>
            </select>
          </div>

          {/* شماره تراکنش */}
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1.5">{t('Dashbord.PaymentModal.transaction_id_label')}</label>
            <input
              type="text"
              required
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              placeholder={t('Dashbord.PaymentModal.transaction_id_placeholder')}
              className="w-full bg-slate-50 border border-slate-200 p-3 rounded-xl text-sm focus:outline-none focus:border-purple-500 text-start font-sans text-slate-800"
            />
          </div>

          {/* آپلود عکس رسید */}
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1.5">{t('Dashbord.PaymentModal.upload_receipt_label')}</label>
            <input
              type="file"
              required
              onChange={(e) => setReceiptFile(e.target.files[0])}
              // کلاس file:ml-4 یا file:mr-4 بر اساس جهت متن تغییر می‌کند تا ظاهر آپلودر به هم نریزد
              className="w-full text-xs text-slate-500 file:mx-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 border border-dashed border-slate-200 p-3 rounded-xl bg-slate-50 cursor-pointer"
            />
          </div>

          {/* دکمه‌های عملیاتی پایین فرم */}
          <div className="flex gap-3 pt-3 border-t border-slate-100 mt-6">
            
            <button 
              type="submit"
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-sm shadow-purple-100 transition-colors"
            >
              {t('Dashbord.PaymentModal.submit_for_review_btn')}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl text-xs font-semibold transition-colors"
            >
              {t('Dashbord.PaymentModal.cancel_and_close_btn')}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default PaymentModal;
