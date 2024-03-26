import { Link } from '@tanstack/react-router';
import Button from '../../Button/Button';
import Faq from '../../Faq/Faq';
import Section from '../../Section/Section';
import styles from './FaqSection.module.scss';
import Hr from '../../Hr/Hr';

function FaqSection() {
    return (
        <>
            <Section
                className={styles.faqSection}
                titleContainerStyle={styles.titleContainer}
                name="Faq"
                title={{ content: 'Frequently Asked Questions', style: styles.title }}
                description={{
                    content: 'A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.',
                    style: styles.description,
                }}
                aside={{ element: <Faq theme="light" />, position: 'after' }}
            >
                <Link to="#contact">
                    <Button className={styles.button} color="dark_transparent" width={7.625}>
                        Ask us anything
                    </Button>
                </Link>
            </Section>
            <Hr />
        </>
    );
}

export default FaqSection;
