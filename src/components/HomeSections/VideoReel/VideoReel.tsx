import Video from '../../Video/Video';
import styles from './VideoReel.module.scss';
import video_mp4 from '../../../assets/videos/test-video.mp4';
import video_webm from '../../../assets/videos/test-video.webm';
import preview from '../../../assets/images/homePage/preview.png';

function VideoReel() {
    return (
        <section id="video-reel">
            <div className={styles.videoReelContent}>
                <Video preview={preview} video_mp4={video_mp4} webm video_webm={video_webm} height={{ default: 92, mobile: 52 }} />
                <div className={styles.title_container}>
                    <span className={styles.name}>Video Reel</span>
                    <h2 className={styles.title}>Unlock The Greatest Value Possible</h2>
                    <p className={styles.description}>
                        Design, business understanding, ability to put themselves in the merchant's shoes meant to partner.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default VideoReel;
