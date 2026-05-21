import { BsGoogle } from "react-icons/bs";
import { auth, provider, signInWithPopup } from "../../firebase";
import { useTranslation } from "react-i18next";

export default function GoogleLoginButton() {
    const { t} = useTranslation();
    const handleGoogleLogin = async () => {
    
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const fullName = user.displayName || "";
        const nameParts = fullName.split(" ");
        const firstName = nameParts[0] || "";
        const lastName = nameParts.slice(1).join(" ") || "";

        localStorage.setItem("auth-firstName", firstName);
        localStorage.setItem("auth-lastName", lastName);
        localStorage.setItem("auth-email", user.email);
        localStorage.setItem("auth-photo", user.photoURL || "");
        localStorage.setItem("auth-token", await user.getIdToken());

        alert(t("auth.googleLoginSuccess"));
        window.location.reload();

    } catch (error) {
        console.log("ERROR:", error);
        alert("Google login failed");
    }
};

  return (
    <div className="w-full mt-8">
      <div className="flex items-center justify-center">
        <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-sm text-white text-center whitespace-nowrap">{t("auth.orLoginWith")} </span>
            <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <button
         onClick={handleGoogleLogin}
         type="button"
         className="mt-6 bg-[#531785] duration-300 transition-all hover:bg-purple-600 text-white px-4 py-3 rounded-full w-full flex items-center justify-center gap-2"
        >
           <BsGoogle className="w-5 h-5" />
           {t("auth.googleLogin")}
      </button>
    </div>
  );
}