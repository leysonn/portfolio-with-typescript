import styles from './Title.module.scss';

type TitleProps = {
    title: string;
    description: string;
    higher?: boolean;
};

function Title({ title, description, higher = false }: TitleProps) {
    return (
        <section id="title">
            <div className={higher ? styles.titleHigher : styles.titleContent}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>
            </div>
        </section>
    );
}

export default Title;
