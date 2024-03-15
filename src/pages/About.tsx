import DescriptionSection from '../components/AboutUs/DescriptionSection/DescriptionSection';
import FeaturesSection from '../components/AboutUs/FeaturesSection/FeaturesSection';
import Gallery from '../components/Gallery/Gallery';
import Title from '../components/Title/Title';
import { aboutGallery } from '../constants/aboutGallery';

function About() {
    return (
        <main>
            <Title>About Us</Title>
            <DescriptionSection />
            <Gallery video={aboutGallery.video} images={aboutGallery.images} />
            <FeaturesSection />
        </main>
    );
}

export default About;
