import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import DashboardHome from "./DashboardHome";
import MyClasses from "./MyClasses.jsx";
import Payments from "./Payments";
import Notifications from "./Notifications";
import Profile from './Profile.jsx';
import { useTranslation } from "react-i18next";
function DashboardLayout() {
const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("dashboard");
  
  
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
    
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        setShowLogoutModal={setShowLogoutModal} 
      />

      <main className="flex-1 p-8">
        
        {activeTab === "dashboard" && <DashboardHome activeTab={activeTab} />}
        {activeTab === "classes" && <MyClasses activeTab={activeTab} />} 
        {activeTab === "payments" && <Payments activeTab={activeTab} />} 
        {activeTab === "notifications" && <Notifications activeTab={activeTab} />} 
        {activeTab==="profile"&&<Profile activeTab={activeTab} />}
        {showLogoutModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full text-center">
              <h3 className="font-bold text-lg mb-4 text-black">{t("Dashbord.dashboardLayout.logout_modal_title")}</h3>
              <div className="flex gap-3 justify-center">
                <button 
                  onClick={() => {
                    setShowLogoutModal(false);
                  }} 
                  className="bg-red-500 text-white px-4 py-2 rounded-xl"
                >
                  {t("Dashbord.dashboardLayout.logout_confirm")}
                </button>
                <button 
                  onClick={() => setShowLogoutModal(false)} 
                  className="border px-4 py-2 rounded-xl text-red-400 border-red-300 bg-white"
                >
                   {t("Dashbord.dashboardLayout.logout_cancel")}
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
