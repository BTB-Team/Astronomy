import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 🌟 ۱. اضافه کردن ابزار ناوبری ری‌اکت

const Register = () => {
  const navigate = useNavigate(); // 🌟 ۲. تعریف شیء انتقال صفحه

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
    "مبانی نجوم و کیهان‌شناسی",
    "نجوم و کیهان‌شناسی تخصصی",
    "تکنالوژی فضایی و مهندسی فضا ",
   
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
      setError("رمز عبور و تاییدیه آن یکسان نیستند!");
      return;
    }

    // بررسی انتخاب دوره
    if (!formData.selectedCourse) {
      setError("لطفاً یک دوره آموزشی را انتخاب کنید.");
      return;
    }

    // ذخیره وضعیت کاربر در مرورگر
    localStorage.setItem("hasRegistered", "true");
    localStorage.setItem("userEmail", formData.email);

    console.log("داده‌ها با موفقیت ثبت شدند:", formData);
    alert("ثبت نام با موفقیت انجام شد!");
    
    // 🌟 ۳. انتقال خودکار کاربر به صفحه کلاس‌ها یا داشبورد
    // اگر آدرس صفحه کلاس‌های شما چیزی غیر از "/dashboard" است، آن را ویرایش کنید
    navigate("/dashboard"); 
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 mx-auto text-right" dir="rtl">
      <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
        فرم ثبت نام محصلین
      </h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 text-sm rounded-lg text-center font-medium">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 text-left" dir="ltr">
        <div>
          <label className="block text-sm font-semibold text-black mb-1">Full Name</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-black" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-600 mb-1">Username</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-black" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-black mb-1">Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-black" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-black mb-1">Phone Number</label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-black" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-semibold text-black mb-1">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-black" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-black mb-1">Confirm Password</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition text-black" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-black mb-1">Select Course</label>
          <select name="selectedCourse" value={formData.selectedCourse} onChange={handleChange} required 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black focus:ring-2 focus:ring-blue-500 focus:outline-none transition cursor-pointer">
            <option value="">-- Choose a Course --</option>
            {courses.map((course, index) => (
              <option key={index} value={course}>{course}</option>
            ))}
          </select>
        </div>

        <div className="pt-2">
          <button type="submit" 
            className="w-full py-3.5 rounded-full bg-[linear-gradient(90deg,#D66BFF_0%,#B85CFF_50%,#8B5CF6_100%)] transition-all duration-300 text-white font-semibold shadow-xl hover:opacity-90 active:scale-95 cursor-pointer">
            Register & Go to Classes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
