import './assets/scss/styles.scss';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Welcome from './components/Welcome';
import Showcase from './components/Showcase';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <div className="body_container">
                <Header/>
                <HeroSection />
                <Welcome />
                <Showcase />
                <AboutUs />
                <Footer />
            </div>
        </>
    )}

export default App;