import styles from './StatCards.module.scss';

type StatCardsProps = {
    className: string;
    stats: Array<{
        value: string;
        description: string;
    }>;
};

function StatCards({ className, stats }: StatCardsProps) {
    return (
        <div className={styles.statContainer + ' ' + className}>
            {stats.map((stat, index) => (
                <div className={styles.stat} key={index}>
                    <h3 className={styles.number}>{stat.value}</h3>
                    <span className={styles.description}>{stat.description}</span>
                </div>
            ))}
        </div>
    );
}

export default StatCards;
