




import { useTranslation } from "react-i18next";
import { teamImages } from "../data/TeamImage";
import AboutHero from "../components/About/AboutHero";
import Story from "../components/About/AboutStory";
import MissionVisionValues from "../components/About/MissionVision";
import TeamCard from "../components/About/TeamCard";
import PageTitle from "../components/pagetitle";
function About() {
  const { t } = useTranslation();

  const cards = t("teamCard", { returnObjects: true });

  return (
    <>
      <PageTitle title="titles.about"  />
      <AboutHero/>
      <Story/>
      <MissionVisionValues/>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto px-14 py-20">
        {cards.map((card) => {
          const img = teamImages.find((item) => item.id === card.id);

          return (
            <TeamCard
              key={card.id}
              name={card.name}
              role={card.role}
              quote={card.quote}
              image={img?.image}
            />
          );
        })}
      </div>
    </>
  );
}

export default About;