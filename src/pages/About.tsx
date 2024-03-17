import AboutGallery from '../components/AboutUs/AboutGallery/AboutGallery';
import DescriptionSection from '../components/AboutUs/DescriptionSection/DescriptionSection';
import FeaturesSection from '../components/AboutUs/FeaturesSection/FeaturesSection';
import TeamCarousel from '../components/AboutUs/TeamCarousel/TeamCarousel';
import BackgroundDark from '../components/BackgroundDark/BackgroundDark';
import Title from '../components/Title/Title';

function About() {
    return (
        <main>
            <Title>About Us</Title>
            <DescriptionSection />
            <AboutGallery />
            <FeaturesSection />
            <BackgroundDark>
                <TeamCarousel />
            </BackgroundDark>
        </main>
    );
}

export default About;
