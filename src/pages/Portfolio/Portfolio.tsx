import Title from '../../components/Title/Title';
import styles from './Portfolio.module.scss';

function Portfolio() {
    return (
        <main className={styles.container}>
            <Title title="Portfolio" description="Agency provides a full service range including technical skills, design, business understanding." />
        </main>
    );
}

export default Portfolio;
