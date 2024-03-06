import styles from './Section.module.scss';

type SectionProps = {
    className: string;
    titleContainerStyle: string;
    name?: string;
    title: {
        content: string;
        style: string;
    };
    subtitle?: string;
    description: {
        content: string;
        style: string;
    };
    aside: React.ReactNode;
    children: React.ReactNode;
};

function Section({ className, titleContainerStyle, name, title, subtitle, description, aside, children }: SectionProps) {
    return (
        <div className={styles.sectionContent + ' ' + className}>
            {aside}
            <div className={styles.title_container + ' ' + titleContainerStyle}>
                <span className={styles.name}>{name}</span>
                <h2 className={title.style + ' ' + styles.title}>{title.content}</h2>
                <h4 className={styles.subtitle}>{subtitle}</h4>
                <p className={styles.description + ' ' + description.style}>{description.content}</p>
                {children}
            </div>
        </div>
    );
}

export default Section;
