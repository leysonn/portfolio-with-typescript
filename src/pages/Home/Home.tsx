import HomeHero from '../../components/HomeHero/HomeHero';
import styles from './Home.module.scss';

function Home() {
    return (
        <div className={styles.container}>
            <HomeHero />
        </div>
    );
}

export default Home;