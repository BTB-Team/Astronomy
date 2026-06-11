import { useState } from "react";
import AuthSidePanel from "../components/Auth/AuthSidePanel";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import GoogleLoginButton from "../components/Auth/GoogleLoginButton";
import PageTitle from "../components/pagetitle";

export default function AuthLogin({ defaultMode = "login" }) {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === "fa";
    const [mode, setMode] = useState(defaultMode);

    const [form, setForm] = useState({   firstName: "",  lastName: "", email: "", password: "", confirmPassword: "",});

    const [errors, setErrors] = useState({    firstName: "",   lastName: "",  email: "", password: "", confirmPassword:""});

    const changeValue = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const isValidEmail = (email) => { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); };

    const handleSubmitlogin = async(e)=>{
		e.preventDefault();
		let valid = true;
        const errors = {};
 
        if (!form.email || !isValidEmail(form.email)) {
            errors.email = "email";
            valid = false;
        }

        if (!form.password || form.password.length < 6) {
            errors.password = "password";
            valid = false;
        }

        setErrors(errors); 
        if (!valid) return;

		const requestData = {
			email: form.email,
			password: form.password
	    }
      
        try {
            const response = await fetch('https://ganjyab.af', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestData)
            });
           const result = await response.json();
            if (response.ok) { 
                alert(t("auth.loginSuccess"));
                localStorage.setItem("auth-token", result.token || "mock-token");
                setForm({ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" });
            } else {
             alert(t("auth.loginFailed"));
            }
        } catch (error) {
            alert(t("auth.networkLoginError"));
        }
    }
          
    const handleSubmitRegister = async(e)=>{
		e.preventDefault();
        let valid = true;
        const errors = {};

        if (!form.firstName ) {
            errors.firstName = "name";
            valid = false;
        }
     
        if (!form.lastName) {
            errors.lastName = "lastName";
            valid = false;
        }
     
        if (!form.email || !isValidEmail(form.email)) {
            errors.email = "email";
            valid = false;
        }

        if (!form.password) {
            errors.password = "password";
            valid = false;
        }
        
        if (!form.confirmPassword) {
            errors.confirmPassword = "confirm";
            valid = false;
        }

        setErrors(errors);
        if (!valid) return;
		const requestDatas = {
			firstName: form.firstName,
            lastName: form.lastName,
            email:  form.email,
            password: form.password
		}
        try {
   
        const response = await fetch('https://ganjyab.af', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestDatas) 
        });

        const data = await response.json();
        if (response.ok) { 
            localStorage.setItem("auth-token", "mock-token");
            localStorage.setItem("auth-firstName", form.firstName);
            localStorage.setItem("auth-lastName", form.lastName);
            localStorage.setItem("auth-email", form.email);
            alert(t("auth.registerSuccess"));
            setMode("login"); 
            setForm({ firstName: "",  lastName: "", email: "", password: "", confirmPassword: "" });
        } else {
            alert(t("auth.registerFailed"));
        }
        } catch (error) {
            alert(t("auth.networkRegisterError"));
        }
    }
    const fieldClass = `w-full h-12 text-white rounded-full bg-[#2C1747]    [-webkit-text-fill-color:white]  border border-white/20 px-5 outline-none  autofill:border-[#56416A]  autofill:shadow-[0_0_0_30px_#2C1747_inset]   [&-webkit-autofill]:shadow-[0_0_0_30px_#2C1747_inset]  ${isRTL ? "text-right" : "text-left"}`;

    const errorClass = `text-red-500 text-xs mt-1 px-3 ${ isRTL ? "text-right" : "text-left"}`;
    const panelRadius = isRTL ? "lg:rounded-l-[180px]": "lg:rounded-r-[180px]";

    return (
        <div className="min-h-[calc(100vh-120px)] flex items-center justify-center px-3 sm:px-4 py-8 sm:py-12 md:py-16" dir={isRTL ? "rtl" : "ltr"}>
            <PageTitle    title={mode === "login" ? "titles.login" : "titles.signup"}/>
            <div className={`w-full max-w-[1100px] border border-white/20 rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-2xl flex flex-col ${
              mode === "login"? (isRTL ? "lg:flex-row" : "lg:flex-row-reverse")   : (isRTL ? "lg:flex-row-reverse" : "lg:flex-row") }`}
            >    
           {/* LEFT SIDE  */}
            <div className="w-full lg:w-[58%] flex items-center justify-center px-5 py-8 sm:px-9 sm:py-10 md:px-12">
                <div className="w-full max-w-[620px]">
                    <h1 className="text-3xl font-bold text-white mb-14 text-center"> {mode === "login"? t("auth.login")  : t("auth.signup")} </h1>
                    <form className="flex flex-col gap-5 ">
                        {/* SIGNUP ONLY */}
                        {mode === "signup" && (
                            <div  className="flex  gap-2">
                                <div className="w-full">
                                    <input
                                     type="text"
                                     name="firstName"
                                      value={form.firstName}
                                     onChange={changeValue}
                                     placeholder={t("auth.firstName")}
                                     className={fieldClass}
                                    />
                                    {errors.firstName && (
                                        <p className={errorClass}>{t("validation.name")}</p>
                                    )}
                                </div>
                                <div className="w-full">
                                    <input
                                     type="text"
                                     name="lastName"
                                     value={form.lastName}
                                     onChange={changeValue}
                                     placeholder={t("auth.lastName")}
                                     className={fieldClass}
                                    />
                                    {errors.lastName && (
                                        <p className={errorClass}>{t("validation.lastName")}</p>
                                    )}
                                </div>
                            </div >
                        )}
                       {/* EMAIL (BOTH) */}
                       <div>
                            <input
                              name="email"
                              type="email"
                              value={form.email}
                              onChange={changeValue}
                              placeholder={t("auth.emailPlaceholder")}
                              className={fieldClass}
                            />
                            {errors.email && (
                                <p className={errorClass}>{t("validation.email")}</p>
                            )}
                        </div>
                        {/* PASSWORD */}
                        <div>
                            <input
                              name="password"
                              type="password"
                              value={form.password}
                              onChange={changeValue}
                              placeholder={t("auth.password")}
                              className={fieldClass}
                            />
                            {errors.password && (
                               <p className={errorClass}>{t("validation.password")}</p>
                            )}
                        </div>
                        {/* CONFIRM PASSWORD (ONLY SIGNUP) */}
                        {mode === "signup" && (
                            <div>
                                <input
                                  name="confirmPassword"
                                  type="password"
                                  value={form.confirmPassword}
                                  onChange={changeValue}
                                  placeholder={t("auth.confirmPassword")}
                                  className={fieldClass}
                                />
                                {errors.confirmPassword && (
                                    <p className={errorClass}>{t("validation.confirm")}</p>
                                )}
                            </div>
                        )}
                        {/* SUBMIT BUTTON */}
                        {
                           mode === "login" ? 
                           <button onClick={handleSubmitlogin} type="button"className="h-12 sm:h-14 rounded-full text-white font-bold mt-2 bg-[linear-gradient(90deg,#D66BFF_0%,#B85CFF_50%,#8B5CF6_100%)]"
                           >
                            {  t("auth.login")}
                            </button>:  
                            <button onClick={handleSubmitRegister} type="button"
                              className="h-12 sm:h-14 rounded-full text-white font-bold mt-2 bg-[linear-gradient(90deg,#D66BFF_0%,#B85CFF_50%,#8B5CF6_100%)]"
                            >
                                {t("auth.signup")}
                            </button>
                        }
                    </form>
                    <GoogleLoginButton />
                </div>
            </div>
            {/* RIGHT SIDE (UNCHANGED DESIGN) */}
            <AuthSidePanel mode={mode}  setMode={setMode} t={t} panelRadius={panelRadius}/>
        </div>
    </div>
  );
}
