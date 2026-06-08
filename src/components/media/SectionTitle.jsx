

export default function SectionTitle({
  number,
  title,
  desc,
}) {
  return (
    <div className="mb-8 flex items-center justify-between gap-4 flex-wrap">

      <div>

        <span className="text-indigo-400 text-sm font-semibold">
          {number}
        </span>

        <h2 className="text-3xl md:text-4xl font-black text-white mt-2">
          {title}
        </h2>

        <p className="text-gray-400 mt-3 max-w-2xl leading-7">
          {desc}
        </p>

      </div>

    </div>
  );
}