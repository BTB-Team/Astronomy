import { useTranslation } from "react-i18next"; 
export default function PurchaseButton({ status }) {
const { t , i18n } = useTranslation();
        const isRTL = i18n.language === "fa"
  if (status === "locked") {

    
    return (
      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl">
       {t("purchasebtn.buy")}
      </button>
    );
  }

  if (status === "pending") {
    return (
      <button className="w-full bg-orange-500 text-white py-3 rounded-xl">
         {t("purchasebtn.underReview")}
      </button>
    );
  }

  return (
    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl">
       {t("purchasebtn.readNow")}
    </button>
  );
}