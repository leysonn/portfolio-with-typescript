import styles from './Features.module.scss';
import check_icon from '../../assets/icons/check_mark.svg';

type FeaturesProps = {
    list: string[];
    textColor: 'dark' | 'dark-gray';
};

function Features({ list, textColor }: FeaturesProps) {
    return (
        <ul className={styles.checkMarks}>
            {list.map((feature, index) => (
                <li className={styles.checkMark} key={index}>
                    <img src={check_icon} alt="Check icon" />
                    <span className={styles[textColor]}>{feature}</span>
                </li>
            ))}
        </ul>
    );
}

export default Features;
