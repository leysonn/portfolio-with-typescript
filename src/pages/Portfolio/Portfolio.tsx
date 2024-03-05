import Projects from '../../components/Projects/Projects';
import Title from '../../components/Title/Title';
import styles from './Portfolio.module.scss';

function Portfolio() {
    return (
        <main className={styles.container}>
            <Title>Portfolio</Title>
            <Projects />
        </main>
    );
}

export default Portfolio;
