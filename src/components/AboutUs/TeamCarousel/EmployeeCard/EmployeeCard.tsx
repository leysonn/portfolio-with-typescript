import { TeamListItem } from '../teamList';
import styles from './EmployeeCard.module.scss';

function EmployeeCard({ name, role, image }: TeamListItem) {
    return (
        <div className={styles.employeeCard}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={image} alt={name} draggable={false} />
            </div>
            <div className={styles.infoContainer}>
                <h3 className={styles.name}>{name}</h3>
                <span className={styles.role}>{role}</span>
            </div>
        </div>
    );
}

export default EmployeeCard;
