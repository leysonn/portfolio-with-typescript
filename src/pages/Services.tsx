import Hr from '../components/Hr/Hr';
import DescriptionSection from '../components/Services/DescriptionSection/DescriptionSection';
import Title from '../components/Title/Title';
import HowWeWorkSection from '../components/Services/HowWeWorkSection/HowWeWorkSection';
import ServiceList from '../components/Services/ServiceList/ServiceList';

function Services() {
    return (
        <main>
            <Title>Services</Title>
            <DescriptionSection />
            <Hr />
            <ServiceList />
            <HowWeWorkSection />
        </main>
    );
}

export default Services;
