import styles from './BackgroundDark.module.scss';

type BackgroundDarkProps = {
    children: React.ReactNode;
};

function BackgroundDark({ children }: BackgroundDarkProps) {
    return (
        <div className={styles.container}>
            <div className={styles.background} />
            {children}
        </div>
    );
}

export default BackgroundDark;
