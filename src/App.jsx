import React, { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DashboardLayout from "./components/Dashbord/dashboardLayout";

import PublicLayout from "./layouts/PublicLayout";
import GalaxyBackground from "./components/GalaxyBackground";

import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/Contact";
import AuthLogin from "./pages/Login";

import ClassesPage from "./pages/ourclass/[slug]/ourclass";
import CourseDetails from "./pages/ourclass/[slug]/CourseDetails";

import AstronomyBlog from "./pages/Blog/AstronomyBlog";
import PostDetails from "./pages/Blog/PostDetails";

import Dashboard from "./pages/Dashbord/dasbord";

import Gouls from "./components/class/gouls";

import BookDetails from "./Pages/Media/BookDetails";
import ReaderPage from "./Pages/Media/ReaderPage";
import Gallery from "./Pages/Media/Gallery";
import Media from "./pages/Media/Media";
import BooksPage from "./Pages/Media/Books";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir =
      i18n.language === "fa" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <HashRouter>
      <div className="relative  w-[100%]  top-[0%] left-[0%] 2x:w-[100%] 2xl:bg-white  border-box">
      <GalaxyBackground />
      <div className="relative w-full ">
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/media" element={<Media />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/books/:id" element={<BookDetails />} />
            <Route path="/read/:id" element={<ReaderPage />} />
            <Route path="/gallery/" element={<Gallery />} />
            <Route path="/classes/:slug" element={<CourseDetails />} />
            <Route path="/blog" element={<AstronomyBlog />} />
            <Route path="/blog/:id" element={<PostDetails />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<AuthLogin defaultMode="login" />} />
            <Route path="/signup" element={<AuthLogin defaultMode="signup" />} />
            <Route path="/gouls" element={<Gouls />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Dashbord" element={<DashboardLayout />} />
        </Routes>
      </div>
      </div>
    </HashRouter>
     
  );
}

export default App;