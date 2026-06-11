import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown, IoMdCheckmark } from "react-icons/io";
import { useTranslation } from "react-i18next";

export default function LanguageDropdown() {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const languages = [
        { code: "fa", label: "فارسی" },
        { code: "en", label: "English" }
    ];
    useEffect(() => {
    const savedLanguage = localStorage.getItem("i18nextLng");

    if (savedLanguage && savedLanguage !== i18n.language) {
        i18n.changeLanguage(savedLanguage);
        }
    }, []);

    const handleLanguageChange = (langCode) => {
        i18n.changeLanguage(langCode);
        setOpen(false);
    };

    return (
        <div className="relative flex items-center justify-center">
            <button onClick={() => setOpen(!open)}
                className="px-4 py-1 flex gap-2 items-center transition-all duration-300 hover:bg-black/25  bg-[#2C1747] border border-white  text-white rounded-md">
                
                {languages.find(l => l.code === i18n.language)?.label || "فارسی"}
                <IoMdArrowDropdown />
            </button>

            {open && (
                <div className="absolute top-10  bg-[#2C1747] border border-white text-white rounded-md w-28 z-50">
                    {languages.map((item) => (
                        <div
                            key={item.code}
                            onClick={() => handleLanguageChange(item.code)}
                            className="px-3 py-2 flex justify-between transition-all duration-300 hover:bg-black/25  rounded-md"
                        >
                            <span>{item.label}</span>
                            {i18n.language === item.code && <IoMdCheckmark />}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}