import React from "react";
import SocialLinks from "./layout/NavBar/SocialLink";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t  } = useTranslation();
    return (
    <div className="relative overflow-hidden py-24 px-6 border-t-2 mt-10 border-[#4D2E73]">
        <div className="relative z-10 max-w-6xl mx-auto  backdrop-blur-md rounded-sm px-10 py-14">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-around gap-10 ">
                <div className="grid grid-cols-3 gap-6 md:w-1/2">
                    <div>
                        <h3 className="text-white font-semibold mb-5">{ t("footer.legal")}</h3>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li className="hover:text-white cursor-not-allowed"> {t("footer.terms")}</li>
                            <li className="hover:text-white cursor-not-allowed"> {t("footer.privacy")}</li>
                            <li className="hover:text-white cursor-not-allowed">{t("footer.cookies")}</li>
                        </ul>
                    </div>
                    {/* Information */}
                    <div>
                        <h3 className="text-white font-semibold mb-5">{t("footer.information")}</h3>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li className="hover:text-white cursor-not-allowed">{t("footer.faq")}</li>
                            <li className="hover:text-white cursor-pointer"><Link to="/blog"> {t("footer.blog")}</Link></li>
                            <li className="hover:text-white cursor-not-allowed">{t("footer.support")}</li>
                        </ul>
                    </div>
                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-5">{t("footer.company")}</h3>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li className="hover:text-white cursor-pointer"><Link to="/about">{t("footer.aboutUs")}</Link></li>
                            <li className="hover:text-white cursor-not-allowed">{t("footer.careers")}</li>
                            <li className="hover:text-white cursor-pointer"> <Link to="/contact">{t("footer.contactUs")}</Link> </li>
                        </ul>
                    </div>
                </div>
               {/* 🔹 Subscribe Bottom */}
                <div className="w-full  md:w-[300px]">
                    <h3 className="text-white font-semibold mb-5"> {t("footer.subscribe")}</h3>
                    <input
                      type="email"
                      placeholder={t("footer.emailPlaceholder")}
                      className="w-full bg-white text-black px-4 py-3 rounded outline-none"
                    />
               </div>
            </div>
            {/* Divider */}
            <div className="border-t border-[#4D2E73] my-10"></div>
                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Links */}
                    <div className="flex gap-8 text-sm text-gray-300">
                        <p className="hover:text-white cursor-not-allowed"> {t("footer.bottomTerms")}</p>
                        <p className="hover:text-white cursor-not-allowed">{t("footer.privacy")}</p>
                        <p className="hover:text-white cursor-not-allowed">{t("footer.bottomCookies")}</p>
                    </div>
                    {/* Social Icons */}
                    <div className="flex gap-4"><SocialLinks /> </div>
                </div>
            </div>
      
           </div>
       );
    }