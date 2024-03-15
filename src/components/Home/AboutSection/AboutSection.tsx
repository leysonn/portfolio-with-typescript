import { Link } from '@tanstack/react-router';
import { statList } from '../../../constants/statList';
import styles from './AboutSection.module.scss';
import Button from '../../Button/Button';
import StatCards from '../../StatCards/StatCards';
import Section from '../../Section/Section';
import about_image from '../../../assets/images/homePage/about.png';

function AboutSection() {
    return (
        <section id="about">
            <Section
                className={styles.aboutContent}
                titleContainerStyle={styles.titleContainer}
                name="About"
                title={{ content: 'An Experience Design Agency', style: styles.title }}
                subtitle="Provides a full service range"
                description={{
                    content:
                        "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.",
                    style: styles.description,
                }}
                aside={{ element: <img className={styles.aboutImage} src={about_image} alt="Title image" draggable={false} />, position: 'before' }}
            >
                <Link to="/about">
                    <Button width={8.62} color="light" className={styles.button}>
                        About Us
                    </Button>
                </Link>
            </Section>
            <StatCards className={styles.statCards} stats={statList} />
        </section>
    );
}

export default AboutSection;
