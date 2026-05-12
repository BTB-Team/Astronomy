
import image3 from "../../assets/img3.png";
import image4 from "../../assets/img4.png";
import image5 from "../../assets/img5.png";

export default function Features() {

  const items = [

    {
      title: "Exoplanets",
      description: "Explore planets outside our solar system.",
      img: image3,
    },

    {
      title: "Space Telescopes",
      description: "Modern telescopes help scientists study space.",
      img: image4,
    },

    {
      title: "Cosmic Science",
      description: "Understand the science behind the universe.",
      img: image5,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10">
        Latest Discoveries
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white/5 rounded-xl overflow-hidden shadow-lg"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="h-48 w-full object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm mt-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}