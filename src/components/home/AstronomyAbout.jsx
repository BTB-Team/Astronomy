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
        <div className="max-w-7xl mx-auto h-auto mt-[90px] px-10 md:px-0 gap-10 md:gap-0 flex flex-col lg:flex-row  justify-around items-center">

    
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

// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";

// const images = [
//   "/assets/images/image1.webp",
//   "/assets/images/image2.webp",
//   "/assets/images/image3.webp",
//   "/assets/images/image7.webp",
//   "/assets/images/image5.webp",
//   "/assets/images/image6.webp",
// ];

// export default function AstronomyAboutSection() {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   const { t, i18n } = useTranslation();

//   const isRTL = i18n.language === "fa";

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) =>
//         prev === images.length - 1 ? 0 : prev + 1
//       );
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   const description = t("astronomyAboutSection.description");

//   const shortText = description.slice(0, 250);

//   return (
//     <section className="w-full py-10 px-4 md:px-10">
//       <div className="max-w-5xl mx-auto">

//         {/* CARD */}
//         <div className=" rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">

//           {/* IMAGE */}
//           <div className="overflow-hidden relative group">
//             <img
//               src={images[currentImage]}
//               alt="Astronomy"
//               className="w-full h-[250px] md:h-[450px]  transition-all duration-700 group-hover:scale-110 group-hover:brightness-75 "
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500"></div>
//           </div>

//           {/* PAGINATION */}
//           <div className="flex justify-center gap-2 py-4 ">
//             {images.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentImage(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   currentImage === index
//                     ? "bg-gray-500 scale-125"
//                     : "bg-gray-300"
//                 }`}
//               />
//             ))}
//           </div>

//           {/* TEXT */}
//           <div
//             className={`p-6 md:p-8 ${
//               isRTL ? "text-right" : "text-left"
//             }`}
//           >
//             <h1 className="text-2xl md:text-4xl font-bold text-white mb-5">
//               {t("astronomyAboutSection.title")}
//             </h1>

//             <p className="text-gray-300 leading-8 text-sm md:text-base whitespace-pre-line">
//               {showMore ? description : `${shortText}...`}
//             </p>

//             {/* BUTTON */}
//             <button style={{ background: "linear-gradient(90deg, #D66BFF 0%, #B85CFF 50%, #8B5CF6 100%)",}}
//               onClick={() => setShowMore(!showMore)}
//               className="mt-6 px-6 py-2  text-white rounded-xl transition-all duration-300 hover:scale-105"
//             >
//               {showMore
//                 ? isRTL
//                   ? "نمایش کمتر"
//                   : "Show Less"
//                 : isRTL
//                 ? "معلومات بیشتر"
//                 : "View More"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }