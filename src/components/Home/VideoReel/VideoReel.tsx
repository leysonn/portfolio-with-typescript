import Video from './Video/Video';
import styles from './VideoReel.module.scss';

function VideoReel() {
    return (
        <section id="video-reel">
            <div className={styles.videoReelContent}>
                <Video />
                <div className={styles.titleContainer}>
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
