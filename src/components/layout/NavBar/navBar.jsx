import React, { useState,useEffect , useRef } from "react";
import { FaRegBell } from "react-icons/fa";
import { CiUser, CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import LanguageDropdown from "./languageDropdown";
import { useTranslation } from "react-i18next";
import SocialLinks from "./SocialLink";
import UserMenu from "./UserMenu";
import { Link, NavLink, useLocation } from "react-router-dom";
import NProgress from "nprogress"; 
import "nprogress/nprogress.css"; 

NProgress.configure({ 
    showSpinner: false, 
    speed: 900,        
    trickleSpeed: 300,
    parent: '#nprogress-container'  
});

export default function Navbar() {
    const { t ,  i18n } = useTranslation();
    const isRTL = i18n.language === "fa"
    const [openMenu, setOpenMenu] = useState(false);
    const location = useLocation(); 

    const handleNavigation = () => {
        NProgress.start();
        const timer = setTimeout(() => {
        NProgress.done();
        }, 1000);
    };
  
    const navLinks = [
        { key: "navBar.home", path: "/" },
        { key: "navBar.ourClass", path: "/classes" },
        { key: "navBar.media", path: "/media" },
        { key: "navBar.blog", path: "/blog" },
        { key: "navBar.about", path: "/about" },
        { key: "navBar.contact", path: "/contact" },
    ];

    return (
        <div className="w-full h-auto   sticky top-0 left-0 z-50">
     
            <style>{`
                .nprogress-custom-parent {
                    position: sticky !important; 
                }
                #nprogress-container {
                    position: absolute !important;
                    left: 0;
                    width: 100%;
                    top: 72px; 
                    z-index: 99999;
                    height: 4px;
                    pointer-events: none; 
                }
                #nprogress-container #nprogress .bar {
                    background: linear-gradient(to right, #531785, #7c3aed) !important;
                    height: 4px !important;
                    position: absolute !important;
                    width: 100% !important;
                    top: 0 !important;
                    left: 0 !important;
                }
                #nprogress-container #nprogress .peg {
                    display: none !important;
                }
            `}</style>
            <div id="nprogress-container"></div>

            {/* 🔹 NAVBAR MAIN */}
            <div className="flex items-center  justify-between px-4  lg:px-10 py-4 bg-[#2C1747] text-white">
                {/* LOGO */}
                <div className="flex gap-4 items-center">
                    <img src="/Astronomy/assets/logo.webp" className="w-10  " />
                    <div className="hidden md:flex">    <SocialLinks /></div>
                </div>
                {/* DESKTOP RIGHT */}
                <div className="flex items-center gap-5 text-sm">
                    <LanguageDropdown />
                    <span className="relative">
                        <FaRegBell size={22} />
                        <span className="absolute -top-2 -right-2 bg-red-500 text-xs px-1 rounded-full">
                            9+
                        </span>
                    </span>
                    <span className="hidden md:flex"><UserMenu/></span>
                    <button className={`md:hidden z-50 ${openMenu ?"fixed left-5 top-5" : "relative "}`} 
                    onClick={() => setOpenMenu(prev => !prev)}>
                        {openMenu ? (
                            <IoClose size={34} />
                        ) : (
                            <CiMenuBurger size={28} />
                        )}
                    </button>
                </div>
            </div>

            {/* 🔹 DESKTOP MENU */}
            <div className={`fixed  overflow-x-hidden w-full md overflow-y-hidden top-0 left-0 bg-black/40 backdrop-blur-sm flex-col justify-center  text-white h-screen md:relative flex  md:flex-row md:h-[59px] items-center md:justify-between px-14 md:px-5 lg:px-10 xl:px-14  md:bg-white md:text-black   ${openMenu ? "left-0 transition-all duration-300"  : "left-[-100%] md:left-0"}`} >
                <div className="flex gap-5">
                    <div className={`flex items-center text-center  gap-3 w-full absolute bottom-24 md:relative md:bottom-0 ${ isRTL ? "right-[30%]" : "left-[30%]"}`}>
                        <div className="md:hidden"><SocialLinks /></div>
                        <span className="md:hidden"><UserMenu /></span>
                    </div>
                </div>
                <ul className="flex flex-col gap-8 md:flex-row md:gap-4 lg:gap-11   ">
                    {navLinks.map((link, index) => (
                        <li key={index} className=" text-xl md:text-base text-white md:text-gray-500 font-normal transition-all duration-300 ease-out hover:text-black  hover:[text-shadow:0_2px_6px_rgba(0,0,0,0.4)]">
                            <NavLink to={link.path} onClick={() =>{ handleNavigation(); setOpenMenu(false)}}   className={({ isActive }) =>`relative pb-2 ${ isActive  ? "text-white md:text-gray-500  "   : "text-white md:text-gray-500"    }`  }>
                                   {({ isActive }) => (
                                   <>
                                        {t(link.key)}
                                        {isActive && (
                                            <span className="absolute left-0 -bottom-3 w-full bg-gradient-to-r from-[#D66BFF] via-[#B85CFF] to-[#8B5CF6] h-1"/>
                                       )}
                                    </>
                                    )}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <button style={{ background: "linear-gradient(90deg, #D66BFF 0%, #B85CFF 50%, #8B5CF6 100%)",}}
                    className="hidden md:inline transition-all duration-300 hover:bg-[#2C1747]   hover:shadow-lg  text-white px-5 py-2  md:text-[15px] lg:text-base rounded-lg  border-2 border-white hover:border-white "> 
                    <Link to="/contact">   {t("navBar.contact1")}</Link>
                </button>
            </div>
        </div>
    );
}
