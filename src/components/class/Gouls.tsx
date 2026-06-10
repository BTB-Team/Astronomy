import React from "react";
import { useTranslation } from "react-i18next";
export default function Goals() {
   const { t } = useTranslation();
  return (
    <div className="w-full flex justify-center mt-16 px-4" dir="rtl">
      
      {/* کامپوننت خالص بدون عکس و بدون نقاط راهنما با گرادینت تیره مدرن */}
      <div className="w-full md:w-[85%] min-h-[500px] py-16 px-6 md:px-16 rounded-2xl relative overflow-hidden shadow-2xl transition-all duration-1000 ease-in-out bg-cover bg-center flex flex-col justify-center items-center text-center">
        
        {/* جلوه نوری بسیار ملایم روی پس‌زمینه */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>

        {/* محتوای متنی یکپارچه روی کارت */}
        <div className="relative z-10 max-w-4xl flex flex-col items-center">
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-amber-400 mb-6 tracking-wide drop-shadow-lg">
         {t("class.Goals.h1")}
          </h2>

          <p className="text-white text-base md:text-lg font-medium leading-8 md:leading-9 drop-shadow-md text-justify md:text-center whitespace-pre-line">
           {t("class.Goals.p")}
          </p>

        </div>

      </div>
    </div>
  );
}
