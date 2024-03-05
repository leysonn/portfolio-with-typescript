import { useState, MouseEvent } from 'react';
import { projectsList } from '../../constants/projectsList';
import { sortProjects } from './sortProjects';
import TypeSelector from './TypeSelector/TypeSelector';
import ProjectCard from './ProjectCard/ProjectCard';
import styles from './Projects.module.scss';
import Button from '../Button/Button';

function Projects() {
    const allTypes: string = 'Show All';
    const sortedProjects = sortProjects(allTypes);

    const [selectedType, setSelectedType] = useState(allTypes);
    const [projectsCount, setProjectsCount] = useState(9);

    function handleSelectorClick(event: MouseEvent<HTMLButtonElement>) {
        setSelectedType(event.currentTarget.innerText);
    }

    return (
        <section id="projects">
            <div className={styles.projectsSelector}>
                <TypeSelector
                    type={allTypes}
                    onClick={handleSelectorClick}
                    count={sortedProjects[allTypes].length}
                    active={selectedType === allTypes}
                />
                {projectsList.types.map((type, index) => (
                    <TypeSelector
                        key={index}
                        type={type}
                        onClick={handleSelectorClick}
                        count={sortedProjects[type].length}
                        active={type === selectedType}
                    />
                ))}
            </div>
            <div className={styles.projectsContent}>
                <div className={styles.projectsContainer}>
                    {sortedProjects[selectedType].slice(0, projectsCount).map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
                <Button
                    className={styles.button + (projectsCount >= projectsList.projects.length ? ' ' + styles.hidden : '')}
                    width={10.62}
                    color="light"
                    onClick={() => setProjectsCount(projectsCount + 9)}
                >
                    Load More
                </Button>
            </div>
        </section>
    );
}

export default Projects;
