import { Link } from '@tanstack/react-router';
import styles from './About.module.scss';
import Button from '../../Button/Button';
import StatItem from './StatItem/StatItem';
import { statList } from '../../../constants/statList';
import about_image from '../../../assets/images/homePage/about.png';

function About() {
    return (
        <section id="about">
                <div className={styles.aboutContent}>
                    <img className={styles.aboutImage} src={about_image} alt=" " draggable={false} />
                    <div className={styles.titleContainer}>
                        <span className={styles.name}>About</span>
                        <h2 className={styles.title}>An Experience Design Agency</h2>
                        <span className={styles.subtitle}>Provides a full service range</span>
                        <p className={styles.description}>
                            Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the
                            merchant's team.
                        </p>
                        <Link to="/about">
                            <Button width={8.62} color="light" className={styles.button}>
                                About Us
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className={styles.statContainer}>
                    {statList.map((item, index) => (
                        <StatItem key={index} value={item.value} description={item.description} />
                    ))}
                </div>
        </section>
    );
}

export default About;
