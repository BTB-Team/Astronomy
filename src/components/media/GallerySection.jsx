
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";  

import { galleryPreview } from "../../data/gallery";

import SectionTitle from "./SectionTitle";

export default function GallerySection() {

    const { t , i18n } = useTranslation();
        const isRTL = i18n.language === "fa"
  return (
    <section className=" border border-white/10 rounded-3xl p-6 md:p-10 mt-20">
      <SectionTitle
        
        title= {t("gallerySection.title")}  
        desc={t("gallerySection.desc")}  
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {galleryPreview.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl group cursor-pointer"
          >
            <img
              src={img}
              alt="astronomy"
              className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>
              <div className="flex justify-center mt-10">
            <Link to="/gallery"
            className="px-8 py-4 bg-purple-900 hover:bg-purple-700 rounded-xl font-semibold transition"
          >
            {t("gallerySection.gbtn")}  
          </Link>
        </div>
    </section>
  );
}