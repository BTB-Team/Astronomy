import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/NavBar/navBar";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
function App() {
     const { i18n } = useTranslation();
     useEffect(() => {
          const lang = i18n.language;
          document.documentElement.dir =
          lang === "fa" ? "rtl" : "ltr";
     }, [i18n.language]);


  return (
     <BrowserRouter>
      <div className="absolute w-[100%] top-[0%] left-[0%] 2x:w-[100%] 2xl:bg-[#4A3458]  border-box">
        < div style={{ background: "linear-gradient(135deg, #1A0B2E 0%, #2A1245 50%, #3B1D5C 100%)"}}
         className="relative overflow-x-hidden   mx-auto w-[100%] h-auto sm:w-[100%] sm:h-auto md:w-[100%] md:h-[100%] lg:w-[100%] lg:h-auto xl:w-[100%] xl:h-auto 2xl:w-[1366px] 2xl:h-auto  ">
          <Navbar />
          <div className="pt-[130px] md:pt-[140px]"> 
          <Routes>
               <Route path="/" element={<h1 className="text-white">صحفه اصلی</h1>} />
               <Route path="/about" element={<h1 className="text-white">درباره ما</h1>} />
               <Route path="/classes" element={<h1 className="text-white">کلاس‌ها</h1>} />
               <Route path="/blog" element={<h1 className="text-white">بلاگ</h1>} />
               <Route path="/contact" element={<h1 className="text-white">تماس</h1>} />
          </Routes>
          </div>
          </div>
     </div>
     </BrowserRouter>
  );
}

export default App;