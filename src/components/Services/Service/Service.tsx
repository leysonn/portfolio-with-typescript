import { LegacyRef, useCallback, useState } from 'react';
import { ServiceItem } from '../../../constants/serviceList';
import Features from '../../Features/Features';
import Hr from '../../Hr/Hr';
import styles from './Service.module.scss';
import arrow_icon from '../../../assets/icons/down_arrow_icon.svg';

type ServiceProps = {
    service: ServiceItem;
    positionRight: boolean;
    forwardRef: LegacyRef<HTMLDivElement> | null;
    open: boolean;
};

function Service({ service, positionRight, forwardRef, open }: ServiceProps) {
    const [isExpanded, setIsExpanded] = useState(open);

    const toggleIsExpanded = useCallback((): void => {
        setIsExpanded(isExpanded => !isExpanded);
    }, []);

    return (
        <section className={styles.service} ref={forwardRef}>
            <div className={styles.serviceContent} onClick={toggleIsExpanded}>
                <div className={styles.nameContainer}>
                    <div className={styles.iconContainer}>
                        <img className={styles.icon} src={service.icon} alt="Service icon" draggable={false} />
                    </div>
                    <h2 className={styles.name}>{service.name}</h2>
                </div>
                <div className={styles.iconContainer + (isExpanded ? ' ' + styles.iconExpanded : '')}>
                    <img className={styles.icon} src={arrow_icon} alt="Expand icon" draggable={false} />
                </div>
            </div>
            <div className={styles.serviceExpanded + (!isExpanded ? ' ' + styles.collapsed : '')}>
                <Hr />
                <div className={styles.serviceExpandedContainer + (positionRight ? ' ' + styles.positionRight : '')}>
                    <div className={styles.serviceExpandedContent}>
                        <h3 className={styles.title}>{service.title}</h3>
                        <p className={styles.description}>{service.description}</p>
                        <Features list={service.features} textColor="dark" />
                    </div>
                </div>
            </div>
            <Hr />
        </section>
    );
}

export default Service;
