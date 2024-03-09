import { Link } from '@tanstack/react-router';
import Button from '../../Button/Button';
import ServiceCard from './ServiceCard/ServiceCard';
import styles from './Service.module.scss';
import { servicesList } from '../../../constants/servicesList';
import title_image from '../../../assets/images/homePage/service.png';
import avatar from '../../../assets/images/homePage/avatar2.png';
import Section from '../../Section/Section';

function Service() {
    return (
        <section id="service">
            <Section
                className={styles.serviceContent}
                titleContainerStyle={styles.titleContainer}
                name="Service"
                title={{ content: 'Making Complex Digital Products', style: styles.title }}
                subtitle="Agency provides a full service range including technical skills, design, business."
                aside={{
                    element: <img className={styles.titleImage} src={title_image} alt=" " draggable={false} />,
                    position: 'before',
                }}
            >
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
            </Section>
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
        </section>
    );
}

export default Service;