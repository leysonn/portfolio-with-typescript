import { useEffect, useRef } from 'react';
import { useRouterState } from '@tanstack/react-router';
import { servicesList } from './servicesList';
import Service from '../Service/Service';

function ServiceList() {
    const routerState = useRouterState();
    const hash = routerState.location.hash;
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (hash !== '' && ref.current) {
            window.scrollTo({ top: ref.current.offsetTop - 80, behavior: 'smooth' });
        }
    }, [hash, ref]);

    return (
        <>
            {servicesList.map((service, index) => {
                const isCurrent = hash === servicesList[index].name;
                return <Service key={index} service={service} positionRight={index % 2 !== 1} forwardRef={isCurrent ? ref : null} open={isCurrent} />;
            })}
        </>
    );
}

export default ServiceList;
