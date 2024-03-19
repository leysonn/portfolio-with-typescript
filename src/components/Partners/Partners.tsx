import styles from './Partners.module.scss';
import { partnersList } from './partnersList';
import { Link } from '@tanstack/react-router';

type PartnersProps = {
    theme?: 'light' | 'dark';
    className?: string;
    children?: React.ReactNode;
};

function Partners({ theme = 'light', className, children }: PartnersProps) {
    return (
        <section id="partners" className={className}>
            <div className={styles.logoContainer}>
                {partnersList.map((item, index) => (
                    <Link to={item.url} key={index}>
                        <img className={styles.logo} src={item.images[theme]} alt={item.name + ' logotype'} draggable={false} />
                    </Link>
                ))}
            </div>
            {children}
        </section>
    );
}

export default Partners;
