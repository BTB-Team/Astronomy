import React, { useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import PageTitle from '../components/pagetitle';

const ContactUs = () => {
    const { t ,i18n} = useTranslation();
    const isRTL = i18n.language === "fa"
    const [focusedField, setFocusedField] = useState({  fullName: false, email: false, message: false });
    const [form, setForm] = useState({ fullName: "", email: "", message: "",});
    const [errors, setErrors] = useState({    fullName: "", email: "",message: "",});

    const changeValue = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };
    const handleFocus = (field) => setFocusedField({ ...focusedField, [field]: true });
    const handleBlur = (field) => setFocusedField({ ...focusedField, [field]: false });

    const isFloating = (field) => focusedField[field] || form[field].length > 0;
    const isValidEmail = (email) => { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);};
      
    const handleSubmit = async (e) => {
        e.preventDefault();
        let valid = true;
        const errors = {};

        if (!form.fullName) {
            errors.fullName ="required";
            valid = false;
        }

        if (!form.email || !isValidEmail(form.email)) {
            errors.email =  "error";
            valid = false;
        }

        if (!form.message) {
            errors.message = "required";
            valid = false;
        }
        setErrors(errors);
        if (!valid) return;

        const requestData = {
            fullName: form.fullName,
            email: form.email,
            message: form.message,
        };
        try {
			const response = await fetch('https://typicode.com', {
                method: "POST", 
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(requestData)
			})
			
		    if (response.ok) {
                alert(' Message Sent');
                setForm({ fullName: '', email: '', message: '' });
            } else {
                alert(' Error Occurred, Message Not Sent');
            }
        } catch(error) {
            alert(' Network Error: Message Not Sent');
            
        }
    };

    return (
    <div className="min-h-screen w-full flex items-center  justify-center p-4 sm:p-6 md:p-10 ">
        <PageTitle title="titles.contact"/>
        <div className="w-full max-w-6xl overflow-hidden  p-6 sm:p-10 md:p-14  flex flex-col gap-8  backdrop-blur-sm">
            <h1 className={`text-white text-4xl sm:text-5xl text-center md:text-6xl font-normal tracking-tight `}>{t("contact.title")} </h1>
            <div className="w-full border-t border-l border-white/20 pt-8 pl-8 flex flex-col lg:flex-row gap-12 lg:gap-8">
                <div className="flex-[1.5] w-full flex flex-col justify-between gap-8">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                        {/* Full Name */}
                        <div className="relative">
                            <input type="text" 
                             value={form.fullName} 
                             name="fullName"  
                             onChange={changeValue}
                             onFocus={() => handleFocus('fullName')}   
                             onBlur={() => handleBlur('fullName')}
                             className="w-full p-4 rounded-xl border-2 border-white/20  bg-[#2C1747]/40 backdrop-blur-sm text-white outline-none transition-all duration-300  focus:border-[#B85CFF] autofill:outline-none  autofill:border-[#56416A] autofill:shadow-[0_0_0_30px_#25103C_inset] [&-webkit-text-fill-color:white]! [-webkit-text-fill-color:white] autofill:backdrop-blur-sm "
                            />
                            <label className={`absolute ${isRTL ? "right-4" : "left-4"} px-2 transition-all  duration-300 pointer-events-none text-white/50 
                                ${isFloating('fullName') 
                                    ? '-top-2.5 text-xs text-[#D66BFF] bg-[#25103C] rounded font-semibold' : 'top-4 text-base'
                                }`}
                            >
                                {t("contact.fullName")}
                            </label>
                            {errors.fullName && (<p className="text-red-500 text-xs mt-1 mx-3"> {t("contact.nameError")} </p>)}
                        </div>
                       {/*E-mail */}
                        <div className="relative">
                            <input 
                             type="email" 
                             name="email"
                             value={form.email}
                             onFocus={() => handleFocus('email')}
                             onBlur={() => handleBlur('email')}
                             onChange={changeValue}
                             className="w-full p-4 rounded-xl border-2 border-white/20   bg-[#2C1747]/40 backdrop-blur-sm text-white outline-none transition-all duration-300 focus:border-[#B85CFF] autofill:outline-none  autofill:border-[#56416A]  autofill:shadow-[0_0_0_30px_#25103C_inset] [&-webkit-text-fill-color:white]! [-webkit-text-fill-color:white]  "
                            />
                            <label 
                              className={`absolute ${isRTL ? "right-4" : "left-4"} px-2 transition-all duration-300 pointer-events-none text-white/50 
                               ${isFloating('email') 
                                 ? '-top-2.5 text-xs text-[#D66BFF] bg-[#25103C] rounded font-semibold' 
                                 : 'top-4 text-base'
                               }`}
                            >
                                {t("contact.email")}
                            </label>
                            {errors.email && (<p className="text-red-500 text-xs mt-1 mx-3">{t("contact.emailError")} </p>)}
                        </div>
                        {/* فیلد Message */}
                        <div className="relative">
                            <textarea 
                              rows="4" 
                              name="message"
                              value={form.message}
                              onFocus={() => handleFocus('message')}
                              onBlur={() => handleBlur('message')}
                              onChange={changeValue}
                              className="w-full p-4 rounded-xl border-2 border-white/20  bg-[#2C1747]/40 backdrop-blur-sm text-white outline-none resize-none transition-all duration-300 focus:border-[#B85CFF]"
                            />
                            <label 
                              className={`absolute ${isRTL ? "right-4" : "left-4"} px-2 transition-all duration-300 pointer-events-none text-white/50 
                                ${isFloating('message') 
                                  ? '-top-2.5 text-xs text-[#D66BFF] bg-[#25103C] rounded font-semibold' 
                                  : 'top-4 text-base'
                                }`}
                            >
                                {t("contact.message")}
                            </label>
                            {errors.message && (<p className="text-red-500 text-xs mt-1 mx-3"> {t("contact.messageError")} </p>)}
                        </div>
                       <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-white/10">
                            <button type="submit"
                              className="w-full sm:w-auto px-10 py-3 rounded-full text-white font-bold uppercase tracking-wider bg-[linear-gradient(90deg,#D66BFF_0%,#B85CFF_50%,#8B5CF6_100%)] shadow-[0_8px_25px_rgba(184,92,255,0.25)] transition-all duration-300 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98]">
                                {t("contact.submit")}
                           </button>
                        </div>
                    </form>
                </div>
                <div className="flex-1 w-full flex items-center justify-center relative min-h-[300px] lg:min-h-full rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden">
                    <div className="absolute w-60 h-60 rounded-full bg-[#8B5CF6]/20 blur-[80px] top-1/4 left-1/4 animate-pulse"></div>
                    <div className="absolute w-40 h-40 rounded-full bg-[#D66BFF]/15 blur-[60px] bottom-1/4 right-1/4"></div>
            
                    <svg className="w-64 h-64 sm:w-80 sm:h-80 drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]" viewBox="0 0 200 200" fill="none" xmlns="w3.org">
                        <ellipse cx="100" cy="100" rx="85" ry="35" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="4 4" transform="rotate(-15 100 100)" />
                        <ellipse cx="100" cy="100" rx="60" ry="22" stroke="rgba(214,107,255,0.3)" strokeWidth="2" transform="rotate(10 100 100)" />
              
                        <circle cx="100" cy="100" r="28" fill="url(#planetGradient)" />
                        <path d="M65 105 C 75 115, 125 115, 135 105" stroke="#D66BFF" strokeWidth="3" strokeLinecap="round" />
                        <path d="M68 102 C 76 96, 124 96, 132 102" stroke="#8B5CF6" strokeWidth="2" strokeOpacity="0.5" />

                        <path d="M100 72 L100 55" stroke="#white" strokeWidth="2" strokeLinecap="round" />
                        <circle cx="100" cy="52" r="4" fill="#D66BFF" className="animate-ping" style={{ transformOrigin: '100px 52px' }} />
                        <path d="M90 60 Q100 50 110 60" stroke="#B85CFF" strokeWidth="2" strokeLinecap="round" fill="none" />
                        <path d="M84 66 Q100 44 116 66" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" fill="none" />

                        <path d="M40 50 Q45 50 45 45 Q45 50 50 50 Q45 50 45 55 Q45 50 40 50 Z" fill="#FFF" opacity="0.8" />
                        <path d="M160 140 Q163 140 163 137 Q163 140 166 140 Q163 140 163 143 Q163 140 160 140 Z" fill="#D66BFF" opacity="0.9" />
                        <path d="M150 45 Q152 45 152 43 Q152 45 154 45 Q152 45 152 47 Q152 45 150 45 Z" fill="#8B5CF6" opacity="0.7" />
              
                        <circle cx="55" cy="120" r="3" fill="#FFF" opacity="0.4" />
                        <circle cx="145" cy="75" r="5" fill="#B85CFF" opacity="0.6" />

                        <defs>
                           <linearGradient id="planetGradient" x1="100" y1="72" x2="100" y2="128" gradientUnits="userSpaceOnUse">
                             <stop offset="0%" stopColor="#8B5CF6" />
                             <stop offset="50%" stopColor="#2A1245" />
                             <stop offset="100%" stopColor="#1A0B2E" />
                           </linearGradient>
                        </defs>
                   </svg>
                </div>
            </div>
       </div>
    </div>
  );
};

export default ContactUs;
