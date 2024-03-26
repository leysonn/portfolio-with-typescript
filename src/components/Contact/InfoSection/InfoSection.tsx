import InfoCards from '../../InfoCards/InfoCards';
import styles from './InfoSection.module.scss';
import { infoList } from './infoList';

function InfoSection() {
    return (
        <section>
            <InfoCards className={styles.infoCards} info={infoList} />
        </section>
    );
}

export default InfoSection;