

import { useParams } from "react-router-dom";
import { books } from "../../data/books";
import { useState } from "react";
import { useTranslation } from "react-i18next"; 
import { useNavigate } from "react-router-dom";
import BuyBookModal from "../../components/media/BuyBookModal";
import PurchaseButton from "../../components/media/PurchaseButton";
import PageTitle from "../../components/pagetitle";

export default function BookDetails() {

  const { id } = useParams();

  const book = books.find((item) => item.id === Number(id));

  const [open, setOpen] = useState(false);
  const [reviewModal, setReviewModal] = useState(false);

const navigate = useNavigate();

const handleBookAction = () => {

  if (book.purchaseStatus === "locked") {
    setOpen(true);
  }

  else if (book.purchaseStatus === "pending") {
    setReviewModal(true);
  }

  else if (book.purchaseStatus === "owned") {
    navigate(`/read/${book.id}`);
  }

};

        const { t , i18n } = useTranslation();
        const isRTL = i18n.language === "fa"
  return (
    <div className="  text-white px-4 md:px-10 lg:px-20 py-10">
      <PageTitle title="titles.bookDetails"/>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-start bg-purple-700/10 border border-2 border-purple-300/10 p-10 rounded-2xl">

        <div className="h-full">
          <img
            src={book.cover}
            className="w-full h-full max-w-md rounded-3xl"
          />
        </div>

        <div>

          <span className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm">
             {t(book.category)}
          </span>

          <h1 className="text-5xl font-black mt-6 leading-tight">
            {t(book.titlek)}
          </h1>

          <p className="text-gray-400 mt-5 text-lg">
            {isRTL ? "نویسنده" : "َAuthor"}: {t(book.author)}
          </p>

          <div className="flex gap-8 mt-8 flex-wrap text-gray-300 flex-col">
            <span>{book.pages} :{isRTL ? "صفحه" : "Pages"} </span>
            <span>{isRTL ? "زبان" : "Language"}:  {t(book.language)}</span>
          </div>

          <h3 className="text-4xl text-indigo-400 font-bold mt-10">
             ${book.price} 
          </h3>

          <p className="text-gray-400 leading-8 mt-8 text-lg">
            {t(book.description)}
          </p>    

         <div
                className="mt-10 max-w-xs"
                onClick={handleBookAction}
                   >
                <PurchaseButton status={book.purchaseStatus} />
              </div>

        </div>
      </div>

      {open && (
        <BuyBookModal
          book={book}
          onClose={() => setOpen(false)}
        />
      )}

      {reviewModal && (

  <div className="fixed inset-0  flex items-center justify-center z-50">

    <div className="bg-purple-950 p-8 rounded-3xl max-w-md w-full mx-4">

      <h2 className="text-2xl font-bold mb-4 text-orange-400">
        {t("bookdetails.underReview")}
      </h2>

      <p className="text-gray-300 leading-7">
        {t("bookdetails.paymentSuccessMessage")}
      </p>

      <button
        onClick={() => setReviewModal(false)}
        className="w-full mt-6 bg-orange-500 hover:bg-orange-600 py-3 rounded-xl"
      >
         {t("bookdetails.closebtn")}
      </button>

    </div>

  </div>

)}
    </div>
  );
}







