import { ProjectItem } from '../../../constants/projectsList';
import styles from './ProjectTitle.module.scss';

type ProjectTitleProps = {
    project: ProjectItem;
};

function ProjectTitle({ project }: ProjectTitleProps) {
    return (
        <section className={styles.titleContainer}>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.subtitle}>Agency provides a full service range including technical skills, design, business understanding.</p>
            <p className={styles.description}>{project.description}</p>
        </section>
    );
}

export default ProjectTitle;
