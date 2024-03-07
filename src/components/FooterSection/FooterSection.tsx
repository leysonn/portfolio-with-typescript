import { Link } from '@tanstack/react-router';
import Section from '../Section/Section';
import styles from './FooterSection.module.scss';
import Button from '../Button/Button';
import contactFooterImage from '../../assets/images/footerImage.png'

function FooterSection() {
    return (
        <section id="contact-footer">
            <Section
                className={styles.contactFooterContent}
                titleContainerStyle={styles.titleContainer}
                title={{content: "Help To Build Your Dream Project", style: styles.title}}
                description={{content: "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.", style: styles.description}}
                aside={{element: <img className={styles.image} src={contactFooterImage} alt=" " draggable={false} />, position: 'before'}}
            >
                <Link to="/contact">
                    <Button color="light" width={9.62} className={styles.button}>
                        Contact Now
                    </Button>
                </Link>
            </Section>
        </section>
    );
}

export default FooterSection;
