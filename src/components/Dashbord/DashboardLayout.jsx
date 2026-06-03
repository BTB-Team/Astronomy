import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import DashboardHome from "./DashboardHome";
 import MyClasses from "./MyClasses.jsx";
 import Payments from "./Payments";
 import Notifications from "./Notifications";

function DashboardLayout() {
  // ۱. تعریف استیت تغییر تب‌ها
  const [activeTab, setActiveTab] = useState("dashboard");
  
  // ۲. اضافه کردن این استیت برای حل خطای فعلی (مدیریت مودال خروج)
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* پاس دادن درست پراپ‌ها به سایدبار */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        setShowLogoutModal={setShowLogoutModal} 
      />

      <main className="flex-1 p-8">
        {/* رندر شدن کامپوننت‌ها بر اساس تب فعال */}
        {activeTab === "dashboard" && <DashboardHome activeTab={activeTab} />}
        {/* {activeTab === "classes" && <MyClasses activeTab={activeTab} />} */}
        {/* سایر تب‌های شما مانند Payments و Notifications */}
        
        {/* ۳. در صورت نیاز، طراحی ظاهر مودال خروج در این بخش */}
        {showLogoutModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full text-center">
              <h3 className="font-bold text-lg mb-4 text-black">آیا قصد خروج دارید؟</h3>
              <div className="flex gap-3 justify-center">
                <button 
                  onClick={() => {
                    // عملیات خروج (مثلا پاک کردن توکن)
                    setShowLogoutModal(false);
                  }} 
                  className="bg-red-500 text-white px-4 py-2 rounded-xl"
                >
                  خروج
                </button>
                <button 
                  onClick={() => setShowLogoutModal(false)} 
                  className="border px-4 py-2 rounded-xl text-red-400 border-red-300 bg-white"
                >
                  انصراف
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default DashboardLayout;
