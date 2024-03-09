import { useState } from 'react';
import { useVideoDuration } from '../../hooks/useVideoDuration';
import styles from './Video.module.scss';
import play_icon from '../../assets/icons/play_icon.svg';

type VideoProps = {
    preview: string;
    video_mp4: string;
    webm?: boolean;
    video_webm: string;
    height: {
        default: number;
        mobile: number;
    };
};

function Video({ preview, video_mp4, webm = false, video_webm, height }: VideoProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setMetadata] = useVideoDuration();

    function handlePlayPause(): void {
        setIsPlaying(!isPlaying);
    }

    return (
        <div className={`${styles.videoWrapper} lg:h-${height.default} h-${height.mobile}`}>
            <video className={styles.video} onLoadedMetadata={setMetadata} hidden={!isPlaying} controls muted autoPlay>
                <source src={video_mp4} type="video/mp4" />
                {webm ? <source src={video_webm} type="video/webm" /> : null}
                Your browser does not support the video tag.
            </video>

            <div className={styles.preview} hidden={isPlaying}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={preview} alt="Видео превью" draggable={false} />
                    <div className={styles.mask} />
                    <button className={styles.playButton} onClick={handlePlayPause}>
                        <img src={play_icon} alt="Иконка воспроизведения" draggable={false} />
                    </button>
                </div>
                <span className={styles.duration}>{duration}</span>
            </div>
        </div>
    );
}

export default Video;
