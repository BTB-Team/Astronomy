import React, { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Navbar from "./components/layout/NavBar/navBar";
import GalaxyBackground from "./components/GalaxyBackground";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/Contact";
import AuthLogin from "./pages/Login";

import ClassesPage from "./pages/ourclass/[slug]/ourclass";
import CourseDetails from "./pages/ourclass/[slug]/CourseDetails";

import AstronomyBlog from "./pages/Blog/AstronomyBlog";
import PostDetails from "./pages/Blog/PostDetails";

import Dashboard from "./pages/Dashbord/dasbord";

// فقط اگر فایل وجود دارد
import Gouls from "./components/class/gouls";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir =
      i18n.language === "fa" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <HashRouter>
      <GalaxyBackground />

      <div className="relative w-full max-w-[1366px] mx-auto">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/classes/:slug" element={<CourseDetails />} />
          <Route path="/blog" element={<AstronomyBlog />} />
          <Route path="/blog/:id" element={<PostDetails />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<AuthLogin defaultMode="login" />} />
          <Route path="/signup" element={<AuthLogin defaultMode="signup" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gouls" element={<Gouls />} />
        </Routes>

        <Footer />
      </div>
    </HashRouter>
     <HashRouter>
      <div className="relative  w-[100%] top-[0%] left-[0%] 2x:w-[100%] 2xl:bg-[#4A3458]  border-box">
        <GalaxyBackground />
        < div  className="relative  h-auto sm:w-[100%] sm:h-auto md:w-[100%] md:h-auto lg:w-[100%] lg:h-auto xl:w-[100%] xl:h-auto w-screen max-w-[1366px] mx-auto 2xl:h-auto  ">
          <Navbar />
          <div > 
          <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About/>} />
               <Route path="/classes" element={<h1 className="text-white">کلاس‌ها</h1>} />
               <Route path="/blog" element={<AstronomyBlog/>} />
                <Route   path="/blog/:id"    element={<PostDetails/>}/>
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