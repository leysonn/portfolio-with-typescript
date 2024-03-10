import { Route } from '../routes/portfolio/$projectId';
import { ProjectItem, projectsList } from '../constants/projectsList';
import Title from '../components/Title/Title';
import Back from '../components/Back/Back';
import ProjectTitle from '../components/Project/ProjectTitle/ProjectTitle';
import ProjectInfo from '../components/Project/ProjectInfo/ProjectInfo';
import ProjectSection from '../components/Project/ProjectSection/ProjectSection';
import ProjectImages from '../components/Project/ProjectImages/ProjectImages';

function Project() {
    const { projectId } = Route.useParams();
    const project: ProjectItem | undefined = projectsList.projects.find(project => project.id === projectId);

    if (!project)
        return (
            <Title description={`Project #${projectId} Not Found`} className="mb-20">
                4 0 4
            </Title>
        );

    return (
        <main>
            <Back to="portfolio" url="/portfolio" />
            <ProjectTitle project={project} />
            <ProjectInfo project={project} />
            <img className="xl:w-292.5 lg:w-250 md:w-180 sm:w-120 w-mobile mx-auto mt-17" src={project.images.main} alt="Project image" />
            <ProjectSection title="Problem" description={project.problem} />
            <ProjectImages project={project} />
            <ProjectSection title="Solution" description={project.solution} />
            {/* <Share /> */}
            {/* <Hr /> */}
            {/* <RelatedProjects /> */}
        </main>
    );
}

export default Project;
