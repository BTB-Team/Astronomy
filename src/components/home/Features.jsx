import { useTranslation } from "react-i18next";
import image3 from "../../assets/images/img3.webp";
import image4 from "../../assets/images/img4.webp";
import image5 from "../../assets/images/img5.webp";

export default function Features() {
  const { t } = useTranslation();
  const items = [
    {
      title:t("features.items.0.title"),
      description: t("features.items.0.description"),
      img: image3,
    },
    {
      title:t("features.items.1.title"),
      description: t("features.items.1.description"),
      img: image4,
    },
    {
      title:t("features.items.2.title"),
      description: t("features.items.2.description"),
      img: image5,
    }
  ];
  return (
    <section className="py-20 mt-20 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10">
        {t("features.mainTitle")}
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden shadow-lg"
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