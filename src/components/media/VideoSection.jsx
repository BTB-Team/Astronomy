
import { videos } from "../../data/videos";
import { FaYoutube } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import VideoCard from "./VideoCard"
import { useTranslation } from "react-i18next";
export default function VideoSection() {

  const { t , i18n } = useTranslation();
      const isRTL = i18n.language === "fa"
  return (
    <section className="border border-white/10 rounded-3xl p-6 md:p-10">
   
       <SectionTitle
          title= {t("videoSection.title")}
          desc={t("videoSection.desc")}
        />
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

  {videos.map((video) => (
    <VideoCard
      key={video.id}
      video={video}
    />
  ))}

</div>
   <div className="flex items-center justify-center flex-wrap gap-4 m-8">
        <a
          href="https://www.youtube.com/@Afghanistan_Astronomy"
          target="_blank"
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-4 rounded-xl flex items-center gap-2"
        >
          <FaYoutube />
          {t("videoSection.vbtn")}
        </a>
      </div>
    </section>
  );
}