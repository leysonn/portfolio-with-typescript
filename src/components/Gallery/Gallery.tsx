import Video from '../Video/Video';
import styles from './Gallery.module.scss';

type GalleryProps = {
    video: {
        preview: string;
        webm?: string;
        mp4: string;
    };
    images: string[];
};

function Gallery({ video, images }: GalleryProps) {
    return (
        <section className={styles.imagesContainer}>
            <Video preview={video.preview} video_mp4={video.mp4} webm video_webm={video.webm} className={styles.video} />
            <div className={styles.images}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt="Project image" className={styles.image} />
                ))}
            </div>
        </section>
    );
}

export default Gallery;
