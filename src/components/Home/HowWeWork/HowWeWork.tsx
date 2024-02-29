import styles from './HowWeWork.module.scss';
import Button from '../../Button/Button';
import ReasonItem from './ReasonItem/ReasonItem';
import { reasonsList } from '../../../constants/reasonsList';
import Hr from '../../Hr/Hr';
import { Link } from '@tanstack/react-router';

function HowWeWork() {
    return (
        <section id="how-we-work">
            <div className={styles.howWeWorkContent}>
                <div className={styles.title_container}>
                    <span className={styles.name}>How we work</span>
                    <h2 className={styles.title}>Making Your Projects Look Awesome</h2>
                    <p className={styles.description}>
                        Technical skills, design, business understanding, ability to put themselves in the merchant's shoes.
                    </p>
                    <Link to="/blog">
                        <Button width={5.25} color="dark_transparent" className={styles.button}>
                            Read More
                        </Button>
                    </Link>
                </div>
                <div className={styles.reasonsContainer}>
                    {reasonsList.map((item, index) => (
                        <ReasonItem key={index} number={item.number} title={item.title} />
                    ))}
                </div>
            </div>
            <Hr />
        </section>
    );
}

export default HowWeWork;
