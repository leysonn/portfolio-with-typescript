import styles from './ServicesSection.module.scss';
import Section from '../../Section/Section';

function ServicesSection() {
    return (
        <div>
            <Section
                className={styles.servicesContent}
                titleContainerStyle={styles.titleContainer}
                name='Services'
                title={{ content: 'Digital agency is a business you hire to outsource your digital marketing efforts', style: styles.title }}
                aside={{
                    element: (
                        <p className={styles.description}>
                            Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the
                            merchant's team.
                            <br />
                            <br />A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.
                            They can provide your business with a variety of digital solutions to promote your product or service online and help you.
                        </p>
                    ),
                    position: 'after',
                }}
            />
        </div>
    );
}

export default ServicesSection;