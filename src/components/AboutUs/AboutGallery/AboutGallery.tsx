import { aboutMedia } from './aboutMedia';
import Gallery from '../../Gallery/Gallery';

function AboutGallery() {
    return <Gallery video={aboutMedia.video} images={aboutMedia.images} />;
}

export default AboutGallery;
