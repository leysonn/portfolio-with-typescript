import { projectsList as defaultProjectsList, ProjectItem, ProjectsList } from '../../constants/projectsList';

type SortedProjects = {
    [key: string]: ProjectItem[];
};

export function sortProjects(allProjects: string, projectsList: ProjectsList = defaultProjectsList): SortedProjects {
    const sortedProjects: SortedProjects = {};
    sortedProjects[allProjects] = projectsList.projects;

    projectsList.types.forEach(type => {
        sortedProjects[type] = projectsList.projects.filter(project => project.type === type);
    });

    return sortedProjects;
}
