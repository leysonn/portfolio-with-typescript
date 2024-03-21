import { SyntheticEvent, useCallback, useState } from 'react';
import { useVideoDuration } from '../../hooks/useVideoDuration';
import styles from './Video.module.scss';
import play_icon from '../../assets/icons/play_icon.svg';

type VideoProps = {
    preview: string;
    video_mp4: string;
    webm?: boolean;
    video_webm?: string;
    className?: string;
};

function Video({ preview, video_mp4, webm = false, video_webm, className }: VideoProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setMetadata] = useVideoDuration();

    const handlePlayPause = useCallback((): void => {
        setIsPlaying(isPlaying => !isPlaying);
    }, []);

    const handleMetadata = useCallback(
        (event: SyntheticEvent<HTMLVideoElement>): void => {
            setMetadata(event.currentTarget.duration);
        },
        [setMetadata],
    );

    return (
        <div className={styles.videoWrapper + ' ' + className}>
            <video className={styles.video} onLoadedMetadata={handleMetadata} hidden={!isPlaying} controls muted autoPlay>
                <source src={video_mp4} type="video/mp4" />
                {webm ? <source src={video_webm} type="video/webm" /> : null}
                Your browser does not support the video tag.
            </video>

            <div className={styles.preview} hidden={isPlaying}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={preview} alt="Video preview" draggable={false} />
                    <div className={styles.mask} />
                    <button className={styles.playButton} onClick={handlePlayPause}>
                        <img className={styles.playIcon} src={play_icon} alt="Play icon" draggable={false} />
                    </button>
                </div>
                <span className={styles.duration}>{duration}</span>
            </div>
        </div>
    );
}

export default Video;
