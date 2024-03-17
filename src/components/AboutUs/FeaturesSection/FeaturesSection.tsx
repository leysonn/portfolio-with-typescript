import styles from './FeaturesSection.module.scss';
import { statList } from './statList';
import card_icon from '../../../assets/icons/card_icon.svg';
import Section from '../../Section/Section';
import StatCards from '../../StatCards/StatCards';

function FeaturesSection() {
    return (
        <section id="features">
            <Section
                className={styles.featuresCards}
                titleContainerStyle={styles.titleContainer}
                name="Features"
                title={{ content: "Long run, and work as an extension of the merchant's team.", style: styles.title }}
                description={{
                    content: "Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension.",
                    style: styles.description,
                }}
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
            />
            <StatCards className={styles.statCards} stats={statList} />
        </section>
    );
}

export default FeaturesSection;
