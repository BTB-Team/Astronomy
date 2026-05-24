
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import {useTranslation } from "react-i18next";

import bghero from "../../../public/assets/images/image1.webp"
export default function AboutHero() {

  const { t , i18n } = useTranslation();
        const isRTL = i18n.language === "fa"
  return (
    <section className="relative overflow-hidden  min-h-screen flex items-center text-white bg-cover "  style={{
    backgroundImage: `url(${bghero})`,
  }} >
      {/* BACKGROUND */}
      <div className="absolute inset-0 "></div>

      {/* PARTICLES */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, index) => (
          <motion.span
            key={index}
            className="absolute w-[3px] h-[3px] bg-purple-400 rounded-full"
            initial={{ y: -100, opacity: 0 }}
            animate={{
              y: "120vh",
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-24 grid lg:grid-cols-2 gap-16 items-center"> 
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-purple-400 uppercase tracking-[4px] sm:tracking-[6px] mb-5 text-sm sm:text-base">
            {t("aboutHero.orgName")}
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black leading-tight mb-8">
           {t("aboutHero.heroTitle")}
          </h1>

          <p className="text-gray-300 leading-8 text-base sm:text-lg mb-10 max-w-2xl">
            {t("aboutHero.heroDescription")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/login"
        className="px-8 py-4 rounded-2xl text-white font-bold
        bg-gradient-to-r from-purple-600 via-purple-600 to-purple-800
        shadow-lg hover:scale-105 transition-all duration-300 inline-block"
    >
        {t("aboutHero.joinCommbtn")}
    </Link>
      
        <Link
    to="/blog"
    className="px-8 py-4 rounded-2xl border border-[#B85CFF]
    text-white font-bold hover:bg-[#B85CFF]/20
    transition-all duration-300 inline-block"
  >
   {t("aboutHero.exploremorebtn")}
  </Link>

           
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
        
        </motion.div>
      </div>
    </section>
  );
}