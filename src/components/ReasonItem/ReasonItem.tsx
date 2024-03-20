import styles from './ReasonItem.module.scss';

type ReasonsItemProps = {
    number: number;
    title: string;
};

function ReasonItem({ number, title }: ReasonsItemProps) {
    return (
        <li className={styles.reason}>
            <h3 className={styles.number}>{number}</h3>
            <h4 className={styles.title}>{title}</h4>
        </li>
    );
}

export default ReasonItem;
