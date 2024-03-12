import Hr from '../components/Hr/Hr';
import ServicesSection from '../components/Services/ServicesSection/ServicesSection';
import Title from '../components/Title/Title';

function Services() {
    return (
        <main>
            <Title>Services</Title>
            <ServicesSection />
            <Hr />
            {/* map => <Service /> */}
            {/* <HowWeWorkSection /> */}
        </main>
    );
}

export default Services;
