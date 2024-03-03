import Title from '../../components/Title/Title';
import styles from './Blog.module.scss';

function Blog() {
    return (
        <main className={styles.container}>
            <Title
                title="Blog Articles"
                description="Agency provides a full service range including technical skills, design, business understanding."
                higher
            />
        </main>
    );
}

export default Blog;
