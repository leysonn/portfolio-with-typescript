import Title from '../../components/Title/Title';
import styles from './About.module.scss';

function About() {
    return (
        <main className={styles.container}>
            <Title title="About Us" description="Agency provides a full service range including technical skills, design, business understanding." />
        </main>
    );
}

export default About;
