import FooterHero from './FooterHero/FooterHero';
import styles from './Footer.module.scss';
import Hr from '../Hr/Hr';
import { Link } from '@tanstack/react-router';
import { footerLinks } from '../../constants/footerLinks';

function Footer() {
    return (
        <footer className={styles.footer}>
            <FooterHero />
            <div className={styles.footerContent}>
                <div className={styles.footerContainer}>
                    <h4 className={styles.footerTitle}>Agency</h4>
                    <div className={styles.footerCol}>
                        <h5 className={styles.footerColTitle}>Menu</h5>
                        <div className={styles.footerColContainer}>
                            {footerLinks.menu.map((link, index) => (
                                <Link to={link.url} key={index}>
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className={styles.footerCol}>
                        <h5 className={styles.footerColTitle}>Service</h5>
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
                        <Link to={link.url} target="_blank" key={index}>
                            <img className={styles.socialLink} src={link.icon} alt=" " draggable={false} />
                        </Link>
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
