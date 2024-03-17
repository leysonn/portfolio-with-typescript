import styles from './PartnersSection.module.scss';
import Hr from '../../Hr/Hr';
import { partnersList } from './partnersList';
import { Link } from '@tanstack/react-router';

function PartnersSection() {
    return (
        <section id="partners">
            <div className={styles.logoContainer}>
                {partnersList.map((item, index) => (
                    <Link to={item.url} key={index}>
                        <img className={styles.logo} src={item.image} alt={item.name + ' logotype'} draggable={false} />
                    </Link>
                ))}
            </div>
            <Hr />
        </section>
    );
}

export default PartnersSection;
