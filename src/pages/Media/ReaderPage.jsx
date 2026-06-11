

import { useParams } from "react-router-dom";
import { books } from "../../data/books";
import { useTranslation } from "react-i18next"; 
import PdfReader from "../../components/media/PdfReader";
import PageTitle from "../../components/pagetitle";

export default function ReaderPage() {

  const { id } = useParams();

  const book = books.find((item) => item.id === Number(id));
   const { t , i18n } = useTranslation();
        const isRTL = i18n.language === "fa"
  return (
    <div className="min-h-screen  text-white px-4 md:px-10 lg:px-20 py-20">
       <PageTitle title="titles.reader"/>
      <div className="mb-10">
        <h1 className="text-4xl font-black">
           {t(book.titlek)}
        </h1>

        <p className="text-gray-400 mt-3">
         {t(book.author)}
        </p>
      </div>

      <PdfReader file={book.pdf} />

    </div>
  );
}