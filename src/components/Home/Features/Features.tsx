import styles from './Features.module.scss';
import { Link } from '@tanstack/react-router';
import { featuresList } from '../../../constants/featuresList';
import Button from '../../Button/Button';
import features_image from '../../../assets/images/homePage/features.png';
import check_icon from '../../../assets/icons/check_mark.svg';
import card_icon from '../../../assets/icons/card_icon.svg';

function Features() {
    return (
        <section id="features">
            <div className={styles.featuresContent}>
                <img className={styles.featuresImage} src={features_image} alt=" " draggable={false} />
                <div className={styles.titleContainer}>
                    <span className={styles.name}>Features</span>
                    <h2 className={styles.title}>Give Your Site A New Look</h2>
                    <p className={styles.description}>Service range including technical skills, design, business understanding.</p>

                    <div className={styles.features}>
                        {featuresList.map((feature, index) => (
                            <div className={styles.feature} key={index}>
                                <img src={check_icon} alt=" " />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.featuresCards}>
                <div className={styles.titleContainer}>
                    <span className={styles.name}>Features</span>
                    <p className={styles.description}>Long run, and work as an extension of the merchant's team.</p>

                    <Link to="/blog">
                        <Button width={5.25} color="dark_transparent" className={styles.button}>
                            Read More
                        </Button>
                    </Link>
                </div>
                <div className={styles.cardContainer}>
                    <div className={styles.cardWhite}>
                        <img src={card_icon} alt=" " />
                        <h3 className={styles.cardTitle}>Professional</h3>
                        <p className={styles.cardDescription}>Full service range including technical skills, design.</p>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Accessibility</h3>
                        <p className={styles.cardDescription}>Business understanding, ability to put themselves.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
