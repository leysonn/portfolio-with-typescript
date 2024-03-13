import styles from './HowWeWorkSection.module.scss';
import Button from '../../Button/Button';
import ReasonItem from '../../ReasonItem/ReasonItem';
import { reasonsList } from '../../../constants/reasonsList';
import Hr from '../../Hr/Hr';
import { Link } from '@tanstack/react-router';
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
            >
                <Link to="/blog">
                    <Button width={5.25} color="dark_transparent" className={styles.button}>
                        Read More
                    </Button>
                </Link>
            </Section>
            <Hr />
        </section>
    );
}

export default HowWeWorkSection;
