import HeroSection from '../components/Home/HeroSection/HeroSection';
import AboutSection from '../components/Home/AboutSection/AboutSection';
import Partners from '../components/Partners/Partners';
import HowWeWorkSection from '../components/Home/HowWeWorkSection/HowWeWorkSection';
import VideoReelSection from '../components/Home/VideoReelSection/VideoReelSection';
import FeaturesSection from '../components/Home/FeaturesSection/FeaturesSection';
import ServiceSection from '../components/Home/ServiceSection/ServiceSection';
import Hr from '../components/Hr/Hr';

function Home() {
    return (
        <main>
            <HeroSection />
            <Partners>
                <Hr />
            </Partners>
            <AboutSection />
            <HowWeWorkSection />
            <VideoReelSection />
            <FeaturesSection />
            <ServiceSection />
        </main>
    );
}

export default Home;
