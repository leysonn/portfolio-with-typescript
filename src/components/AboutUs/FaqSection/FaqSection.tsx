import Faq from '../../Faq/Faq';
import styles from './FaqSection.module.scss';

function FaqSection() {
    return (
        <section className={styles.faqSection}>
            <div className={styles.titleContainer}>
                <span className={styles.name}>Faq</span>
                <h2 className={styles.title}>Frequently Asked Questions</h2>
                <p className={styles.description}>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
            </div>

            <Faq />
        </section>
    );
}

export default FaqSection;
