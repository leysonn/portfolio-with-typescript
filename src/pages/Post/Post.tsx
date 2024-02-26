// import styles from './Post.module.scss';
import { Route } from '../../routes/blog/$postId';

function Post() {
    const { postId } = Route.useParams();

    return <h1>Post #{postId}</h1>;
}

export default Post;
