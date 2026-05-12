import React from "react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-screen object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/hero1video.webm" type="video/webm" />
        <source src="/hero1video.mp4" type="video/mp4" />
      </video>


      {/* Content */}
      <div className="relative flex  h-screen w-full text-center justify-around items-center  p-4">

        <h1 className="text-white text-5xl md:text-7xl font-bold">
          <span className="text-white ">انجمن سناره شناسی افغانستان  </span>
        </h1>
     
       <input type="text" placeholder="search" className="bg-white text-black items-center border border-black/30 rounded-xl  w-[15%] h-[5%]"></input>
     
      </div>
    </section>
  );
}