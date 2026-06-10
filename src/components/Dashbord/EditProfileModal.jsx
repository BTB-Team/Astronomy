import React, { useState } from 'react'; 
import { useTranslation } from 'react-i18next'; // ۱. وارد کردن هوک ترجمه

export default function EditProfileModal({ currentUser, onClose, onSave }) {
  const { t } = useTranslation(); // ۲. مقداردهی تابع t برای ترجمه متون

  // تعریف استیت برای فیلدهای فرم بر اساس اطلاعات فعلی کاربر
  const [formData, setFormData] = useState({
    name: currentUser.name,
    course: currentUser.course,
    email: currentUser.email,
    phone: currentUser.phone,
  });

  // تابع به‌روزرسانی مقدار فیلدها هنگام تایپ کاربر
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // تابع فرستادن اطلاعات نهایی هنگام ثبت فرم
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
      <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '8px', width: '100%', maxWidth: '450px', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', fontFamily: 'inherit' }}>
        
        {/* ۳. استفاده از تابع t برای نمایش متون ترجمه‌شده */}
        <h3 style={{ marginTop: 0, marginBottom: '20px', color: '#333' }}>
          {t('Dashbord.EditProfileModal.edit_profile_title')}
        </h3>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ color: '#444', fontWeight: '500' }}>{t('Dashbord.EditProfileModal.full_name')}</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontFamily: 'inherit', color: '#333', backgroundColor: '#fff' }} required />
          </div>
          
          <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ color: '#444', fontWeight: '500' }}>{t('Dashbord.EditProfileModal.course_or_major')}</label>
            <input type="text" name="course" value={formData.course} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontFamily: 'inherit', color: '#333', backgroundColor: '#fff' }} required />
          </div>
          
          <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ color: '#444', fontWeight: '500' }}>{t('Dashbord.EditProfileModal.email_label')}</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontFamily: 'inherit', color: '#333', backgroundColor: '#fff' }} required />
          </div>
          
          <div style={{ marginBottom: '15px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ color: '#444', fontWeight: '500' }}>{t('Dashbord.EditProfileModal.phone_label')}</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontFamily: 'inherit', color: '#333', backgroundColor: '#fff' }} required />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
            <button type="button" onClick={onClose} style={{ backgroundColor: '#eee', color: '#333', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontFamily: 'inherit' }}>
              {t('Dashbord.EditProfileModal.cancel')}
            </button>
            <button type="submit" style={{ backgroundColor: '#6200ee', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontFamily: 'inherit' }}>
              {t('Dashbord.EditProfileModal.save_changes_btn')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
