import styles from './Section.module.scss';

type SectionProps = {
    className: string;
    titleContainerStyle: string;
    name?: string;
    title?: {
        content: string;
        style: string;
    };
    subtitle?: string;
    description?: {
        content: string;
        style: string;
    };
    aside: { element: React.ReactNode; position: 'before' | 'after' };
    children?: React.ReactNode;
};

function Section({ className, titleContainerStyle, name, title, subtitle, description, aside, children }: SectionProps) {
    return (
        <div className={styles.sectionContent + ' ' + className}>
            {aside.position === 'before' && aside.element}
            <div className={styles.title_container + ' ' + titleContainerStyle}>
                <span className={styles.name}>{name}</span>
                {title && <h2 className={title.style + ' ' + styles.title}>{title.content}</h2>}
                {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
                {description && <p className={styles.description + ' ' + description.style}>{description.content}</p>}
                {children}
            </div>
            {aside.position === 'after' && aside.element}
        </div>
    );
}

export default Section;
