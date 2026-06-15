import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import bghero from "/assets/images/image1.webp";

export default function AboutHero() {
  const { t, i18n } = useTranslation();

  return (
    <section
      className="
      relative
      min-h-[100vh]
      flex
      items-center
      justify-center
      overflow-hidden
      text-white
      bg-cover
      bg-center
      "
      style={{
        backgroundImage: `url(${bghero})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(60)].map((_, index) => (
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

      {/* Content */}
      <div
        className="
        relative
        z-20
        max-w-5xl
        mx-auto
        px-5
        text-center
        flex
        flex-col
        items-center
        justify-center
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p
            className="
            text-purple-400
            mb-2
            text-sm
            sm:text-base
            tracking-[4px]
            "
          >
            {t("aboutHero.orgName")}
          </p>

          <h1
            className="
            font-black
            leading-tight
            mb-4

            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            "
          >
            {t("aboutHero.heroTitle")}
          </h1>

          <p
            className="
            text-gray-300
            text-base
            sm:text-lg
            leading-8
            max-w-3xl
            mx-auto
            mb-8
            "
          >
            {t("aboutHero.heroDescription")}
          </p>

          <div
            className="
            flex
            flex-col
            sm:flex-row
            justify-center
            items-center
            gap-4
            "
          >
            <Link
              to="/contact"
              className="
              px-8
              py-4
              rounded-2xl
              text-white
              font-bold
              bg-gradient-to-r
              from-purple-600
              via-purple-600
              to-purple-800
              shadow-lg
              hover:scale-105
              transition-all
              duration-300
              "
            >
              {t("aboutHero.joinCommbtn")}
            </Link>

            <Link
              to="/blog"
              className="
              px-8
              py-4
              rounded-2xl
              border
              border-purple-500
              text-white
              font-bold
              hover:bg-purple-500/20
              transition-all
              duration-300
              "
            >
              {t("aboutHero.exploremorebtn")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}