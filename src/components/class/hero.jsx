import React, { useState } from "react";
import Register from "./register";
import { Link } from "react-router-dom";
export default function ClassesHero() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <section className="min-h-[80vh] w-full flex items-center justify-center text-white px-6">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Explore The Universe With Us
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-8 mb-10">
            صنوف انجمن نجوم افغانستان فرصتی برای یادگیری نجوم،
            کیهان‌شناسی و تکنولوژی فضایی از سطح مقدماتی تا پیشرفته
            می‌باشد.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setOpenForm(true)}
              className="px-8
              py-4
              rounded-full
              bg-[linear-gradient(90deg,#D66BFF_0%,#B85CFF_50%,#8B5CF6_100%)]
              transition-all
              duration-300
              text-white
              font-semibold
              shadow-2xl
             justify-right"
            >
              Join Our Classes
            </button>
          </div>
        </div>
      </section>

      {/* فرم ثبت نام */}
      {openForm && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="relative">
            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded"
            >
              ✕
            </button>

            <Register />
          </div>
        </div>
      )}
    </>
  );
}