import Hero from "../components/home/Hero";
import AstronomyAboutSection from "../components/home/AstronomyAbout";
import Vision from "../components/home/Vision";
import Galary from   "../components/home/Gallery"; 
import Features  from   "../components/home/Features";
import PageTitle from "../components/pagetitle";

const Home = () => {
    return ( 
        <div className="w-full h-auto">
            <PageTitle title="titles.home"  />
            <Hero/>
            <AstronomyAboutSection/>
            <Vision/>
            <Galary/>
            <Features/>
        </div>
     );
}
 
export default Home;