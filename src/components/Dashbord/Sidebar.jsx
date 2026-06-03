import React from 'react'

// تمام متغیرها و توابع مورد نیاز به عنوان پراپ (Props) دریافت شدند
function Sidebar({ activeTab, setActiveTab, setShowLogoutModal }) {
  return (
    <div>
      <nav className="space-y-2">

        <button
          onClick={() => setActiveTab("dashboard")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-black ${
            activeTab === "dashboard"
              ? "bg-purple-100 text-purple-700"
              : "hover:bg-gray-50"
          }`}
        >
          🏠 داشبورد
        </button>

        <button
          // onClick={() => setActiveTab("classes")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-black ${
            activeTab === "classes"
              ? "bg-purple-100 text-purple-700"
              : "hover:bg-gray-50"
          }`}
        >
          📚 کلاس‌های من
        </button>

        <button
          // onClick={() => setActiveTab("payments")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-black ${
            activeTab === "payments"
              ? "bg-purple-100 text-purple-700"
              : "hover:bg-gray-50"
          }`}
        >
          💳 پرداختی‌ها
        </button>

        <button
          // onClick={() => setActiveTab("notifications")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-black ${
            activeTab === "notifications"
              ? "bg-purple-100 text-purple-700"
              : "hover:bg-gray-50"
          }`}
        >
          🔔 اعلان‌ها
          <span className="mr-auto bg-red-500 text-black text-xs px-2 py-1 rounded-full">
            3
          </span>
        </button>

        <button
          // onClick={() => setActiveTab("profile")}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-black ${
            activeTab === "profile"
              ? "bg-purple-100 text-purple-700"
              : "hover:bg-gray-50"
          }`}
        >
          👤 پروفایل
        </button>

        <button
           onClick={() => setShowLogoutModal(true)}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 text-red-500"
        >
          🚪 خروج
        </button>

      </nav>
    </div>
  )
}

export default Sidebar
