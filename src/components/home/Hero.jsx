import { useTranslation } from 'react-i18next';
import heroVideo from '../../assets/videos/vedio.mp4';

export default function Hero() {
     const { t} = useTranslation();
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/65 to-slate-950" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-8 px-6 text-center">
        <span className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm text-purple-100 backdrop-blur">
            {t('hero.badge')}
        </span>

        <h1 className="max-w-4xl text-4xl font-black leading-tight text-white ">
               {t('hero.title')}
        </h1>

        <p className="max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
             {t('hero.description')}
        </p>
      </div>
    </section>
  );
}
