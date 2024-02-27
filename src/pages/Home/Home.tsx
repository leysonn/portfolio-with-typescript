import Hero from '../../components/Home/Hero/Hero';
import About from '../../components/Home/About/About';
import Partners from '../../components/Partners/Partners';
import styles from './Home.module.scss';

function Home() {
    return (
        <div className={styles.container}>
            <Hero />
            <Partners />
            <About />
        </div>
    );
}

export default Home;