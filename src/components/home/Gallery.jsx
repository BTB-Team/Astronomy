import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
 import { Link } from "react-router-dom";
 
import image1 from "../../assets/images/image1.webp";
import image2 from "../../assets/images/image2.webp";
import image3 from "../../assets/images/image3.webp";
import image4 from "../../assets/images/image4.webp";
import image5 from "../../assets/images/image5.webp";

export default function GallerySection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "fa"
  const slides = [
    {
      image: image1,
      title: t("Gallery.items.0.title"),
      desc: t("Gallery.items.0.desc"),
    },
    {
      image: image2,
      title: t("Gallery.items.1.title"),
      desc: t("Gallery.items.1.desc"),
    },
    {
      image: image3,
      title: t("Gallery.items.2.title"),
      desc: t("Gallery.items.2.desc"),
    },
    {
      image: image4,
      title: t("Gallery.items.3.title"),
      desc: t("Gallery.items.3.desc"),
    },
  ];
  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const activeBg = useMemo(() => slides[active].image, [active]);
    const isMobile = window.innerWidth < 640;
  return (
    <section className="relative w-full min-h-screen overflow-hidden ">
      {/* BLUR BACKGROUND */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeBg}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 box-shadow-2xl color-white"
        >
          <img
            src={activeBg}
            alt=""
            className="
              w-full
              h-full
              object-cover
              blur-3xl
              scale-110
              opacity-30
              box-shadow-2xl color-white
            "
          />

          <div className="absolute inset-0 " />
        </motion.div>
      </AnimatePresence>
      {/* MAIN CONTENT */}
      <div
        className="
          relative
          z-20
          w-full
          min-h-screen
          grid
          grid-cols-1
          lg:grid-cols-2
          items-center
          px-10
          lg:px-24
          overflow-hidden 
        "
      >
        {/* LEFT SIDE TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
            className={`
            space-y-8
            relative
            max-w-[600px]
            mx-auto
            lg:mx-0
            text-center
            ${isRTL ? "lg:text-right " : "lg:text-left"}
              `}

        >
          <p
            className="
              text-purple-400
              uppercase
              tracking-[6px]
              text-sm
            "
          >
           {t("hero.badge")}
          </p>

          <AnimatePresence mode="wait">
            <motion.h1
              key={slides[active].title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8 }}
              className="
                text-white
                text-5xl
                lg:text-7xl
                font-bold
                leading-tight
              "
            >
              {slides[active].title}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={slides[active].desc}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="
                text-gray-300
                text-lg
                leading-8
                max-w-[550px]
              "
            >
              {slides[active].desc}
            </motion.p>
          </AnimatePresence>

          <Link to="/about"
            className="
              px-8
              py-4
              rounded-full
              bg-[linear-gradient(90deg,#D66BFF_0%,#B85CFF_50%,#8B5CF6_100%)]
              transition-all
              duration-300
              text-white
              font-semibold
              shadow-2xl
            "
          >
           {t("Gallery.button")}
          </Link>
        </motion.div>

        {/* RIGHT SIDE 3D CAROUSEL */}
        <div className="relative overflow-hidden h-[700px]  flex items-center justify-center ">

          {slides.map((item, index) => {
            const total = slides.length;

            let offset = index - active;

            if (offset < -2) offset += total;
            if (offset > 2) offset -= total;

            const positions = {
              "-2": {
                x: -380,
                scale: 0.7,
                opacity: 0.2,
                rotateY: 45,
                zIndex: 1,
              },

              "-1": {
                x: -200,
                scale: 0.85,
                opacity: 0.5,
                rotateY: 25,
                zIndex: 10,
              },

              "0": {
                x: 0,
                scale: 1.1,
                opacity: 1,
                rotateY: 0,
                zIndex: 30,
              },

              "1": {
                x: 200,
                scale: 0.85,
                opacity: 0.5,
                rotateY: -25,
                zIndex: 10,
              },

              "2": {
                x: 380,
                scale: 0.7,
                opacity: 0.2,
                rotateY: -45,
                zIndex: 1,
              },
            };

            const pos = positions[offset];

            if (!pos) return null;

            return (
              <motion.div
                key={index}
                animate={{
                  x: pos.x,
                  scale: pos.scale,
                  opacity: pos.opacity,
                  rotateY: pos.rotateY,
                  zIndex: pos.zIndex,
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  rounded-[40px]
                  overflow-hidden
                  shadow-2xl
                "
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src={item.image}
                  alt=""
                  className="
                    w-[320px]
                    h-[520px]
                    object-cover
                    rounded-[40px]
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                  "
                />
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}