import { discoveryCards } from '../../data/homeData';

export default function Features() {
  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-purple-300">کشفیات تازه</p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">آخرین موضوعات علمی و فضایی</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {discoveryCards.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 transition hover:-translate-y-2 hover:border-purple-400/60"
            >
              <img src={item.image} alt={item.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="space-y-3 p-6">
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="leading-7 text-slate-300">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
