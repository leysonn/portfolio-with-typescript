import { Link } from '@tanstack/react-router';
import styles from './SocialLink.module.scss';

type SocialLinkProps = {
    link: {
        icon: string;
        url: string;
    };
};

function SocialLink({ link }: SocialLinkProps) {
    return (
        <Link to={link.url} target="_blank" className={styles.socialLink}>
            <img className={styles.socialLinkIcon} src={link.icon} alt="Social link icon" draggable={false} />
        </Link>
    );
}

export default SocialLink;
