import React from 'react'

function Notifications() {
  return (
    <div>
      {activeTab === "notifications" && (

  <div className="space-y-4">

    <div className="bg-white p-4 rounded-xl shadow text-purple-700">
      🔔 پرداخت ماهانه شما نزدیک است
    </div>

    <div className="bg-white p-4 rounded-xl shadow text-purple-700">
      📚 درس جدید منتشر شد
    </div>

    <div className="bg-white p-4 rounded-xl shadow text-purple-700">
      ✅ پرداخت شما تایید شد
    </div>

  </div>

)}
    </div>
  )
}

export default Notifications