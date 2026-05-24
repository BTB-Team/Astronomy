

import { useTranslation } from "react-i18next";

import {
  FaRocket,
  FaUsers,
  FaGlobe,
  FaCheckCircle,
  FaCalendarAlt,
  FaGraduationCap,
} from "react-icons/fa";

import { TbTelescope } from "react-icons/tb";

export default function MissionVisionValues() {
  const { t, i18n } = useTranslation();

  const isRTL = i18n.language === "fa";

  const missionCards = [
    {
      title: t("AboutMission.Education"),
      desc: t("AboutMission.edudisc"),
      icon: <FaGraduationCap size={30} />,
    },
    {
      title: t("AboutMission.observation"),
      desc: t("AboutMission.obsdisc"),
      icon: <TbTelescope size={30} />,
    },
    {
      title: t("AboutMission.commuity"),
      desc: t("AboutMission.commdisc"),
      icon: <FaUsers size={30} />,
    },
    {
      title: t("AboutMission.research"),
      desc: t("AboutMission.researchdisc"),
      icon: <FaRocket size={30} />,
    },
  ];

  const stats = [
    {
      number: "500+",
      label: t("AboutMission.members"),
      icon: <FaUsers size={26} />,
    },
    {
      number: "30+",
      label: t("AboutMission.events"),
      icon: <FaCalendarAlt size={26} />,
    },
    {
      number: "12+",
      label: t("AboutMission.province"),
      icon: <TbTelescope size={26} />,
    },
    {
      number: "8+",
      label: t("AboutMission.researchProject"),
      icon: <FaGlobe size={26} />,
    },
  ];

  const activities = [
    t("AboutValues.value1"),
    t("AboutValues.value2"),
    t("AboutValues.value3"),
    t("AboutValues.value4"),
    t("AboutValues.value5"),
  ];

  return (
    <section className="relative w-full overflow-hidden text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-25 bg-cover bg-center"
        style={{
          backgroundImage: "url('')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-[#0c0a22]" />

      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-600/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Mission Box */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
            <div className="w-14 h-14 rounded-2xl bg-purple-600/20 flex items-center justify-center mb-6">
              <FaRocket className="text-purple-400" size={30} />
            </div>

            <h2 className="text-4xl font-bold mb-4">
              {t("AboutMission.misionTitle")}
            </h2>

            <p className="text-gray-300 leading-8 mb-8">
              {t("AboutMission.misiondisc")}
            </p>
          </div>

          {/* Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {missionCards.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-7 hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-purple-600/20 text-purple-400 flex items-center justify-center mb-5">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 text-center shadow-xl"
            >
              <div className="text-purple-400 flex justify-center mb-4">
                {item.icon}
              </div>

              <h2 className="text-4xl font-bold mb-2">
                {item.number}
              </h2>

              <p className="text-gray-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
          {/* Values */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold mb-5">
              {t("AboutValues.value")}
            </h2>

            <p className="text-gray-300 leading-7 mb-6">
              {t("AboutValues.valuedisc")}
            </p>

            <div className="space-y-4">
              {activities.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle
                    size={22}
                    className="text-purple-400"
                  />

                  <span className="text-gray-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <button className="mt-8 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition-all duration-300">
              View All Events
            </button>
          </div>

          {/* Vision */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold mb-8">
              {t("AboutVisions.vision")}
            </h2>

            <div
              className={`relative space-y-10 ${
                isRTL
                  ? "border-r border-purple-500/30 pr-8"
                  : "border-l border-purple-500/30 pl-8"
              }`}
            >
              {[
                {
                  text: t("AboutVisions.visionDisc"),
                },
                {
                  text: t("AboutVisions.vision1"),
                },
                {
                  text: t("AboutVisions.vision2"),
                },
                {
                  text: t("AboutVisions.vision3"),
                },
                {
                  text: t("AboutVisions.vision4"),
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div
                    className={`absolute top-1 w-4 h-4 bg-purple-500 rounded-full border-4 border-[#06021A] ${
                      isRTL
                        ? "-right-[41px]"
                        : "-left-[41px]"
                    }`}
                  />

                  <p className="text-gray-300 leading-7">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}