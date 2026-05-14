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

        <div className="flex w-full max-w-xl flex-col gap-3 rounded-3xl border border-white/10 bg-white/10 p-3 backdrop-blur md:flex-row">
          <input
            type="search"
            placeholder={t('hero.searchPlaceholder')}
            className="min-h-12 flex-1 rounded-2xl border border-white/10 bg-slate-950/70 px-5 text-white outline-none placeholder:text-slate-400 focus:border-purple-400"
          />
          <button className="rounded-2xl bg-purple-500 px-7 py-3 font-semibold text-white transition hover:bg-purple-600">
             {t('hero.searchBtn')}
          </button>
        </div>
      </div>
    </section>
  );
}
