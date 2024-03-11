import FooterHero from './FooterHero/FooterHero';
import styles from './Footer.module.scss';
import Hr from '../Hr/Hr';
import SocialLink from '../SocialLink/SocialLink';
import { Link } from '@tanstack/react-router';
import { footerLinks } from '../../constants/footerLinks';

function Footer() {
    return (
        <footer className={styles.footer}>
            <FooterHero />
            <div className={styles.footerContent}>
                <div className={styles.footerContainer}>
                    <h2 className={styles.footerTitle}>Agency</h2>
                    <div className={styles.footerCol}>
                        <h3 className={styles.footerColTitle}>Menu</h3>
                        <div className={styles.footerColContainer}>
                            {footerLinks.menu.map((link, index) => (
                                <Link to={link.url} key={index}>
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className={styles.footerCol}>
                        <h3 className={styles.footerColTitle}>Service</h3>
                        <div className={styles.footerColContainer}>
                            {footerLinks.service.map((link, index) => (
                                <Link to={link.url} key={index}>
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.footerSocial}>
                    {footerLinks.social.map((link, index) => (
                        <SocialLink link={link} key={index} />
                    ))}
                </div>
            </div>
            <Hr />
            <div className={styles.footerBottom}>
                <p className={styles.copyright}>Copyright © 2022 Laaqiq. All Rights Reserved.</p>
                <div className={styles.footerLinks}>
                    <Link to="#!" className={styles.link}>
                        Terms of Use
                    </Link>
                    <Link to="#!" className={styles.link}>
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
