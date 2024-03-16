import { useEffect, useRef } from 'react';
import { useRouter } from '@tanstack/react-router';
import { serviceList } from '../../../constants/serviceList';
import Service from '../Service/Service';

function ServiceList() {
    const { state } = useRouter();
    const hash = state.location.hash;
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (hash !== '' && ref.current) {
            window.scrollTo({ top: ref.current.offsetTop - 80, behavior: 'smooth' });
        }
    }, [hash, ref]);

    return (
        <>
            {serviceList.map((service, index) => {
                const isCurrent = hash === serviceList[index].name;
                return <Service key={index} service={service} positionRight={index % 2 !== 1} forwardRef={isCurrent ? ref : null} open={isCurrent} />;
            })}
        </>
    );
}

export default ServiceList;
