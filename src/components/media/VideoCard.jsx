import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { useTranslation } from "react-i18next";
export default function VideoCard({ video }) {

  const [playing, setPlaying] = useState(false);

      const { t , i18n } = useTranslation();
      const isRTL = i18n.language === "fa"

  return (
    <div className="bg-purple-950/20 rounded-2xl overflow-hidden border border-white/10 hover:border-indigo-500 transition">

      {!playing ? (

        <div
          className="relative cursor-pointer group"
          onClick={() => setPlaying(true)}
        >

          {/* Poster */}

          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-[220px] object-cover"
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">

            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition">

              <FaPlay className="text-white text-xl ml-1" />

            </div>

          </div>  
          <span className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-3 py-1 rounded">

            {video.duration}

          </span>

        </div>

      ) : (

        <iframe
          className="w-full h-[220px]"
          src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
          title={video.vName}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

      )}

      {/* Content */}

      <div className="p-5">

        <h3 className="text-white text-lg font-semibold line-clamp-2">

          {t(video.titlekey)}

        </h3>
{/* 
        <p className="text-gray-300 text-sm mt-2">

         {t(video.categorykey)}

        </p> */}

      </div>

    </div>
  );
}





