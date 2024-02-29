import styles from './StatItem.module.scss';
import { StatListItem } from '../../../../constants/statList';

function StatItem({ value, description }: StatListItem) {
    return (
        <div className={styles.stat}>
            <h3 className={styles.number}>{value}</h3>
            <span className={styles.description}>{description}</span>
        </div>
    );
}

export default StatItem;
