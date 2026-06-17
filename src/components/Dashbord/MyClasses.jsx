import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // ۱. وارد کردن هوک ترجمه

export default function MyClasses() {
  const { t } = useTranslation(); // ۲. مقداردهی تابع t برای ترجمه متون

  // آرایه داده‌های اولیه (تغییر کلیدهای متنی به شناسه ترجمه)
  const initialCourses = [
    {
      id: 1,
      nameKey: 'Dashbord.MyClasses.course_1_title',
      level: 'Advanced',
      durationKey: 'Dashbord.MyClasses.course_1_duration',
      progress: 65,
      status: 'Active',
    },
    {
      id: 2,
      nameKey: 'Dashbord.MyClasses.course_2_title',
      level: 'Beginner',
      durationKey: 'Dashbord.MyClasses.course_2_duration',
      progress: 0,
      status: 'Pending Payment',
    },
    {
      id: 3,
      nameKey: 'Dashbord.MyClasses.course_3_title',
      level: 'Advanced',
      durationKey: 'Dashbord.MyClasses.course_3_duration',
      progress: 100,
      status: 'Completed',
    },
  ];

  const [courses, setCourses] = useState(initialCourses);
  const [selectedCourse, setSelectedCourse] = useState(null); 
  const [filter, setFilter] = useState('All'); 

  const filteredCourses = courses.filter((course) => {
    if (filter === 'All') return true;
    return course.status === filter;
  });

  const handlePaymentConfirm = (id) => {
    setCourses(
      courses.map((c) => (c.id === id ? { ...c, status: 'Active' } : c))
    );
    setSelectedCourse(null);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fd] p-6 text-slate-800 font-sans">
      {/* هدر صفحه */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="text-start">
          <h1 className="text-2xl font-bold text-slate-900">{t('Dashbord.MyClasses.my_classes_header')}</h1>
          <p className="text-sm text-slate-500 mt-1">{t('Dashbord.MyClasses.my_classes_subtitle')}</p>
        </div>

        {/* فیلترهای بالا */}
        <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-xl border border-slate-100 shadow-sm">
          {['All', 'Active', 'Pending Payment', 'Completed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filter === status
                  ? 'bg-[#6366f1] text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
              }`}
            >
              {status === 'All' && t('Dashbord.MyClasses.status_all')}
              {status === 'Active' && t('Dashbord.MyClasses.status_active')}
              {status === 'Pending Payment' && t('Dashbord.MyClasses.status_pending')}
              {status === 'Completed' && t('Dashbord.MyClasses.status_completed')}
            </button>
          ))}
        </div>
      </div>

      {/* شبکه کارت‌ها (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between text-start"
          >
            <div>
              <div className="flex justify-between items-start gap-2 mb-3">
                <h3 className="text-base font-bold text-slate-900 leading-snug">{t(course.nameKey)}</h3>
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-md uppercase tracking-wider shrink-0 ${
                    course.level === 'Advanced'
                      ? 'bg-purple-50 text-purple-600'
                      : 'bg-blue-50 text-blue-600'
                  }`}
                >
                  {course.level === 'Advanced' ? t('Dashbord.MyClasses.level_advanced') : t('Dashbord.MyClasses.level_beginner')}
                </span>
              </div>

              {/* مدت زمان و وضعیت */}
              <div className="flex items-center justify-between text-xs text-slate-500 mb-5">
                <span className="flex items-center gap-1">
                  🕒 {t(course.durationKey)}
                </span>

                <span
                  className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${
                    course.status === 'Active' && 'bg-emerald-50 text-emerald-600'
                  } ${
                    course.status === 'Pending Payment' && 'bg-amber-50 text-amber-600'
                  } ${
                    course.status === 'Completed' && 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {course.status === 'Active' && `● ${t('Dashbord.MyClasses.status_active')}`}
                  {course.status === 'Pending Payment' && `● ${t('Dashbord.MyClasses.status_pending')}`}
                  {course.status === 'Completed' && `● ${t('Dashbord.MyClasses.status_completed')}`}
                </span>
              </div>
            </div>

            {/* بخش نوار پیشرفت */}
            <div className="mb-6">
              {course.status !== 'Pending Payment' ? (
                <div>
                  <div className="flex justify-between text-xs font-medium text-slate-600 mb-1.5">
                    <span>{t('Dashbord.MyClasses.progress_label')}</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#6366f1] h-full transition-all duration-500"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              ) : (
                <div className="bg-slate-50 border border-dashed border-slate-200 rounded-xl p-3 text-center text-xs text-slate-400">
                  {t('Dashbord.MyClasses.locked_course_hint')}
                </div>
              )}
            </div>

            {/* دکمه‌های عملیاتی کارت */}
            <div className="flex items-center gap-3 mt-auto">
            
              {course.status === 'Pending Payment' ? (
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="flex-1 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-semibold shadow-sm shadow-amber-100 transition-colors"
                >
                  {t('Dashbord.MyClasses.pay_online_btn')} 💳
                </button>
              ) : (
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="flex-1 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-semibold shadow-sm shadow-amber-100 transition-colors"
                >
                  {t('Dashbord.MyClasses.pay_online_btn')} 💳 
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* پاپ‌آب پرداخت آنلاین */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-100 transform scale-100 transition-transform text-start">
            <h3 className="text-lg font-bold text-slate-900 mb-2">{t('Dashbord.MyClasses.payment_modal_title')}</h3>
            <p className="text-xs text-slate-500 mb-4">{t('Dashbord.MyClasses.payment_modal_desc')}</p>

       
                {/* بخش داینامیک باکس اطلاعات کلاس انتخاب شده */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
              {/* نام کلاس داینامیک */}
              <div className="text-sm font-bold text-slate-800">
                {selectedCourse.nameKey ? t(selectedCourse.nameKey) : ''}
              </div>
              {/* مدت زمان کلاس داینامیک */}
              <div className="text-xs text-slate-400 mt-1">
                {t('Dashbord.MyClasses.duration_label')}: {selectedCourse.durationKey ? t(selectedCourse.durationKey) : ''}
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setSelectedCourse(null)}
                className="px-4 py-2 text-slate-500 hover:bg-slate-50 rounded-xl text-xs font-semibold transition-colors"
              >
                {t('Dashbord.MyClasses.cancel_and_close_btn')}
              </button>
              <button
                onClick={() => handlePaymentConfirm("Dashbord.MyClasses.selectedCourse.id")}
                className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-semibold transition-colors"
              >
                {t('Dashbord.MyClasses.confirm_payment_btn')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
