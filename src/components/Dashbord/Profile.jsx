import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; // ۱. وارد کردن هوک ترجمه
import EditProfileModal from './EditProfileModal'; 
import ChangePasswordModal from './ChangePasswordModal';

export default function Profile() {
  const { t } = useTranslation(); // ۲. مقداردهی تابع t برای ترجمه متون

  // وضعیت اطلاعات کاربر (میتوانید مقادیر پیش‌فرض یا اطلاعات دریافتی از سرور را بگذارید)
  const [user, setUser] = useState({
    name: 'احمد محمدی',
    course: 'دانشجوی دوره قرائت‌ایند',
    email: 'ahmad@gmail.com',
    phone: '0786655443',
    status: 'Active' // برای هماهنگی بهتر با منطق زبان، وضعیت به انگلیسی ذخیره و در کامپوننت ترجمه می‌شود
  });

  // وضعیت باز یا بسته بودن مودال ویرایش مشخصات
  const [isModalOpen, setIsModalOpen] = useState(false);

  // تعریف استیت برای باز یا بسته بودن مودال تغییر رمز عبور
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  // تابع ذخیره اطلاعات جدید پس از ویرایش
  const handleSaveProfile = (updatedData) => {
    setUser({ ...user, ...updatedData });
    setIsModalOpen(false); 
  };

  return (
    // حذف ویژگی direction ثابت برای مدیریت خودکار جهت صفحه
    <div style={{ padding: '20px', fontFamily: 'inherit' }}>
      
      {/* کارت مشخصات کاربر */}
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', maxWidth: '600px', margin: '0 auto', backgroundColor: '#f9f9f9', textAlign: 'start' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h2 style={{ margin: '0 0 5px 0', color: '#333' }}>{user.name}</h2>
            <p style={{ color: '#666', margin: '0 0 5px 0' }}>{user.course}</p>
            <p style={{ color: '#888', margin: '0' }}>{user.email}</p>
          </div>
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#6200ee', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
            {user.name ? user.name.charAt(0) : 'U'}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', borderTop: '1px solid #eee', paddingTop: '15px' }}>
          <div>
            <span style={{ color: '#999', display: 'block', fontSize: '12px' }}>{t('Dashbord.Profile.phone_label_profile')}</span>
            <span style={{ color: '#333' }}>{user.phone}</span>
          </div>
          <div>
            <span style={{ color: '#999', display: 'block', fontSize: '12px' }}>{t('Dashbord.Profile.account_status_label')}</span>
            <span style={{ color: user.status === 'Active' ? 'green' : 'orange' }}>
              ● {user.status === 'Active' ? t('Dashbord.Profile.inactive_status') : t('Dashbord.Profile.inactive_status')}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={() => setIsModalOpen(true)} 
            style={{ backgroundColor: '#6200ee', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontFamily: 'inherit' }}
          >
            {t('Dashbord.Profile.edit_profile_btn')}
          </button>
          <button 
            onClick={() => setIsPasswordModalOpen(true)} 
            style={{ backgroundColor: 'transparent', color: '#666', border: '1px solid #ccc', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontFamily: 'inherit' }}
          >
            {t('Dashbord.Profile.change_password_btn_profile')}
          </button>
        </div>
      </div>

      {/* نمایش مشروط مودال ویرایش */}
      {isModalOpen && (
        <EditProfileModal 
          currentUser={user} 
          onClose={() => setIsModalOpen(false)} 
          onSave={handleSaveProfile} 
        />
      )}

      {/* نمایش مشروط مودال تغییر رمز عبور */}
      {isPasswordModalOpen && (
        <ChangePasswordModal onClose={() => setIsPasswordModalOpen(false)} />
      )}

    </div>
  );
}
