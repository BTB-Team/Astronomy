
import { useState } from "react";
import { useTranslation } from "react-i18next"; 
export default function BuyBookModal({ book, onClose }) {
  const [method, setMethod] = useState("AtomaPay");
   const { t , i18n } = useTranslation();
        const isRTL = i18n.language === "fa"
  return (
    <div className="fixed inset-0  z-50 flex items-center justify-center px-4">
      <div className="bg-[#0f172a] w-full max-w-lg rounded-3xl p-8 border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">
              {t("bookModal.buythis")}
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          <img
            src={book.cover}
            className="w-28 h-36 object-cover rounded-xl"
          />

          <div>
            <h3 className="text-white text-xl font-semibold">
              {t(book.titlek)}
            </h3>

            <p className="text-indigo-400 mt-3 text-lg">
              ${book.price}
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <label className="text-gray-300 block mb-3">
             {t("bookModal.method")}
            </label>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setMethod("AtomaPay")}
                className={`border rounded-xl py-3 ${
                  method === "AtomaPay"
                    ? "border-indigo-500 bg-indigo-500/20"
                    : "border-white/10"
                }`}
              >
                {t("bookModal.atomapay")}
              </button>

              <button
                onClick={() => setMethod("MoMo")}
                className={`border rounded-xl py-3 ${
                  method === "MoMo"
                    ? "border-yellow-500 bg-yellow-500/20"
                    : "border-white/10"
                }`}
              >
                {t("bookModal.mtnmomo")}
              </button>
            </div>
          </div>

          <div>
            <label className="text-gray-300 block mb-2">
              {t("bookModal.trNumber")}
            </label>

            <input
              type="text"
              className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 outline-none"
              placeholder={isRTL ? "تراکنش نمبر را وارد کنید" : "Enter Transaction Number  "}
            />
          </div>

          <div>
            <label className="text-gray-300 block mb-2">
              {t("bookModal.uploadReceipt")}
            </label>

            <input
              type="file"
              className="w-full bg-[#111827] border border-dashed border-white/20 rounded-xl p-4"
            />
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 py-4 rounded-xl text-white font-semibold">
            {t("bookModal.submit")}
          </button>
        </div>
      </div>
    </div>
  );
}