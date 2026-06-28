import React from "react";
import { FaInstagram, FaTwitter, FaWhatsapp ,  FaTiktok} from "react-icons/fa";
import { RiTelegramLine } from "react-icons/ri";
import { CiYoutube,  CiFacebook } from "react-icons/ci";
import { PiTiktokLogoThin } from "react-icons/pi";
export default function SocialLinks() {
    return (
        <div className="flex  gap-1 text-lg ">
    
    <a
        href="https://www.instagram.com/afghanistan_astronomy?igsh=Znc2aDlwbDdnbmRt"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer text-white hover:bg-black/25  p-1 md:p-2 rounded-full transition text-[30px] md:text-[21px]"
    >
        <FaInstagram />
    </a>

    <a
        href="https://youtube.com/@afghanistan_astronomy?si=plEHdU15lJgj5k9d"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer text-white hover:bg-black/25 p-1 md:p-2 rounded-full transition text-[30px] md:text-[22px]"
    >
        <CiYoutube  />
    </a>

    <a
        href="https://whatsapp.com/channel/0029VbCFmDS3wtbB9X1E0y2o"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer text-white hover:bg-black/25 p-1 md:p-2 rounded-full transition text-[30px] md:text-[22px]"
    >
        <FaWhatsapp  />
    </a>

    <a
        href="https://www.facebook.com/profile.php?id=61581644201680"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer text-white hover:bg-black/25 p-1  md:p-2 rounded-full transition text-[30px] md:text-[22px]"
    >
        <CiFacebook  />
    </a>

    <a
        href="https://www.tiktok.com/@afghanistan_astronomy"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer text-white hover:bg-black/25 p-1 md:p-2 rounded-full  transition  text-[30px] md:text-[22px]"
    >
        <PiTiktokLogoThin  />
    </a>
      <a
        href="https://t.me/Galaxies011"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer text-white hover:bg-black/25 p-1 md:p-2 rounded-full  transition  text-[30px] md:text-[22px]"
    >
        <RiTelegramLine   />
    </a>

</div>
   
    );
}