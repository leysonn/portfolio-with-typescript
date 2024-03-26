import styles from './InfoCards.module.scss';

type InfoCardsProps = {
    className: string;
    info: Array<{
        icon: string;
        title: string;
        description: string;
    }>;
};

function InfoCards({ className, info }: InfoCardsProps) {
    return (
        <div className={styles.infoContainer + ' ' + className}>
            {info.map((item, index) => (
                <article className={styles.item} key={index}>
                    <div className={styles.titleContainer}>
                        <div className={styles.iconContainer}>
                            <img className={styles.icon} src={item.icon} alt={item.title} draggable={false} />
                        </div>
                        <h3 className={styles.title}>{item.title}</h3>
                    </div>
                    <span className={styles.description}>{item.description}</span>
                </article>
            ))}
        </div>
    );
}

export default InfoCards;
