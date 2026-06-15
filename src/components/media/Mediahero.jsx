import { useTranslation } from "react-i18next";
import mediaBghero from "/assets/images/converted_image.webp";

export default function MediaHero() {
  const { t } = useTranslation();

  return (
    <section
      className="
      relative
      h-[90vh]
      flex
      items-center
      justify-center
      text-white
      bg-cover
      bg-center
      overflow-hidden
      mb-12
      "
      style={{
        backgroundImage: `url(${mediaBghero})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div
        className="
        relative
        z-10
        max-w-4xl
        mx-auto
        px-6
        text-center
        
        "
      >
        <h1
          className="
          text-4xl
          sm:text-5xl
          md:text-6xl
          font-black
          leading-tight
          mb-8
          "
        >
          {t("mediahero.title")}
        </h1>

        <p
          className="
          text-base
          sm:text-lg
          md:text-xl
          text-gray-100
          leading-8
          max-w-3xl
          mx-auto
          "
        >
          {t("mediahero.desc1")}
          <br />
          {t("mediahero.desc2")}
          {/* <br /> */}
          {t("mediahero.desc3")}
        </p>
      </div>
    </section>
  );
}