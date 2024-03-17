import design_icon from '../../../assets/icons/design_icon.svg';
import development_icon from '../../../assets/icons/development_icon.svg';
import marketing_icon from '../../../assets/icons/marketing_icon.svg';

export type ServicesListItem = {
    icon: string;
    title: string;
    description: string;
    button: {
        content: string;
        width: number;
    };
    url: string;
};

export const servicesList: ServicesListItem[] = [
    {
        icon: design_icon,
        title: 'Design',
        description: 'Agency provides a full service range including technical skills, design.',
        button: { content: 'Learn More', width: 5.625 },
        url: '/blog',
    },
    {
        icon: development_icon,
        title: 'Development',
        description: 'Full service range including technical skills, design, business.',
        button: { content: 'Discover More', width: 7.125 },
        url: '/portfolio',
    },
    {
        icon: marketing_icon,
        title: 'Marketing',
        description: 'Technical skills, design, business understanding, ability.',
        button: { content: 'Explore Now', width: 6 },
        url: '/services',
    },
];
