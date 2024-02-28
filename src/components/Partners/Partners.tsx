import styles from './Partners.module.scss';
import Hr from '../Hr/Hr';
import { partnersList } from '../../constants/partnersList';

function Partners() {
    return (
        <section id="partners">
            <div className={styles.logoContainer}>
                {partnersList.map(item => (
                    <a href={item.url}>
                        <img src={item.image} alt={item.name + ' logotype'} />
                    </a>
                ))}
            </div>
            <Hr />
        </section>
    );
}

export default Partners;
