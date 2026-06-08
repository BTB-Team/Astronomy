
import { Link } from "react-router-dom";
import { books } from "../../data/books";
import BookCard from "./BookCard";
import { useTranslation } from "react-i18next"; 
import SectionTitle from "./SectionTitle";

export default function LibrarySection() {

  const latestBooks = books.slice(0, 3);
  const { t , i18n } = useTranslation();
        const isRTL = i18n.language === "fa"

  return (
    <section className="border border-white/10 rounded-3xl p-6 md:p-10">
      
      <SectionTitle
      
        title={t("librarySection.title")}
        desc={t("librarySection.desc")}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {latestBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}

      </div>

           <div className="flex justify-center mt-10">
            <Link to="/books"
            className="px-8 py-4 bg-purple-900 hover:bg-purple-700 rounded-xl font-semibold transition"
          >
            {t("librarySection.lbtn")}
          </Link>
        </div>
    </section>
  );
}