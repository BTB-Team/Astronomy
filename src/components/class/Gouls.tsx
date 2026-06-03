import React from "react";

export default function Goals() {
  return (
    <div className="w-full flex justify-center mt-16 px-4" dir="rtl">
      
      {/* کامپوننت خالص بدون عکس و بدون نقاط راهنما با گرادینت تیره مدرن */}
      <div className="w-full md:w-[85%] min-h-[500px] py-16 px-6 md:px-16 rounded-2xl relative overflow-hidden shadow-2xl transition-all duration-1000 ease-in-out bg-cover bg-center flex flex-col justify-center items-center text-center">
        
        {/* جلوه نوری بسیار ملایم روی پس‌زمینه */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>

        {/* محتوای متنی یکپارچه روی کارت */}
        <div className="relative z-10 max-w-4xl flex flex-col items-center">
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-amber-400 mb-6 tracking-wide drop-shadow-lg">
            اهداف ما
          </h2>

          <p className="text-white text-base md:text-lg font-medium leading-8 md:leading-9 drop-shadow-md text-justify md:text-center whitespace-pre-line">
            انجمن نجوم افغانستان با مأموریت ترویج دانش پژوهان و پرورش نسل نوین دانش‌پژوهان، نخستین گام‌های خود را از قلب کابل آغاز کرد. امروز، با نگاهی فرامرزی و آینده‌نگر، مصمم‌تر از همیشه در مسیر توسعه علوم و فناوری‌های فضایی گام برمی‌داریم. ما با طراحی دوره‌های آموزشی تخصصی (حضوری و آنلاین)، برپایی رصدهای علمی و هم‌افزایی با تیم‌های نخبگان، بر آنیم تا اشتیاق جوانان وطن به کیهان را به یک جریان علمی پویا، منسجم و اثرگذار بدل سازیم.
            {"\n\n"}
            هم‌اکنون با تکیه بر دو شعبه فعال آموزشی و پژوهشی در کابل، پروژه‌های پیشگامانه‌ای همچون آموزش مهندسی فضا، اصول ساخت موشک و طراحی ماهواره را در دست اجرا داریم. چشم‌انداز بلندمدت ما، تأسیس آزمایشگاه‌های پیشرفته فضایی و پیوند با شبکه‌های بین‌المللی است؛ کلید واژه‌ای برای صنعتی‌سازی علوم فضایی و خلق فرداهای روشن‌تر برای نسل پویای افغانستان.
          </p>

        </div>

      </div>
    </div>
  );
}
