import DescriptionSection from '../components/AboutUs/DescriptionSection/DescriptionSection';
import FeaturesSection from '../components/AboutUs/FeaturesSection/FeaturesSection';
import BackgroundDark from '../components/BackgroundDark/BackgroundDark';
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
            <BackgroundDark>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus est odio accusamus velit ipsam nemo eius praesentium autem quo
                nesciunt error optio libero, laudantium, corrupti voluptatibus, quidem totam natus labore.
            </BackgroundDark>
        </main>
    );
}

export default About;
