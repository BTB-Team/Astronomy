import Hero from "../components/home/Hero";
import AstronomyAboutSection from "../components/home/AstronomyAbout";

const Home = () => {
    return ( 
        <div className="w-full h-auto">
            <Hero/>
            <AstronomyAboutSection/>
        </div>
     );
}
 
export default Home;