export default function AuthSidePanel({ mode, setMode,t,panelRadius,}) {
  return (
    <div className={`w-full lg:w-[42%] min-h-[240px] sm:min-h-[280px] lg:min-h-[550px] bg-gradient-to-r from-[#531785] to-[#7c3aed] text-white flex items-center justify-center text-center px-6 sm:px-8 py-10  rounded-t-[90px] sm:rounded-t-[120px] lg:rounded-t-none ${panelRadius}`} >
        <div className="max-w-[330px]">
            <h2 className="text-3xl sm:text-4xl font-bold mb-5 sm:mb-6">  {t("auth.welcome")} </h2>
            <p className="leading-8 text-white/90 mb-7 sm:mb-9"> {t("auth.noAccount")} </p>
            <button onClick={() =>  setMode(mode === "login" ? "signup" : "login") }
             className="inline-flex h-11 sm:h-12 px-9 sm:px-10 rounded-full border-2 border-white items-center justify-center font-bold hover:bg-white hover:text-[#8B5CF6] transition"
            >
                {mode === "login"  ? t("auth.create")   : t("auth.login")}
            </button>
        </div>
    </div>
  );
}