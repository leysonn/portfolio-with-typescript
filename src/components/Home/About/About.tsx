import styles from './About.module.scss';
import Button from '../../Button/Button';
import about_image from '../../../assets/images/homePage/about.png';
import { Link } from '@tanstack/react-router';

function About() {
    return (
        <section id="hero">
            <div className={styles.container}>
                <div className={styles.heroContent}>
                    <img className={styles.aboutImage} src={about_image} alt=" " draggable={false} />
                    <div className={styles.title_container}>
                        <span className={styles.name}>About</span>
                        <h2 className={styles.title}>An Experience Design Agency</h2>
                        <span className={styles.subtitle}>Provides a full service range</span>
                        <p className={styles.description}>
                            Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the
                            merchant's team.
                        </p>
                        <Link to='/about' className={styles.button}>
                            <Button width={8.62} color="light">
                            About Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
