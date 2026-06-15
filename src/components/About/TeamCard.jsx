export default function TeamCard({
  name,
  role,
  quote,
  image,
}) {
  return (
    <div
      className="
      group
      overflow-hidden
      rounded-2xl
      border
      border-purple-900/60
      bg-purple-950/10
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-purple-500
      hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]

      grid
      grid-cols-1
      md:grid-cols-2
      "
    >
      {/* IMAGE */}
      <div
        className="
        overflow-hidden
        h-[280px]
        sm:h-[350px]
        md:h-auto
        "
      >
        <img
          src={image}
          alt={name}
          className="
          w-full
          h-full
          object-cover
          object-top
          transition-transform
          duration-700
          
          "
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col justify-center">
        <h3
          className="
          text-2xl
          sm:text-3xl
          font-bold
          text-white
          mb-2
          transition-colors
          duration-300
          group-hover:text-purple-400
          "
        >
          {name}
        </h3>

        <p className="text-purple-400 mb-4">
          {role}
        </p>

        <p className="text-gray-400 leading-7">
          "{quote}"
        </p>
      </div>
    </div>
  );
}