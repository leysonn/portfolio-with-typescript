import HeroSection from '../components/Home/HeroSection/HeroSection';
import AboutSection from '../components/Home/AboutSection/AboutSection';
import PartnersSection from '../components/Home/PartnersSection/PartnersSection';
import HowWeWorkSection from '../components/Home/HowWeWorkSection/HowWeWorkSection';
import VideoReelSection from '../components/Home/VideoReelSection/VideoReelSection';
import FeaturesSection from '../components/Home/FeaturesSection/FeaturesSection';
import ServiceSection from '../components/Home/ServiceSection/ServiceSection';

function Home() {
    return (
        <main>
            <HeroSection />
            <PartnersSection />
            <AboutSection />
            <HowWeWorkSection />
            <VideoReelSection />
            <FeaturesSection />
            <ServiceSection />
        </main>
    );
}

export default Home;
