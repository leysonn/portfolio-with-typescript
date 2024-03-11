import { ProjectItem } from '../../../constants/projectsList';
import ProjectCard from '../../ProjectCard/ProjectCard';
import styles from './RelatedProjects.module.scss';

type RelatedProject = {
    projects: ProjectItem[];
    currentProject: ProjectItem;
};

function RelatedProjects({ projects, currentProject }: RelatedProject) {
    const randomProjects = randomItemsFromArray(projects, currentProject);

    function randomItemsFromArray(array: ProjectItem[], currentProject: ProjectItem): ProjectItem[] {
        const copyArray: ProjectItem[] = [...array];
        const result: ProjectItem[] = [];

        while (result.length < 2 && copyArray.length > 0) {
            const randomIndex: number = Math.floor(Math.random() * copyArray.length);
            const randomItem: ProjectItem = copyArray[randomIndex];
            
            if (randomItem !== currentProject) {
                result.push(randomItem);
            }
            copyArray.splice(randomIndex, 1);
        }

        return result;
    }

    return (
        <div className={styles.relatedProjects}>
            <h2 className={styles.title}>Related Projects</h2>
            <div className={styles.projects}>
                {randomProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
}

export default RelatedProjects;
