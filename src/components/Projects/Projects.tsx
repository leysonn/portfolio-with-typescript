import { useCallback, useState } from 'react';
import clsx from 'clsx';
import { projectsList } from '../../constants/projectsList';
import { sortProjects } from './sortProjects';
import TypeSelector from './TypeSelector/TypeSelector';
import ProjectCard from '../ProjectCard/ProjectCard';
import Dropdown from '../Form/Dropdown/Dropdown';
import styles from './Projects.module.scss';
import Button from '../Button/Button';
import { useForm } from 'react-hook-form';

type DropdownT = {
    type: string;
};

function Projects() {
    const allTypes: string = 'Show All';
    const sortedProjects = sortProjects(allTypes);

    const [selectedType, setSelectedType] = useState(allTypes);
    const [projectsCount, setProjectsCount] = useState(9);
    const { register } = useForm<DropdownT>();

    const handleSelectorClick = useCallback((event: React.MouseEvent<HTMLButtonElement>): void => {
        setSelectedType(event.currentTarget.innerText);
        setProjectsCount(9);
    }, []);

    const handleDropdownChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>): void => {
        setSelectedType(event.currentTarget.value);
        setProjectsCount(9);
    }, []);

    const handleLoadMoreClick = useCallback((): void => {
        setProjectsCount(projectsCount => projectsCount + 9);
    }, []);

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

            <form className={styles.projectsDropdown}>
                <Dropdown
                    options={[allTypes].concat(projectsList.types)}
                    value={selectedType}
                    register={register('type', { onChange: handleDropdownChange })}
                />
            </form>

            <div className={styles.projectsContent}>
                <div className={styles.projectsContainer}>
                    {sortedProjects[selectedType].slice(0, projectsCount).map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
                <Button
                    className={clsx(styles.button, projectsCount >= sortedProjects[selectedType].length && styles.hidden)}
                    width={10.62}
                    color="light"
                    onClick={handleLoadMoreClick}
                >
                    Load More
                </Button>
            </div>
        </section>
    );
}

export default Projects;
