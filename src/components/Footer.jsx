import SocialLinks from "./layout/NavBar/SocialLink";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";

export default function Footer() {
    const { t  } = useTranslation();
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState({email: "",});
    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubscribe = async (e) => {
        e.preventDefault();
        let errorType = "";
        if (!email.trim()) {
            errorType = "required";
        } else if (!isValidEmail(email)) {
            errorType = "invalid";
        }

        setEmailError({ email: errorType });

        if (errorType) return;
        try {
            const response = await fetch("/api/newsletter/subscrib", {
                method: "POST",
                headers: { "Content-Type": "application/json",},
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                console.log("Email sent successfully");
                setEmail("")
            }else{
                console.log("Email sending failed");
            }
           
            } catch (error) {
                console.log("Email sent field please check your netWrok");
            }
        };

    return (
    <div className="relative overflow-hidden py-24 px-6 border-t-2 mt-10 border-[#4D2E73]">
        <div className="relative z-10  mx-auto  backdrop-blur-md rounded-sm px-10 py-14">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-around gap-10 ">
                <div className="grid grid-cols-2 gap-6 md:w-1/2 ">
                       {/* Explore */}
                   <div>
                        <h3 className="text-white font-semibold mb-5">{ t("footer.explore")}</h3>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li className="hover:text-white cursor-not-allowed"> <Link to="/"> {t("footer.home")}</Link></li>
                            <li className="hover:text-white cursor-not-allowed"> <Link to="/classes"> {t("footer.class")}</Link></li>
                            <li className="hover:text-white cursor-not-allowed"><Link to="/media"> {t("footer.media")}</Link></li>
                        </ul>
                    </div>
                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-5">{t("footer.company")}</h3>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li className="hover:text-white cursor-pointer"><Link to="/blog"> {t("footer.blog")}</Link></li>
                            <li className="hover:text-white cursor-pointer"><Link to="/about"> {t("footer.aboutUs")}</Link></li>
                            <li className="hover:text-white cursor-pointer"><Link to="/contact"> {t("footer.contactUs")}</Link></li>
                        </ul>
                    </div>
                </div>
               {/* 🔹 Subscribe Bottom */}
                <form   onSubmit={handleSubscribe} noValidate className="w-full  md:w-[350px] ">
                    <h3 className="text-white font-semibold mb-5"> {t("footer.subscribe")}</h3>
                    <div className="flex gap-2 w-full">
                        <div className="w-full">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) =>{ setEmail(e.target.value);  setEmailError({ email: "" }); } }
                          placeholder={t("footer.emailPlaceholder")}
                          className="w-full bg-white  text-black px-4 py-3 rounded outline-none placeholder:text-gray-400 autofill:shadow-[0_0_0_30px_#25103C_inset] autofill:[-webkit-text-fill-color:white]"
                        />
                        {emailError.email && (<p className="text-red-500 text-xs mt-1">     {emailError.email === "required"  ? t("footer.emailRequired")  : t("footer.emailInvalid")} </p>)}
                        </div>
                        <button   type="submit"  className=" bg-[linear-gradient(90deg,#D66BFF_0%,#B85CFF_50%,#8B5CF6_100%)] text-white px-3 h-12 rounded transition">  {t("footer.button")}</button>
                    </div>
               </form>
            </div>
            {/* Divider */}
            <div className="border-t border-[#4D2E73] my-10"></div>
                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Social Icons */}
                    <div className="flex gap-4"><SocialLinks /> </div>
                </div>
            </div>
      
           </div>
       );
    }