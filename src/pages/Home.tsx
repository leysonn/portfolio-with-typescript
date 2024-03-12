import HeroSection from '../components/HomeSections/HeroSection/HeroSection';
import AboutSection from '../components/HomeSections/AboutSection/AboutSection';
import PartnersSection from '../components/HomeSections/PartnersSection/PartnersSection';
import HowWeWorkSection from '../components/HomeSections/HowWeWorkSection/HowWeWorkSection';
import VideoReelSection from '../components/HomeSections/VideoReelSection/VideoReelSection';
import FeaturesSection from '../components/HomeSections/FeaturesSection/FeaturesSection';
import ServiceSection from '../components/HomeSections/ServiceSection/ServiceSection';

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
