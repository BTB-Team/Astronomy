
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
export default function BookCard({ book }) {
   const { t , i18n } = useTranslation();
        const isRTL = i18n.language === "fa"
  return (
  <div className="bg-purple-950/20 rounded-3xl overflow-hidden border border-white/10 hover:border-indigo-500 transition background flex flex-col h-full">
  <img
    src={book.cover}
    className="w-full h-[160px] object-cover"
  />

  <div className="p-5 flex flex-col flex-1">
    <h3 className="text-white text-xl font-bold">
      {t(book.titlek)}
    </h3>

    <p className="text-gray-400 mt-2 text-sm">
      {t(book.author)}
    </p>

    <p className="text-indigo-400 mt-3 font-semibold">
      ${book.price}
    </p>

    <p className="text-gray-400 mt-4 text-sm leading-7 flex-1">
      {t(book.description)}
    </p>

    <div className="flex items-center justify-between mt-5">
      <span className="bg-indigo-500/20 text-indigo-300 text-xs px-3 py-1 rounded-full">
        {t(book.category)}
      </span>

      <Link
        to={`/books/${book.id}`}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl"
      >
        {t("librarySection.vbtn")}
      </Link>
    </div>
  </div>
</div>
  );
}