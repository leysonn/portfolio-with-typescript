import styles from './Features.module.scss';
import { featuresList } from '../../../constants/featuresList';
import features_image from '../../../assets/images/homePage/features.png';
import check_icon from '../../../assets/icons/check_mark.svg';

function Features() {
    return (
        <section id="features">
            <div className={styles.featuresContent}>
                <img className={styles.featuresImage} src={features_image} alt=" " draggable={false} />
                <div className={styles.title_container}>
                    <span className={styles.name}>Features</span>
                    <h2 className={styles.title}>Give Your Site A New Look</h2>
                    <p className={styles.description}>Service range including technical skills, design, business understanding.</p>

                    <div className={styles.features}>
                        {featuresList.map((feature, index) => (
                            <div className={styles.feature} key={index}>
                                <img src={check_icon} alt=" " />
                                <h3>{feature}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
