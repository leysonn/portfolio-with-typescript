import { Link } from '@tanstack/react-router';
import { ProjectItem } from '../../constants/projectsList';
import styles from './ProjectCard.module.scss';

type ProjectCardProps = {
    project: ProjectItem;
};

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link
            to={'/portfolio/' + project.id}
            mask={{ to: '/portfolio/' + project.name.replace(' ', '-').toLowerCase() }}
            className={styles.projectCard}
        >
            <div className={styles.imageContainer}>
                <img className={styles.image} src={project.images.main} alt=" " draggable={false} />
                <div className={styles.mask} />
            </div>
            <div className={styles.projectText}>
                <span className={styles.type}>{project.type}</span>
                <h2 className={styles.title}>{project.name}</h2>
            </div>
        </Link>
    );
}

export default ProjectCard;
