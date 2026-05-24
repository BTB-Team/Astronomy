import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/NavBar/navBar";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home";
import ContactUs from "./pages/Contact";
import GalaxyBackground from "./components/GalaxyBackground";
import AuthLogin from "./pages/Login";
import Footer from "./components/Footer";

import About from "./Pages/About";
function App() {
     const { i18n } = useTranslation();
     useEffect(() => {
          const lang = i18n.language;
          document.documentElement.dir =
          lang === "fa" ? "rtl" : "ltr";
     }, [i18n.language]);


  return (
     <HashRouter>
      <div className="relative  w-[100%] top-[0%] left-[0%] 2x:w-[100%] 2xl:bg-[#4A3458]  border-box">
        <GalaxyBackground />
        < div  className="relative  h-auto sm:w-[100%] sm:h-auto md:w-[100%] md:h-[100%] lg:w-[100%] lg:h-auto xl:w-[100%] xl:h-auto w-full max-w-[1366px] mx-auto 2xl:h-auto  ">
          <Navbar />
          <div > 
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About/>} />
               <Route path="/classes" element={<h1 className="text-white">کلاس‌ها</h1>} />
               <Route path="/blog" element={<h1 className="text-white">بلاگ</h1>} />
               <Route path="/contact" element={<ContactUs/>} />
               <Route path="/login" element={<AuthLogin defaultMode="login"/>} />
               <Route path="/signup" element={<AuthLogin defaultMode="signup"/>} />
          </Routes>
          <Footer />
          </div>
          </div>
     </div>
     </HashRouter>
  );
}

export default App;