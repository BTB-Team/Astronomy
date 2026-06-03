import React, { useState } from "react";


const DashboardHome = () => {
  // ۱. مدیریت وضعیت پاپ‌آپ‌ها و مدال‌ها
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("edit");

  // وضعیت فعال یا غیرفعال بودن (سوییچ‌های Public/Private طبق تصویر)
  const [courseStatus, setCourseStatus] = useState({
    1: true,  // Nest in Fashion (Public)
    2: false, // Digital Marketing Today (Private)
  });

  // ۲. اطلاعات کاربری مطابق با هدر تصویر
  const [userProfile, setUserProfile] = useState({
    fullName: "Firooz Danesh",
    username: "Danesh",
    email: "Danesh@gmail.com",
    phone: "0799123456",
    profileImage: "https://unsplash.com",
  });

  // ۳. داده‌های بخش Overview (کارت‌های رنگی آمار آیکون‌دار)
  const overviewStats = [
      // ۳. داده‌های بخش Overview (کارت‌های رنگی آمار با آیکون‌های مناسب آموزشی)
    
    { id: 2, label: "My classes", value: "77%", color: "bg-[#51368B]", icon: "📚" }, // آیکون کتاب برای کلاس‌ها
    { id: 3, label: "Payment", value: "Paid", color: "bg-[#D85E7D]", icon: "💳" },    // آیکون کارت بانکی برای پرداخت
    { id: 4, label: "My Profile", value: "Active", color: "bg-[#B5A5DB]", icon: "👤" }, // آیکون شخص برای پروفایل
  ];

  

 
  const myCourses = [
    { 
      id: 1, 
      title: "مبانی نجوم و کیهان‌شناسی", 
     description: "آشنایی با ساختار منظومه شمسی، مکانیزم ستارگان، جهت‌یابی در آسمان شب و اصطلاحات پایه‌ای اخترشناسی به زبان ساده و کاربردی.",

    
      // image: "/images/atom.png",
    },
    { 
      id: 2, 
      title: "نجوم و کیهان‌شناسی تخصصی", 
      description: "بررسی عمیق اخترفیزیک مدرن، فیزیک سیاه‌چاله‌ها، کیهان‌شناسی مهبانگ (Big Bang)، تحلیل نسبیت عام و اسرار ماده و انرژی تاریک.",
   
      // image: "/images/thredimage.webp",
    },
  ];

  // جابجایی وضعیت سوییچ (Public / Private)
  const toggleStatus = (id) => {
    setCourseStatus(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-[#FDF8EE] py-8 px-4 md:px-12" dir="ltr">
      
    
      <div className="max-w-6xl mx-auto bg-white rounded-[32px] shadow-xl border border-gray-100 min-h-[85vh] p-6 md:p-10">
        
 
        <header className="flex justify-between items-center mb-8 pb-4 border-b border-gray-50">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-6 bg-[#51368B] rounded-full flex items-center justify-center text-white text-xs font-bold">P</span>
              <span className="font-extrabold text-gray-900 text-lg">Astronomy</span>
            </div>
            <div className="text-left">
              <span className="text-gray-800 font-bold text-sm">Dashboard</span>
              <span className="text-gray-400 text-xs block mt-0.5">Monday, 02 March 2026</span>
            </div>
          </div>
          
         
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-gray-600 text-lg">✉️</button>
            <button className="text-gray-400 hover:text-gray-600 text-lg">🔔</button>
            <div 
              onClick={() => setIsProfileOpen(true)} 
              className="flex items-center gap-2 bg-gray-50 p-1.5 pr-4 rounded-full border border-gray-100 cursor-pointer hover:bg-gray-100 transition"
            >
              <div className="w-8 h-8 rounded-full bg-[#B5A5DB] flex items-center justify-center text-[#51368B] font-bold text-xs">AJ</div>
              <span className="text-xs font-bold text-gray-700 hidden sm:inline">{userProfile.fullName}</span>
              <span className="text-gray-400 text-xs">▼</span>
            </div>
          </div>
        </header>

     
        <section className="bg-[#EAE4F6] rounded-[24px] p-6 md:p-8 flex justify-between items-center mb-8 relative overflow-hidden">
          <div className="text-left z-10">
            <h2 className="text-3xl font-black text-[#2D1454] mb-2">Hi, {userProfile.fullName}</h2>
            <p className="text-[#51368B] text-sm font-medium">Welcome back to your astronomy dashboard!</p>
          </div>
          {/* <div className="text-5xl hidden md:block z-10">👩‍💻</div> */}
        </section>

        {/* بخش Overview شامل کارت‌های آمار رنگی */}
        <h3 className="text-sm font-bold text-gray-400 mb-4 text-left">Overview</h3>
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {overviewStats.map((stat) => (
            <div key={stat.id} className={`${stat.color} p-4 rounded-2xl text-white flex items-center justify-between shadow-sm`}>
              <div className="text-left">
                <span className="block text-2xl font-black">{stat.value}</span>
                <span className="text-xs opacity-90 font-medium">{stat.label}</span>
              </div>
              <span className="bg-white/20 p-2 rounded-xl text-lg">{stat.icon}</span>
            </div>
          ))}
        </section>

        {/* لیست ردیف‌های محتوا (کارت‌های پایین صفحه) */}
        <section className="space-y-4">
          {myCourses.map((course) => (
            <div key={course.id} className="bg-white p-5 rounded-2xl border border-gray-100 hover:shadow-md transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
              <div className="flex items-start gap-4 flex-1">
                {/* <img src={course.image} alt={course.title} className="w-16 h-16 rounded-xl object-cover bg-gray-50 border border-gray-100" /> */}
                <div>
                  <h4 className="font-bold text-gray-900 text-base">{course.title}</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed max-w-xl">{course.description}</p>
                  <span className="inline-block text-xs bg-gray-100 text-gray-500 font-semibold px-2 py-0.5 rounded mt-2">{course.slides}</span>
                </div>
              </div>
              
              {/* بخش سوییچ عمومی/خصوصی و دکمه‌های ویرایش کارت */}
              <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-4 sm:pt-0 border-t sm:border-t-0 border-gray-50">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-500">{courseStatus[course.id] ? "Public" : "Private"}</span>
                  <button 
                    onClick={() => toggleStatus(course.id)}
                    className={`w-10 h-5 flex items-center rounded-full p-0.5 transition-colors duration-300 ${courseStatus[course.id] ? "bg-[#51368B]" : "bg-gray-300"}`}
                  >
                    <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${courseStatus[course.id] ? "translate-x-5" : "translate-x-0"}`} />
                  </button>
                </div>
                {/* <div className="flex gap-3 text-gray-400"> */}
                  {/* <button onClick={() => setIsProfileOpen(true)} className="hover:text-blue-600 transition text-sm">✏️</button> */}
                  {/* <button className="hover:text-red-600 transition text-sm">🗑️</button> */}
                {/* </div> */}
              </div>
            </div>
          ))}
        </section>

      </div>

      {/* مدال پاپ‌آپ تنظیمات پروفایل کاربری */}
      {isProfileOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden border border-gray-100">
            <div className="bg-[#51368B] p-5 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span>👤</span>
                <h3 className="font-bold text-sm">Account Settings</h3>
              </div>
              <button onClick={() => setIsProfileOpen(false)} className="text-white hover:opacity-80 font-bold">✕</button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6 border-b border-gray-50 pb-4">
                <img src={userProfile.profileImage} alt="Profile" className="w-14 h-14 rounded-full border-2 border-[#51368B] object-cover" />
                <div>
                  <h4 className="font-bold text-gray-800">{userProfile.fullName}</h4>
                  <p className="text-xs text-gray-400">@{userProfile.username}</p>
                </div>
              </div>
              <div className="flex gap-2 border-b border-gray-100 pb-4 mb-4">
                <button onClick={() => setActiveTab("edit")} className={`flex-1 py-2 rounded-xl text-xs font-bold transition ${activeTab === "edit" ? "bg-[#51368B] text-white" : "bg-gray-100 text-gray-500"}`}>Edit Profile</button>
                <button onClick={() => setActiveTab("password")} className={`flex-1 py-2 rounded-xl text-xs font-bold transition ${activeTab === "password" ? "bg-[#51368B] text-white" : "bg-gray-100 text-gray-500"}`}>Password</button>
              </div>
              
              {activeTab === "edit" ? (
                <div className="space-y-3">
                  <input type="text" value={userProfile.fullName} onChange={(e) => setUserProfile({...userProfile, fullName: e.target.value})} className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none" placeholder="Full Name" />
                  <input type="text" value={userProfile.username} onChange={(e) => setUserProfile({...userProfile, username: e.target.value})} className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none" placeholder="Username" />
                  <input type="email" value={userProfile.email} onChange={(e) => setUserProfile({...userProfile, email: e.target.value})} className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none" placeholder="Email" />
                  <input type="text" value={userProfile.phone} onChange={(e) => setUserProfile({...userProfile, phone: e.target.value})} className="w-full p-2.5 bg-g
                  ray-50 border border-gray-200 rounded-xl text-xs focus:outline-none" placeholder="Phone Number" /> 
                  <button className="w-full bg-[#51368B] text-white py-2 rounded-xl font-bold text-sm hover:bg-[#2D1454] transition">Save Changes</button>
                </div>
              ) : (
                <div className="space-y-3">
                  <input type="password" placeholder="Current Password" className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none" />
                  <input type="password" placeholder="New Password" className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none" />
                  <input type="password" placeholder="Confirm New Password" className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none" />
                  <button className="w-full bg-[#51368B] text-white py-2 rounded-xl font-bold text-sm hover:bg-[#2D1454] transition">Change Password</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default DashboardHome;