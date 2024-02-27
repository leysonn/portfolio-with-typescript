import HomeHero from '../../components/HomeHero/HomeHero';
import Partners from '../../components/Partners/Partners';
import styles from './Home.module.scss';

function Home() {
    return (
        <div className={styles.container}>
            <HomeHero />
            <Partners />
        </div>
    );
}

export default Home;