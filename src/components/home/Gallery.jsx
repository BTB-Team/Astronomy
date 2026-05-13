import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { gallerySlides } from '../../data/homeData';

const positions = {
  '-2': { x: -360, scale: 0.7, opacity: 0.18, rotateY: 45, zIndex: 1 },
  '-1': { x: -190, scale: 0.86, opacity: 0.55, rotateY: 24, zIndex: 10 },
  0: { x: 0, scale: 1.05, opacity: 1, rotateY: 0, zIndex: 30 },
  1: { x: 190, scale: 0.86, opacity: 0.55, rotateY: -24, zIndex: 10 },
  2: { x: 360, scale: 0.7, opacity: 0.18, rotateY: -45, zIndex: 1 },
};

export default function Gallery() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % gallerySlides.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  const currentSlide = gallerySlides[active];
  const activeBackground = useMemo(() => currentSlide.image, [currentSlide.image]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-6 py-24">
      <AnimatePresence mode="wait">
        <motion.img
          key={activeBackground}
          src={activeBackground}
          alt=""
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.35, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 h-full w-full object-cover blur-3xl"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-slate-950/80" />

      <div className="relative z-10 mx-auto grid min-h-[760px] max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div className="mx-auto max-w-2xl space-y-7 text-center lg:mx-0 lg:text-right">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-purple-300">گالری کیهانی</p>

          <AnimatePresence mode="wait">
            <motion.h2
              key={currentSlide.title}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -28 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-black leading-tight text-white md:text-6xl"
            >
              {currentSlide.title}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={currentSlide.description}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg leading-9 text-slate-300"
            >
              {currentSlide.description}
            </motion.p>
          </AnimatePresence>

          <button className="rounded-full bg-purple-500 px-8 py-4 font-semibold text-white shadow-2xl shadow-purple-900/40 transition hover:bg-purple-600">
            معلومات بیشتر
          </button>
        </div>

        <div className="relative hidden h-[650px] items-center justify-center overflow-hidden lg:flex">
          {gallerySlides.map((slide, index) => {
            const total = gallerySlides.length;
            let offset = index - active;

            if (offset < -2) offset += total;
            if (offset > 2) offset -= total;

            const position = positions[offset];
            if (!position) return null;

            return (
              <motion.div
                key={slide.title}
                animate={position}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/60"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img src={slide.image} alt={slide.title} className="h-[500px] w-[320px] object-cover" />
                <div className="absolute inset-0 bg-white/5" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
