import { Link } from '@tanstack/react-router';
import { statList } from '../../../constants/statList';
import styles from './About.module.scss';
import Button from '../../Button/Button';
import StatItem from './StatItem/StatItem';
import Section from '../../Section/Section';
import about_image from '../../../assets/images/homePage/about.png';

function About() {
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
                aside={{ element: <img className={styles.aboutImage} src={about_image} alt=" " draggable={false} />, position: 'before' }}
            >
                <Link to="/about">
                    <Button width={8.62} color="light" className={styles.button}>
                        About Us
                    </Button>
                </Link>
            </Section>
            <div className={styles.statContainer}>
                {statList.map((item, index) => (
                    <StatItem key={index} value={item.value} description={item.description} />
                ))}
            </div>
        </section>
    );
}

export default About;
