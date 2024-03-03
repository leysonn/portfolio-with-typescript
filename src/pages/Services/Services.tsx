import Title from '../../components/Title/Title';
import styles from './Services.module.scss';

function Services() {
    return (
        <main className={styles.container}>
            <Title title="Services" description="Agency provides a full service range including technical skills, design, business understanding." />
        </main>
    );
}

export default Services;
