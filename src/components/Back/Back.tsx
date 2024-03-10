import styles from './Back.module.scss';
import back_icon from '../../assets/icons/back_icon.svg';
import { Link } from '@tanstack/react-router';

type BackProps = {
    to: string;
    url: string;
};

function Back({ to, url }: BackProps) {
    return (
        <div className={styles.backContainer}>
            <Link to={url} className={styles.link}>
                <img src={back_icon} alt=" " className={styles.back} />
                <label className={styles.to}>Back to {to}</label>
            </Link>
        </div>
    );
}

export default Back;
