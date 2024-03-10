import { Link } from '@tanstack/react-router';
import { ProjectItem } from '../../../constants/projectsList';
import styles from './ProjectInfo.module.scss';

type ProjectInfoProps = {
    project: ProjectItem;
};

function ProjectInfo({ project }: ProjectInfoProps) {
    return (
        <div className={styles.infoContainer}>
            <div className={styles.categories}>
                <span className={styles.title}>Category</span>
                {project.categories.map((category, index) => (
                    <span key={index} className={styles.category}>
                        {category}
                    </span>
                ))}
            </div>
            <div>
                <span className={styles.title}>Client</span>
                <Link to={project.client.url}>
                    <img className={styles.client} src={project.client.logo} alt={project.client.name} draggable={false} />
                </Link>
            </div>
            <div className={styles.date}>
                <span className={styles.title}>Date</span>
                <time dateTime={project.date.toISOString()}>{project.date.toLocaleString('en-US', { month: 'short', year: 'numeric' })}</time>
            </div>
        </div>
    );
}

export default ProjectInfo;
