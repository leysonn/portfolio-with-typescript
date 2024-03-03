import Title from "../../components/Title/Title";
import styles from './Contact.module.scss';

function Contact() {
    return (
        <main className={styles.container}>
            <Title title="Contact" description="Agency provides a full service range including technical skills, design, business understanding." />
        </main>
    );
}

export default Contact;