import { useMemo, useState } from 'react';

/**
 * Custom hook to get the video duration and a function to set the metadata.
 *
 * @return {[string, (event: SyntheticEvent<HTMLVideoElement>) => void]} An array containing the formatted video duration and a function to set the metadata.
 */
function useVideoDuration(): [string, (duration: number) => void] {
    const [duration, setDuration] = useState(0);

    const formattedDuration = useMemo(() => {
        if (duration < 0 || isNaN(duration)) {
            return '0:00';
        }

        const minutes = Math.floor(duration / 60);
        const remainingSeconds = Math.floor(duration % 60);
        const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

        return minutes + ':' + formattedSeconds;
    }, [duration]);

    function setMetadata(duration: number): void {
        setDuration(duration);
    }

    return [formattedDuration, setMetadata];
}

export { useVideoDuration };
