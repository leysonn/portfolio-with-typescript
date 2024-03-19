import logo1_light from '../../assets/images/partners/light/logo1.png';
import logo2_light from '../../assets/images/partners/light/logo2.png';
import logo3_light from '../../assets/images/partners/light/logo3.png';
import logo4_light from '../../assets/images/partners/light/logo4.png';
import logo5_light from '../../assets/images/partners/light/logo5.png';
import logo1_dark from '../../assets/images/partners/dark/logo1.png';
import logo2_dark from '../../assets/images/partners/dark/logo2.png';
import logo3_dark from '../../assets/images/partners/dark/logo3.png';
import logo4_dark from '../../assets/images/partners/dark/logo4.png';
import logo5_dark from '../../assets/images/partners/dark/logo5.png';

type partnersListItem = {
    images: {
        light: string;
        dark: string;
    };
    url: string;
    name: string;
};

export const partnersList: partnersListItem[] = [
    {
        images: {
            light: logo1_light,
            dark: logo1_dark,
        },
        url: '#!',
        name: 'Digitalside',
    },
    {
        images: {
            light: logo2_light,
            dark: logo2_dark,
        },
        url: '#!',
        name: 'Vortex',
    },
    {
        images: {
            light: logo3_light,
            dark: logo3_dark,
        },
        url: '#!',
        name: 'Travel Explorer',
    },
    {
        images: {
            light: logo4_light,
            dark: logo4_dark,
        },
        url: '#!',
        name: 'Fuzion',
    },
    {
        images: {
            light: logo5_light,
            dark: logo5_dark,
        },
        url: '#!',
        name: 'MediaFury',
    },
];
