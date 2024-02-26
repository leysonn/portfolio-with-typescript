import HomeHero from '../../components/HomeHero/HomeHero';
import styles from './Home.module.scss';

function Home() {
    return (
        <div className={styles.container}>
            <HomeHero />
            <h1 className={styles.title}>Home</h1>
        </div>
    );
}

export default Home;