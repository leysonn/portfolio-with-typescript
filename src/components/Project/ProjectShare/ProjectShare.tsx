import { shareList } from './shareList';
import SocialLink from '../../SocialLink/SocialLink';
import styles from './ProjectShare.module.scss';

function ProjectShare() {
    return (
        <div className={styles.share}>
            <span className={styles.title}>SHARE ON</span>
            <div className={styles.links}>
                {shareList.map((link, index) => (
                    <SocialLink link={link} key={index} />
                ))}
            </div>
        </div>
    );
}

export default ProjectShare;
