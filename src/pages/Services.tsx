import { useRouter } from '@tanstack/react-router';
import { useEffect, useRef } from 'react';
import { serviceList } from '../constants/serviceList';
import Hr from '../components/Hr/Hr';
import ServicesSection from '../components/Services/ServicesSection/ServicesSection';
import Title from '../components/Title/Title';
import Service from '../components/Service/Service';
import HowWeWorkSection from '../components/Services/HowWeWorkSection/HowWeWorkSection';

function Services() {
    const { state } = useRouter();
    const hash = state.location.hash;
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (hash !== '' && ref.current) {
            window.scrollTo({ top: ref.current.offsetTop - 80, behavior: 'smooth' });
        }
    }, [hash, ref]);

    return (
        <main>
            <Title>Services</Title>
            <ServicesSection />
            <Hr />
            {serviceList.map((service, index) => {
                const isCurrent = hash === serviceList[index].name;
                return <Service key={index} service={service} positionRight={index % 2 !== 1} forwardRef={isCurrent ? ref : null} open={isCurrent} />;
            })}
            <HowWeWorkSection />
        </main>
    );
}

export default Services;
