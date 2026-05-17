import Hero from "./Hero";
import AstronomyAboutSection from "./AstronomyAbout";
import Vision from "./Vision";
import Galary from "./Gallery";
import Features from "./Features";

const Home = () => {
    return ( 
        <div className="w-full h-auto">
            <Hero/>
            <AstronomyAboutSection/>
            <Vision/>
            <Galary/>
            <Features/>
        </div>
     );
}
 
export default Home;