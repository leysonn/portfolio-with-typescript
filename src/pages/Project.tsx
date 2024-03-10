import { Route } from '../routes/portfolio/$projectId';
import { ProjectItem, projectsList } from '../constants/projectsList';
import Title from '../components/Title/Title';
import Back from '../components/Back/Back';
import ProjectTitle from '../components/Project/ProjectTitle/ProjectTitle';
import ProjectInfo from '../components/Project/ProjectInfo/ProjectInfo';

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
            <img className="mx-auto mt-17" src={project.images.main} alt='Project image' />
            {/* <ProjectSection title="Problem" description={} /> */}
            {/* <Images /> */}
            {/* <ProjectSection title="Solution" description={} /> */}
            {/* <Share /> */}
            {/* <Hr /> */}
            {/* <RelatedProjects /> */}
        </main>
    );
}

export default Project;
