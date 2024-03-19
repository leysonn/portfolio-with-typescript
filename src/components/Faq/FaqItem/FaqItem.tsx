import styles from './FaqItem.module.scss';
import arrow_icon from '../../../assets/icons/down_arrow_icon.svg';

type FaqItemProps = {
    title: string;
    description: string;
    isExpanded: boolean;
    toggleIsExpanded: () => void;
};

function FaqItem({ title, description, isExpanded, toggleIsExpanded }: FaqItemProps) {
    return (
        <section className={styles.faqItem + (isExpanded ? ' ' + styles.expanded : '')}>
            <div className={styles.faqItemContent} onClick={toggleIsExpanded}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.iconContainer}>
                    <img className={styles.icon} src={arrow_icon} alt="Expand icon" draggable={false} />
                </div>
            </div>
            <div className={styles.faqItemExpanded}>
                <p className={styles.description}>{description}</p>
            </div>
        </section>
    );
}

export default FaqItem;
