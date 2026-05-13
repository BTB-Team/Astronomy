import { FaEye, FaRocket, FaStar } from 'react-icons/fa';
import { visionCards } from '../../data/homeData';

const icons = {
  eye: FaEye,
  rocket: FaRocket,
  star: FaStar,
};

export default function Vision() {
  return (
    <section className="bg-gradient-to-b from-slate-950 to-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-purple-300">مسیر ما</p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">چشم‌انداز، مأموریت و ارزش‌های ما</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {visionCards.map((card) => {
            const Icon = icons[card.icon];

            return (
              <article
                key={card.title}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-8 text-center shadow-xl shadow-purple-950/10 backdrop-blur transition hover:-translate-y-2 hover:border-purple-400/70 hover:bg-purple-500/10"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-200">
                  <Icon className="text-3xl" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">{card.title}</h3>
                <p className="leading-8 text-slate-300">{card.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
