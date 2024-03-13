import { ReasonsItem } from '../../constants/reasonsList';
import styles from './ReasonItem.module.scss';

function ReasonItem({ number, title }: ReasonsItem) {
    return (
        <div className={styles.reason}>
            <h3 className={styles.number}>{number}</h3>
            <h4 className={styles.title}>{title}</h4>
        </div>
    );
}

export default ReasonItem;
