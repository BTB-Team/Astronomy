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
        border-[#4D2E73]
        bg-white/5
        backdrop-blur-md
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-purple-500
        hover:shadow-[0_0_25px_rgba(168,85,247,0.2)]

        grid
        grid-cols-1
        md:grid-cols-2
        items-stretch
      "
    >
      {/* IMAGE */}
      <div
        className="
          relative
          overflow-hidden
          h-[300px]
          sm:h-[400px]
          md:h-full
          min-h-[450px]
        "
      >
        <img
          src={image}
          alt={name}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />
      </div>

      {/* CONTENT */}
      <div className="p-8 flex flex-col justify-center">
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

        <p className="text-purple-400 mb-5">
          {role}
        </p>

        <p className="text-gray-300 leading-8">
          "{quote}"
        </p>
      </div>
    </div>
  );
}