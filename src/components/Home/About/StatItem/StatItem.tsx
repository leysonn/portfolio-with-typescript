import styles from './StatItem.module.scss';

type StatItemProps = {
    value: string;
    description: string;
};

function StatItem({ value, description }: StatItemProps) {
    return (
        <div className={styles.stat}>
            <h3 className={styles.number}>{value}</h3>
            <span className={styles.description}>{description}</span>
        </div>
    );
}

export default StatItem;
