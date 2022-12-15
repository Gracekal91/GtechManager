import Header from "../components/share/Header";
import HeroSection from "../components/home/HeroSection";
import Welcome from "../components/home/Welcome";
import Showcase from "../components/home/Showcase";
import AboutUs from "../components/home/AboutUs";

const Home = () => {
    return (
        <>
            <Header/>
            <HeroSection/>
            <Welcome/>
            <Showcase/>
            <AboutUs/>
        </>
    )
}

export default Home;