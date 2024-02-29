import Hero from '../../components/Home/Hero/Hero';
import About from '../../components/Home/About/About';
import Partners from '../../components/Home/Partners/Partners';
import styles from './Home.module.scss';
import HowWeWork from '../../components/Home/HowWeWork/HowWeWork';

function Home() {
    return (
        <div className={styles.container}>
            <Hero />
            <Partners />
            <About />
            <HowWeWork />
        </div>
    );
}

export default Home;