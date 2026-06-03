import React from 'react';

export default function MyClasses({ onOpenModal }) {
  const courses = [
    { id: 1, name: 'Basic Astronomy', level: 'Beginner', duration: '4 Weeks', status: 'Active' },
    { id: 2, name: 'Cosmology', level: 'Advanced', duration: '6 Weeks', status: 'Pending Payment' },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-6">کلاس‌های من (My Classes)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg text-gray-800">{course.name}</h3>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                  course.status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
                }`}>
                  {course.status === 'Active' ? 'Active' : 'Pending Payment'}
                </span>
              </div>
              <p className="text-gray-400 text-xs mt-2">Level: {course.level} | Duration: {course.duration}</p>
            </div>

            <div className="mt-6 flex gap-2">
              {course.status === 'Active' ? (
                <>
                  <button className="flex-1 bg-purple-600 text-white py-2 rounded-xl font-medium text-sm hover:bg-purple-700 transition">Enter Class</button>
                  <button className="flex-1 bg-gray-100 text-gray-600 py-2 rounded-xl font-medium text-sm hover:bg-gray-200 transition">View Details</button>
                </>
              ) : (
                <button onClick={onOpenModal} className="w-full bg-amber-500 text-white py-2 rounded-xl font-medium text-sm hover:bg-amber-600 transition">Pay Now</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
