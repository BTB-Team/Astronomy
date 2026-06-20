import { useTranslation } from "react-i18next";
import { teamImages } from "../data/TeamImage";
import AboutHero from "../components/About/AboutHero";
import Story from "../components/About/AboutStory";
import MissionVisionValues from "../components/About/MissionVision";
import TeamCard from "../components/About/TeamCard";
import PageTitle from "../components/pagetitle";
function About() {
      // const { t } = useTranslation();
     
      const { t , i18n } = useTranslation();
      //  const isRTL = i18n.language === "fa"
  const cards = t("teamCard", {
    returnObjects: true,
  });

      

  return (
    <>

      <PageTitle title="titles.about"  />
      <AboutHero/>
      <Story/>
      <MissionVisionValues/>

   

<section className="mx-auto px-2 sm:px-8 lg:px-8 py-16">

  <h2 className="text-center text-4xl sm:text-5xl font-bold text-white mb-12">
             {i18n.language === "fa" ? "اعضای تیم" : "Team Members"}

  </h2>

  <div
    className="
    grid
    grid-cols-1
    lg:grid-cols-2
    gap-8
    lg:gap-8
    border-purple-950/10
    "
  >
    {cards.map((card) => {
      const img = teamImages.find(
        (item) => item.id === card.id
      );

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

</section>
    </>
  );
}

export default About;