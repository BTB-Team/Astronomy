import { useEffect, useState } from "react";
import { CiUser , CiLogout} from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function UserMenu() {
    const { t} = useTranslation();
    const [open, setOpen] = useState(false);
    const isLoggedIn = !!localStorage.getItem("auth-token");

    const firstName = localStorage.getItem("auth-firstName");
    const lastName = localStorage.getItem("auth-lastName");
    const email = localStorage.getItem("auth-email");
    const photo = localStorage.getItem("auth-photo");
    
    useEffect(() => {
        const close = () => setOpen(false);
        document.addEventListener("click", close);
        return () => document.removeEventListener("click", close);
    }, []);

    return (
    <div className="relative flex items-center justify-end">
        {/* TRIGGER BUTTON */}
       {!isLoggedIn ? (
            <button onClick={(e) => { e.stopPropagation(); setOpen(!open);}}
              className="w-8 h-8 border  border-white transition-all duration-300 hover:bg-white/20 flex items-center justify-center rounded-full">
                <CiUser size={20} />
            </button>
            ) : (
                <button onClick={(e) => { e.stopPropagation();  setOpen(!open); }}
                 className="w-8 h-8 border  border-white flex items-center justify-center rounded-full overflow-hidden"
                >
                    {photo ? (  
                        <img  src={photo} alt="profile" className="w-6 h-6 rounded-full object-cover"/>
                    ) : (
                        <span className="text-sm font-bold text-white uppercase">  {firstName?.charAt(0)}</span>
                    )}
                </button>
            )}
            {/* DROPDOWN (NOT LOGGED IN)*/}
            {open && !isLoggedIn && (
                <div className="absolute  top-10 bg-[#2C1747] border border-white text-white rounded-md w-32 z-50">
                    <Link to="/login"  onClick={() => setOpen(false)} className="px-3 py-2 block hover:bg-black/25"> Login </Link>
                 
                </div>
            )}
            {/* DROPDOWN (LOGGED IN) */}
            {open && isLoggedIn && (
                <div 
                className="absolute bottom-full md:top-10 mb-2 md:bottom-auto bg-[#2C1747] border border-white text-white rounded-md w-56 z-50 p-3"
                >
                    <div className="flex gap-2 border-b  border-white duration-300 transition-all hover:bg-black/25 pb-2 mb-2 items-center justify-center">
                        <CiUser size={20} />
                    <div>    
                    <p className="font-bold text-sm">  {firstName} {lastName}</p>
                    <p className="text-xs text-white/70">{email}</p></div>
                </div>
                <button onClick={() => { localStorage.clear(); window.location.reload();}}
                  className="w-full mt-2 py-2 px-4 duration-300 transition-all hover:bg-black/25 flex gap-3 rounded-md bg-"
                >
                    <CiLogout size={25}/>{t("auth.logout")}
                </button>
           </div>
        )}
    </div>
  );
}