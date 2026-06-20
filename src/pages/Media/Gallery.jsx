import { useState } from "react";
import { galleryData } from "../../data/gallery";
import { useTranslation } from "react-i18next";  
import galleryHero from "/assets/images/galleryHp.webp"
import PageTitle from "../../components/pagetitle";

export default function Gallery() {

  const [selectedImage, setSelectedImage] = useState(null);

  const [visibleCount, setVisibleCount] = useState(8);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const { t , i18n } = useTranslation();
        const isRTL = i18n.language === "fa"

  return (
    <div className="min-h-screen  text-white" >
      <PageTitle title="titles.gallery"/>
      {/* HERO */}
      <section className="relative h-[100vh] bg-cover" style={{ backgroundImage:  `url(${galleryHero})`}}>

        <div className="absolute inset-0 "></div>

        <div className="relative z-10 h-full flex pt-16 justify-center">

          <div className="text-center">

            <h1 className="text-6xl font-black">
               {t("gallery.gtitle")}
            </h1>

            <p className="text-gray-300 mt-5 text-lg">
               {t("gallery.gdesc")}            </p>

          </div>
        </div>
      </section>

      {/* HEADER */}
      <section className=" mx-auto px-5 py-20">
      <div className="border border-2 border-purple-400/10 p-14 rounded-2xl">
        <div className="flex flex-col md:flex-row justify-between gap-5 mb-12">
          
          <h2 className="text-4xl font-bold">
             {t("gallery.gimgtitle")} 
          </h2>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">

          {galleryData.slice(0, visibleCount).map((item) => (

            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="cursor-pointer group overflow-hidden rounded-3xl border border-purple-500/30"
            >

              <img
                src={item.image}
                className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-500"
              />


            </div>

          ))}

        </div>

        {/* LOAD MORE BUTTON */}
        {visibleCount < galleryData.length && (
          <div className="text-center mt-10">
            <button
              onClick={loadMore}
              className="px-6 py-3 bg-purple-900 hover:bg-purple-700 rounded-xl transition"
            >
              {t("gallery.loadMbtn")} 
            </button>
          </div>
        )}
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (

        <div
          className="fixed inset-0  z-50 flex items-center justify-center px-5 "
          onClick={() => setSelectedImage(null)}
        >

          <div className="max-w-5xl">

            <img
              src={selectedImage.image}
              className="max-h-[85vh] rounded-3xl"
            />

            <h2 className="text-center text-2xl mt-5">
              {selectedImage.title}
            </h2>

          </div>

        </div>

      )}

    </div>
  );
}