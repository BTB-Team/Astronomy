import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import courses from "../../../data/data.jsx";
import Register from "../../../components/class/register.jsx"; 

export default function CourseDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [openForm, setOpenForm] = useState(false);
  
  // 🌟 وضعیت تشخیص شاگرد قدیمی از شاگرد جدید
  const [isRegistered, setIsRegistered] = useState(false);

  // بررسی وضعیت حافظه به محض لود شدن صفحه محتوا
  useEffect(() => {
    const registrationStatus = localStorage.getItem("hasRegistered");
    if (registrationStatus === "true") {
      setIsRegistered(true);
    }
  }, []);

  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return (
      <div className="text-center mt-20 text-2xl text-red-500">
        Course not found
      </div>
    );
  }

  // مدیریت کلیک شرطی روی دکمه گرادیانت
  const handleActionClick = () => {
    if (isRegistered) {
      // اگر قبلاً ثبت‌نام کرده، مستقیم برود به داشبورد سیستم پرداخت و دوره
      navigate("/dashboard"); 
    } else {
      // اگر اولین بار است، پاپ‌آپ باز شود
      setOpenForm(true);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-20 px-5" dir="rtl">
      {/* Image */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-[400px] object-cover rounded-xl shadow-md"
      />

      {/* Title */}
      <h1 className="text-4xl font-bold mt-10 text-white drop-shadow">
        {course.title}
      </h1>

      {/* Course Specifications */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
        <p className="text-white">
          <span className="font-bold text-white">⏱️ مدت زمان:</span> {course.content.duration}
        </p>
        {course.content.sessions && (
          <p className="text-white">
            <span className="font-bold text-white">📅 تعداد جلسات:</span> {course.content.sessions}
          </p>
        )}
        {course.content.level && (
          <p className="text-white">
            <span className="font-bold text-white">📊 سطح دوره:</span> {course.content.level}
          </p>
        )}
        {course.content.partner && (
          <p className="text-white">
            <span className="font-bold text-white">🤝 با همکاری:</span> {course.content.partner}
          </p>
        )}
        {course.content.certificate && (
          <p className="text-white md:col-span-2">
            <span className="font-bold text-white">📜 مدرک دوره:</span> {course.content.certificate}
          </p>
        )}
      </div>

      {/* Course Topics */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-white mb-4">📚 سرفصل‌های آموزشی:</h2>
        <ul className="list-disc list-inside space-y-2 text-white pr-4">
          {course.content.topics.map((topic, index) => (
            <li key={index} className="leading-7">
              {topic}
            </li>
          ))}
        </ul>
      </div>

      {/* 🌟 دکمه شرطی هوشمند بازنویسی‌شده */}
      <div className="flex justify-center mt-12">
        <button
          onClick={handleActionClick}
          className="px-10 py-4 rounded-full bg-[linear-gradient(90deg,#D66BFF_0%,#B85CFF_50%,#8B5CF6_100%)] transition-all duration-300 text-white font-semibold shadow-2xl hover:scale-105 transform text-lg cursor-pointer"
        >
          {isRegistered ? "Go to Dashboard " : "Join Our Classes "}
        </button>
      </div>

      {/* پاپ‌آپ (Modal) فرم ثبت نام */}
      {openForm && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4">
          <div className="bg-[#1a1625] border border-white/10 rounded-3xl p-6 relative max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-4 left-4 bg-red-500/20 hover:bg-red-500/40 text-red-400 w-8 h-8 rounded-full flex items-center justify-center transition"
            >
              ✕
            </button>
            <div className="mt-4">
              <Register />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
