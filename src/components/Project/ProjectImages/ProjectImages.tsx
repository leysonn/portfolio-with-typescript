import { ProjectItem } from '../../../constants/projectsList';
import Video from '../../Video/Video';
import styles from './ProjectImages.module.scss';

type ProjectImagesProps = {
    project: ProjectItem;
};

function ProjectImages({ project }: ProjectImagesProps) {
    return (
        <div className={styles.imagesContainer}>
            <Video preview={project.video.preview} video_mp4={project.video.mp4} webm video_webm={project.video.webm} className={styles.video} />
            <div className={styles.images}>
                {project.images.other.map((image, index) => (
                    <img key={index} src={image} alt="Project image" className={styles.image} />
                ))}
            </div>
        </div>
    );
}

export default ProjectImages;
