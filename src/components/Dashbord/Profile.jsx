import React from 'react'

function profile() {
  return (
    <div>
      {activeTab === "profile" && (

  <div className="bg-white rounded-3xl p-8 shadow">

    <div className="flex items-center gap-5">

      <div className="w-24 h-24 bg-purple-500 rounded-full" />

      <div>
        <h2 className="text-2xl font-bold">
          احمد محمدی
        </h2>

        <p>
          ahmad@example.com
        </p>
      </div>

    </div>

    <div className="mt-6 flex gap-3">

      <button className="bg-purple-600 text-purple-700 px-5 py-2 rounded-xl">
        ویرایش پروفایل
      </button>

      <button className="border px-5 py-2 rounded-xl">
        تغییر رمز عبور
      </button>

    </div>

  </div>

)}
    </div>
  )
}

export default profile