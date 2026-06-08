
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import bgStoryimg from "/assets/images/image7.webp"
export default function Story() {

   const { t , i18n } = useTranslation();
        const isRTL = i18n.language === "fa"
  return (
    <section className="relative py-24 lg:py-32  overflow-hidden text-white">
      {/* BG */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px]  blur-[130px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="h-[350px] sm:h-[500px] lg:h-[650px] rounded-[30px] overflow-hidden border border-purple-500/20">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <img src={bgStoryimg} alt="" />
            </div>
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          
          <h2 className="text-4xl sm:text-5xl font-black leading-tight mb-8">
            {t("aboutStory.title")}
          </h2>

          <div className="space-y-6 text-gray-300 leading-8 text-base sm:text-lg">
            <p>
               {t("aboutStory.discription1")}
            </p>

            <p>
               {t("aboutStory.discription2")}
            </p>

            <p>
               {t("aboutStory.discription3")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}