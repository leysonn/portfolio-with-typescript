import styles from './Partners.module.scss';
import { partnersList } from '../../helpers/partnersList';

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
            <hr className={styles.hr} />
        </section>
    );
}

export default Partners;
