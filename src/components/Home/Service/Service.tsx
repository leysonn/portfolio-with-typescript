import { Link } from '@tanstack/react-router';
import Button from '../../Button/Button';
import ServiceCard from './ServiceCard/ServiceCard';
import styles from './Service.module.scss';
import { servicesList } from '../../../constants/servicesList';
import title_image from '../../../assets/images/homePage/service.png';
import avatar from '../../../assets/images/homePage/avatar2.png';
//* temporarily
import Hr from '../../Hr/Hr';

function Service() {
    return (
        <section id="service">
            <div className={styles.serviceContent}>
                <img className={styles.titleImage} src={title_image} alt=" " draggable={false} />
                <div className={styles.titleContainer}>
                    <span className={styles.name}>Service</span>
                    <h2 className={styles.title}>Making Complex Digital Products</h2>
                    <p className={styles.description}>Agency provides a full service range including technical skills, design, business.</p>
                    <div className={styles.quoteContainer}>
                        <img src={avatar} alt="Аватар" />
                        <div>
                            <p>"Understanding, ability to put themselves in the merchant's shoes. It is meant to partner."</p>
                            <span>Jenny Murtaugh</span>
                        </div>
                    </div>
                    <Link to="/services">
                        <Button width={9.62} color="light" className={styles.button}>
                            Explore
                        </Button>
                    </Link>
                </div>
            </div>
            <div className={styles.serviceCards}>
                <div className={styles.titleContainer}>
                    <span className={styles.name}>Service</span>
                    <h3 className={styles.title}>How Our Agency Can Help</h3>
                </div>
                <div className={styles.container}>
                    {servicesList.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
            {/* temporarily */}
            <Hr />
        </section>
    );
}

export default Service;
