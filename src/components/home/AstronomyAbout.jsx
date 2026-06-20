import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const images = [
  "/Astronomy/assets/images/image1.webp" ,
  "/Astronomy/assets/images/image2.webp" ,
  "/Astronomy/assets/images/image3.webp" ,
  "/Astronomy/assets/images/image7.webp" ,
  "/Astronomy/assets/images/image5.webp" ,
  "/Astronomy/assets/images/image6.webp" ,

];

export default function AstronomyAboutSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const { t , i18n } = useTranslation();
      const isRTL = i18n.language === "fa"
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section  className="w-full  py-10 px-4 md:p-10">
        <div className=" mx-auto h-auto mt-[90px] px-10 md:px-0 gap-10 md:gap-0 flex flex-col lg:flex-row  justify-around items-center">

    
        {/* Text*/}
        <div className={`w-full lg:w-1/2   ${    isRTL ? "text-right" : "text-left"} `}>
            <h1 className="text-3xl text-gray-200 sm:text-3xl font-bold mb-8">   {t("astronomyAboutSection.title")}</h1>
            <p className="text-gray-200 leading-8 text-sm sm:text-base ">
               {t("astronomyAboutSection.description")}
          </p>
        </div>
           {/* Photo*/}
        <div className="w-full lg:w-1/3 md:mt-14 ">
            <div className="overflow-hidden  shadow-xl">
                <img  src={images[currentImage]} alt="Astronomy"
                    className="w-full h-[250px] sm:h-[350px] md:h-[290px] object-cover duration-700 transition-all"
                />
            </div>

          {/* Pagenation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentImage === index
                    ? "bg-gray-400 scale-125"
                    : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>

         
      </div>
    </section>
  );
}
