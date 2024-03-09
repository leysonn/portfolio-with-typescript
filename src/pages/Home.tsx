import Hero from '../components/HomeSections/Hero/Hero';
import About from '../components/HomeSections/About/About';
import Partners from '../components/HomeSections/Partners/Partners';
import HowWeWork from '../components/HomeSections/HowWeWork/HowWeWork';
import VideoReel from '../components/HomeSections/VideoReel/VideoReel';
import Features from '../components/HomeSections/Features/Features';
import Service from '../components/HomeSections/Service/Service';

function Home() {
    return (
        <main>
            <Hero />
            <Partners />
            <About />
            <HowWeWork />
            <VideoReel />
            <Features />
            <Service />
        </main>
    );
}

export default Home;
