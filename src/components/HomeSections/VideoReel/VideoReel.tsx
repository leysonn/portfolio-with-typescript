import Video from '../../Video/Video';
import styles from './VideoReel.module.scss';
import video_mp4 from '../../../assets/videos/test-video.mp4';
import video_webm from '../../../assets/videos/test-video.webm';
import preview from '../../../assets/images/homePage/preview.png';
import Section from '../../Section/Section';

function VideoReel() {
    return (
        <section id="video-reel">
            <Section
                className={styles.videoReelContent}
                titleContainerStyle={styles.titleContainer}
                name="Video Reel"
                title={{ content: 'Unlock The Greatest Value Possible', style: styles.title }}
                description={{
                    content: "Design, business understanding, ability to put themselves in the merchant's shoes meant to partner.",
                    style: styles.description,
                }}
                aside={{
                    element: <Video preview={preview} video_mp4={video_mp4} webm video_webm={video_webm} height={{ default: 92, mobile: 52 }} />,
                    position: 'before',
                }}
            />
        </section>
    );
}

export default VideoReel;
