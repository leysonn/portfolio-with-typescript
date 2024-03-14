import video_mp4 from '../assets/videos/test-video.mp4';
import video_webm from '../assets/videos/test-video.webm';
import preview from '../assets/images/homePage/preview.png';
import image1 from '../assets/images/aboutUs/image1.png';
import image2 from '../assets/images/aboutUs/image2.png';
import image3 from '../assets/images/aboutUs/image3.png';
import image4 from '../assets/images/aboutUs/image4.png';

export type AboutGallery = {
    video: {
        preview: string;
        webm: string;
        mp4: string;
    };
    images: string[];
};

export const aboutGallery: AboutGallery = {
    video: {
        preview: preview,
        webm: video_webm,
        mp4: video_mp4,
    },
    images: [image1, image2, image3, image4],
};
