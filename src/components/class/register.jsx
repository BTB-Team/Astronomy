import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 🌟 ۱. اضافه کردن ابزار ناوبری ری‌اکت
import { useTranslation } from "react-i18next";

const Register = () => {
  const navigate = useNavigate(); // 🌟 ۲. تعریف شیء انتقال صفحه
    const { t,i18n } = useTranslation(); 

  // استیت برای ذخیره اطلاعات فرم
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    selectedCourse: "",
  });

  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState("");

  // لیست دوره‌های آموزشی
 const courses = [
    { id: "course1", label: t("class.register.courses.astronomy_basic") },
    { id: "course2", label: t("class.register.courses.astronomy_advanced") },
    { id: "course3", label: t("class.register.courses.space_tech") },
  ];

  // مدیریت تغییرات ورودی‌های متنی
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // مدیریت آپلود عکس پروفایل
  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  // مدیریت ارسال فرم و هدایت به صفحه کلاس‌ها
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // بررسی یکسان بودن رمز عبور
      if (formData.password !== formData.confirmPassword) {
      setError(t("class.register.errors.passMismatch"));
      return;
    }

    if (!formData.selectedCourse) {
      setError(t("class.register.errors.noCourse"));
      return;
    }

    localStorage.setItem("hasRegistered", "true");
    localStorage.setItem("userEmail", formData.email);

    console.log("داده‌ها با موفقیت ثبت شدند:", formData);
    alert(t("class.register.errors.success"));
    
    navigate("/dashboard"); 
  };


  return (
    // ۵. تبدیل dir استاتیک به i18n.dir() جهت تغییر هوشمند راست‌چین/چپ‌چین
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 mx-auto" dir={i18n.dir()}>
      <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
        {t("class.register.title")}
      </h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 text-sm rounded-lg text-center font-medium">
          {error}
        </div>
      )}

      {/* ۶. تنظیم هماهنگ فرم بر اساس جهت کل زبان پروژه */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">{t("class.register.fullName")}</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-black" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">{t("class.register.username")}</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-black" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">{t("class.register.email")}</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-black" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">{t("class.register.phone")}</label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-black" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">{t("class.register.password")}</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-black" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">{t("class.register.confirmPassword")}</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-black" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">{t("class.register.selectCourse")}</label>
          <select name="selectedCourse" value={formData.selectedCourse} onChange={handleChange} required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-500 focus:outline-none transition cursor-pointer">
            <option value="">{t("class.register.chooseCourse")}</option>
            {/* رندر هوشمند آپشن‌ها بر اساس دیتای ترجمه‌شده */}
            {courses.map((course) => (
              <option key={course.id} value={course.id}>{course.label}</option>
            ))}
          </select>
        </div>

        <div className="pt-2">
          <button type="submit" 
            className="w-full py-3.5 rounded-full bg-[linear-gradient(90deg,#D66BFF_0%,#B85CFF_50%,#8B5CF6_100%)] transition-all duration-300 text-white font-semibold shadow-xl hover:opacity-90 active:scale-95 cursor-pointer">
            {t("class.register.submitBtn")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
