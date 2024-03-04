import styles from './Title.module.scss';

type TitleProps = {
    children: string;
    higher?: boolean;
};

function Title({ children, higher = false }: TitleProps) {
    return (
        <section id="title">
            <div className={higher ? styles.titleHigher : styles.titleContent}>
                <h1 className={styles.title}>{children}</h1>
                <p className={styles.description}>Agency provides a full service range including technical skills, design, business understanding.</p>
            </div>
        </section>
    );
}

export default Title;
