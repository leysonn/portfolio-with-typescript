import DescriptionSection from '../components/AboutUs/DescriptionSection/DescriptionSection';
import Gallery from '../components/Gallery/Gallery';
import Title from '../components/Title/Title';
import { aboutGallery } from '../constants/aboutGallery';

function About() {
    return (
        <main>
            <Title>About Us</Title>
            <DescriptionSection />
            <Gallery video={aboutGallery.video} images={aboutGallery.images} />
        </main>
    );
}

export default About;
