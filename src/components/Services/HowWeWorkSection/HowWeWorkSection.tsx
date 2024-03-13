import styles from './HowWeWorkSection.module.scss';
import ReasonItem from '../../ReasonItem/ReasonItem';
import { reasonsList } from '../../../constants/reasonsList';
import Hr from '../../Hr/Hr';
import Section from '../../Section/Section';

function HowWeWorkSection() {
    return (
        <section id="how-we-work">
            <Section
                className={styles.howWeWorkContent}
                titleContainerStyle={styles.titleContainer}
                name="How we work"
                title={{ content: 'Making Your Projects Look Awesome', style: styles.title }}
                description={{
                    content: "Technical skills, design, business understanding, ability to put themselves in the merchant's shoes.",
                    style: styles.description,
                }}
                aside={{
                    element: (
                        <div className={styles.reasonsContainer}>
                            {reasonsList.map((item, index) => (
                                <ReasonItem key={index} number={item.number} title={item.title} />
                            ))}
                        </div>
                    ),
                    position: 'after',
                }}
            />
            <Hr />
        </section>
    );
}

export default HowWeWorkSection;
