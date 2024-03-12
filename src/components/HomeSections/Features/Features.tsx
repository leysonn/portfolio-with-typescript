import styles from './FeaturesSection.module.scss';
import { Link } from '@tanstack/react-router';
import { featuresList } from '../../../constants/featuresList';
import Button from '../../Button/Button';
import features_image from '../../../assets/images/homePage/features.png';
import card_icon from '../../../assets/icons/card_icon.svg';
import Section from '../../Section/Section';
import CheckMarks from '../../CheckMarks/CheckMarks';

function FeaturesSection() {
    return (
        <section id="features">
            <Section
                className={styles.featuresContent}
                titleContainerStyle={styles.titleContainer}
                name="Features"
                title={{ content: 'Give Your Site A New Look', style: styles.title }}
                subtitle="Service range including technical skills, design, business understanding."
                aside={{
                    element: <img className={styles.featuresImage} src={features_image} alt="Title image" draggable={false} />,
                    position: 'before',
                }}
            >
                <CheckMarks list={featuresList} textColor="dark-gray" />
            </Section>
            <Section
                className={styles.featuresCards}
                titleContainerStyle={styles.titleContainer}
                name="Features"
                description={{ content: "Long run, and work as an extension of the merchant's team.", style: styles.description }}
                aside={{
                    element: (
                        <div className={styles.cardContainer}>
                            <div className={styles.cardWhite}>
                                <img src={card_icon} alt="Card icon" />
                                <h3 className={styles.cardTitle}>Professional</h3>
                                <p className={styles.cardDescription}>Full service range including technical skills, design.</p>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.cardTitle}>Accessibility</h3>
                                <p className={styles.cardDescription}>Business understanding, ability to put themselves.</p>
                            </div>
                        </div>
                    ),
                    position: 'after',
                }}
            >
                <Link to="/blog">
                    <Button width={5.25} color="dark_transparent" className={styles.button}>
                        Read More
                    </Button>
                </Link>
            </Section>
        </section>
    );
}

export default FeaturesSection;
