import { Link } from '@tanstack/react-router';
import styles from './Hero.module.scss';
import Button from '../../Button/Button';
import title_image from '../../../assets/images/homePage/hero.png';
import title_star from '../../../assets/images/homePage/title_star.svg';
import avatar from '../../../assets/images/homePage/avatar.png';

function Hero() {
    return (
        <section id="hero">
            <div className={styles.heroContent}>
                <img className={styles.titleImage} src={title_image} alt=" " draggable={false} />
                <div className={styles.title_container}>
                    <span className={styles.subtitle}>Modern Studio</span>
                    <img className={styles.star} src={title_star} alt=" " draggable={false} />
                    <h1 className={styles.title}>
                        We’re Help
                        <br />
                        To Build Your Dream Project
                    </h1>
                    <p className={styles.description}>
                        Agency provides a full service range including technical skills, design, business understanding.
                    </p>
                    <div className={styles.buttonContainer}>
                        <Link to="#about">
                            <Button width={9.62} color="light_accent">
                                How We Work
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button width={5.5} color="light_transparent">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                    <div className={styles.quoteContainer}>
                        <img src={avatar} alt="Аватар" />
                        <div>
                            <p>"Put themselves in the merchant's shoes"</p>
                            <span>Meta Inc.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;