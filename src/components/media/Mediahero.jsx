
import { useTranslation } from "react-i18next";  
import mediaBghero from "/assets/images/converted_image.webp";

 export default function MediaHero(){

  const { t , i18n } = useTranslation();
        const isRTL = i18n.language === "fa"

    return(

           <section className="relative overflow-hidden  min-h-screen flex items-center text-white bg-cover w-full"  style={{
            backgroundImage: `url(${mediaBghero})`,
          }} >
        
        <div className="relative z-10 max-w-3xl px-14">
          <h1 className="text-5xl md:text-6xl font-black leading-tight">
             {t("mediahero.title")}
          </h1>

          <p className="text-gray-100 text-lg mt-6 leading-8">
           {t("mediahero.desc1")}  <br />
              {t("mediahero.desc2")}   <br />
                   {t("mediahero.desc3")}
          </p>
        </div>
     

      </section>
    )
 }