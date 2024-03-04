import Title from '../../components/Title/Title';
import styles from './Blog.module.scss';

function Blog() {
    return (
        <main className={styles.container}>
            <Title higher>Blog Articles</Title>
        </main>
    );
}

export default Blog;
