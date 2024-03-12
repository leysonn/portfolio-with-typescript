import styles from './ServiceCard.module.scss';
import { ServicesListItem } from '../../../../constants/servicesList';
import Button from '../../../Button/Button';
import { Link } from '@tanstack/react-router';

function ServiceCard({ icon, title, description, button, url }: ServicesListItem) {
    return (
        <div className={styles.serviceCard}>
            <div className={styles.iconContainer}>
                <img className={styles.icon} src={icon} alt="Service icon" draggable={false} />
            </div>
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.description}>{description}</p>
            <Link to={url}>
                <Button width={button.width} color="dark_transparent" className={styles.button}>
                    {button.content}
                </Button>
            </Link>
        </div>
    );
}

export default ServiceCard;
