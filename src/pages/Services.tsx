import { serviceList } from '../constants/serviceList';
import Hr from '../components/Hr/Hr';
import ServicesSection from '../components/Services/ServicesSection/ServicesSection';
import Title from '../components/Title/Title';
import Service from '../components/Service/Service';
import HowWeWorkSection from '../components/Services/HowWeWorkSection/HowWeWorkSection';

function Services() {
    return (
        <main>
            <Title>Services</Title>
            <ServicesSection />
            <Hr />
            {serviceList.map((service, index) => (
                <Service key={index} service={service} positionRight={index % 2 !== 1} />
            ))}
            <HowWeWorkSection />
        </main>
    );
}

export default Services;
