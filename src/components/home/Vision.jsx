import { useTranslation } from "react-i18next";
import { FaEye, FaRocket, FaStar } from "react-icons/fa";


export default function Vision() {
  const { t } = useTranslation();
  return (
    <div className="py-20 px-4 sm:px-6 md:px-10 w-full mt-20 h-auto ">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-8">
          {t("vision.title")}
        </h1>
      </div>
      <section
        className="
          w-full
          rounded-xl
          bg-center
          bg-cover
          bg-no-repeat
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-8"
      >
        {/* Card 1 */}
        <div className="
          text-justify
          w-full
          h-[45px]
          max-w-[400px]
          mx-auto
          min-h-[320px]
          p-6
          text-white/70
          rounded-2xl
          border border-white/10
          backdrop-blur-md
          bg-black/11
        border-white/20
        transition-all duration-300
       
        hover:border-transparent
        hover:shadow-lg
        hover:shadow-purple-500/50
        ">
          <FaEye className="text-4xl  mb-4 mx-auto" />
          <h1 className="text-2xl font-bold text-center mb-4">
            {t("vision.visionTitle")}
          </h1>
          <p className="text-center leading-8 text-sm sm:text-base">
            {t("vision.visionDesc")}
          </p>
        </div>
        {/* Card 2 */}
        <div className="
          text-justify
          w-full
          h-[40px]
          max-w-[400px]
          mx-auto
          min-h-[320px]
          p-6
          text-white-70
          rounded-2xl
          border border-white/10
          backdrop-blur-md
          bg-black/11
        border-white/20
          transition-all duration-300
          hover:border-transparent
          hover:shadow-lg
          hover:shadow-purple-500/50
        ">
          <FaRocket className="text-4xl mb-4 mx-auto" />
          <h1 className="text-2xl font-bold text-center mb-2">
          {t("vision.missionTitle")}
          </h1>
          <p className="text-center leading-8 text-sm sm:text-base">
             {t("vision.missionDesc")}
          </p>
        </div>
        {/* Card 3 */}
        <div className="
          text-justify
          w-full
          h-[40px]
          max-w-[400px]
          mx-auto
          min-h-[320px]
          p-6
         text-white-70
          rounded-2xl
          border border-white/10
          backdrop-blur-md
          bg-black/11
        border-white/20
          transition-all duration-300 
          hover-bg-with-gradient-to hover-from-purple-500 hover-to-pink-500
          hover:border-transparent
          hover:shadow-lg
          hover:shadow-purple-500/50
        ">
          <FaStar className="text-4xl mb-4 mx-auto color-blue-500" />
          <h1 className="text-2xl font-bold text-center mb-4">
          {t("vision.valuesTitle")}
          </h1>
          <p className="text-center leading-8 text-sm sm:text-base">
           {t("vision.valuesDesc")}
          </p>
        </div>
      </section>
    </div>
  );
}