import { Fragment } from 'react';
import styles from './ProjectSection.module.scss';

type ProjectSectionProps = {
    title: string;
    description: string;
};

function ProjectSection({ title, description }: ProjectSectionProps) {
    const descriptionLines = description.split('\n');

    return (
        <section className={styles.sectionContainer}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>
                {descriptionLines.map((line, index) => (
                    <Fragment key={index}>
                        {line}
                        <br />
                    </Fragment>
                ))}
            </p>
        </section>
    );
}

export default ProjectSection;
