import React from 'react'

// متغیرها به عنوان پراپ ورودی گرفته شدند تا کد خطا ندهد
function MyClasses ({ activeTab, myCourses = [], setShowPaymentModal }) {
  return (
    <div>
      {activeTab === "classes" && (
        <div className="grid md:grid-cols-2 gap-6">
          {myCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-bold mb-3">
                {course.title}
              </h2>

              <p className="text-gray-600 mb-4">
                {course.description}
              </p>

              <div className="mb-4">
                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div
                    className="h-3 bg-purple-600 rounded-full"
                    style={{
                      width: course.progress,
                    }}
                  />
                </div>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  course.isPublic
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {course.isPublic ? "فعال" : "در انتظار پرداخت"}
              </span>

              <div className="flex gap-3 mt-5">
                <button className="bg-purple-600 text-purple-700 px-4 py-2 rounded-xl">
                  ورود به کلاس
                </button>

                <button className="border px-4 py-2 rounded-xl">
                  جزئیات
                </button>

                {!course.isPublic && (
                  <button
                    onClick={() => setShowPaymentModal(true)}
                    className="bg-green-600 text-purple-700 px-4 py-2 rounded-xl"
                  >
                    پرداخت
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MyClasses
