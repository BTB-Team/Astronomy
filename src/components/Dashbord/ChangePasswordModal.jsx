import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // ۱. وارد کردن هوک ترجمه

export default function ChangePasswordModal({ onClose }) {
  const { t } = useTranslation(); // ۲. مقداردهی تابع t برای ترجمه متون

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // بررسی تطابق رمز عبور جدید و تکرار آن با استفاده از پیام‌های ترجمه‌شده
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert(t('Dashbord.ChangePasswordModal.password_match_error')); 
      return;
    }

    // عملیات اتصال به بک‌اند
    alert(t('Dashbord.ChangePasswordModal.Dashbord.ChangePasswordModal.Dashbord-password_success_message')); 
    onClose(); 
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
      <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '8px', width: '100%', maxWidth: '450px', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', fontFamily: 'inherit' }}>
        
        {/* ۳. جایگزینی تمام متون فارسی با تابع t */}
        <h3 style={{ marginTop: 0, marginBottom: '20px', color: '#333' }}>
          {t('Dashbord.ChangePasswordModal.Dashbord_change_password_title')}
        </h3>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ color: '#444', fontWeight: '500' }}>{t('Dashbord.ChangePasswordModal.Dashbord_current_password')}</label>
            <input type="password" name="currentPassword" value={passwordData.currentPassword} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', color: '#333', backgroundColor: '#fff', fontFamily: 'inherit' }} required />
          </div>
          
          <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ color: '#444', fontWeight: '500' }}>{t('Dashbord.ChangePasswordModal.Dashbord_new_password')}</label>
            <input type="password" name="newPassword" value={passwordData.newPassword} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', color: '#333', backgroundColor: '#fff', fontFamily: 'inherit' }} required />
          </div>
          
          <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ color: '#444', fontWeight: '500' }}>{t('Dashbord.ChangePasswordModal.Dashbord_confirm_new_password')}</label>
            <input type="password" name="confirmPassword" value={passwordData.confirmPassword} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', color: '#333', backgroundColor: '#fff', fontFamily: 'inherit' }} required />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
            <button type="button" onClick={onClose} style={{ backgroundColor: '#eee', color: '#333', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontFamily: 'inherit' }}>
              {t('Dashbord.ChangePasswordModal.password_buton')}
            </button>
            <button type="submit" style={{ backgroundColor: '#6200ee', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontFamily: 'inherit' }}>
              {t('Dashbord.ChangePasswordModal.password_btn')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
