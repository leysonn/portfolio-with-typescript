import { useState } from 'react';
import { useVideoDuration } from '../../../../hooks/useVideoDuration';
import styles from './Video.module.scss';
import video_mp4 from '../../../../assets/videos/test-video.mp4';
import video_webm from '../../../../assets/videos/test-video.webm';
import preview from '../../../../assets/images/homePage/preview.png';
import play_icon from '../../../../assets/icons/play.svg';

function Video() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setMetadata] = useVideoDuration();

    function handlePlayPause(): void {
        setIsPlaying(!isPlaying);
    }

    return (
        <div className={styles.videoWrapper}>
            <video className={styles.video} onLoadedMetadata={setMetadata} hidden={!isPlaying} controls muted autoPlay>
                <source src={video_mp4} type="video/mp4" />
                <source src={video_webm} type="video/webm" />
                Your browser does not support the video tag.
            </video>

            <div className={styles.preview} hidden={isPlaying}>
                <div className={styles.imageContainer}>
                    <img src={preview} alt="Видео превью" draggable={false} />
                    <div className={styles.mask} />
                    <button className={styles.playButton} onClick={handlePlayPause} >
                        <img src={play_icon} alt="Иконка воспроизведения" draggable={false} />
                    </button>
                </div>
                <span className={styles.duration}>{duration}</span>
            </div>
        </div>
    );
}

export default Video;
