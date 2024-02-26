// import styles from './Project.module.scss';
import { Route } from '../../routes/portfolio/$projectId';

function Project() {
    const { projectId } = Route.useParams();

    return <h1>Project #{projectId}</h1>;
}

export default Project;
