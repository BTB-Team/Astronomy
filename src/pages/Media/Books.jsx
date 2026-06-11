import { books } from "../../data/books";
import BookCard from "../../components/media/BookCard";
import { useTranslation } from "react-i18next";  
import heroBg from "/assets/images/Lhero.png"; 
import { useState } from "react";
import PageTitle from "../../components/pagetitle";

export default function BooksPage() {

   const { t , i18n } = useTranslation();
          const isRTL = i18n.language === "fa"

          const [visibleBooks, setVisibleBooks] = useState(6);

          const loadMoreBooks = () => {
            setVisibleBooks((prev) => prev + 3);
          };
  return (
    <div className="min-h-screen text-white">
    <PageTitle title="titles.books"/>
      {/* Hero */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex  justify-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
          <div className="text-center mt-26">

            <h1 className="text-6xl font-black">
               {t("bookPage.title")}
            </h1>

            <p className="text-gray-300 mt-6 text-lg">
               {t("bookPage.bdesc")}            </p>

          </div>
      </section>

      {/* Books */}
      <div className="px-4 md:px-10 lg:px-20 py-20  ">
        <div className="border border-2 border-purple-300/30 p-14 rounded-2xl">
         <div  className="pb-8">

            <h1 className="text-5xl font-black">
               {t("bookPage.bookcollectiont")}     
            </h1>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        
          {books.map((book) => (
          <BookCard key={book.id} book={book} />
          ))}
        </div>
          {visibleBooks < books.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={loadMoreBooks}
              className="px-8 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition-all duration-300"
            >
              {isRTL ? "نمایش  بیشتر" : "Load More "}
            </button>
          </div>
        )}

      </div>
          </div>
    </div>
  );
}