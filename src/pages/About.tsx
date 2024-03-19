import AboutGallery from '../components/AboutUs/AboutGallery/AboutGallery';
import CommentsCarousel from '../components/AboutUs/CommentsCarousel/CommentsCarousel';
import DescriptionSection from '../components/AboutUs/DescriptionSection/DescriptionSection';
import FaqSection from '../components/AboutUs/FaqSection/FaqSection';
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
                <CommentsCarousel />
                <FaqSection />
            </BackgroundDark>
        </main>
    );
}

export default About;
