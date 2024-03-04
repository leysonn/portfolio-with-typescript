import styles from './Partners.module.scss';
import Hr from '../../Hr/Hr';
import { partnersList } from '../../../constants/partnersList';
import { Link } from '@tanstack/react-router';

function Partners() {
    return (
        <section id="partners">
            <div className={styles.logoContainer}>
                {partnersList.map((item, index) => (
                    <Link to={item.url} key={index}>
                        <img src={item.image} alt={item.name + ' logotype'} draggable={false} />
                    </Link>
                ))}
            </div>
            <Hr />
        </section>
    );
}

export default Partners;
