import design_icon from '../assets/icons/design_icon.svg';
import development_icon from '../assets/icons/development_icon.svg';
import marketing_icon from '../assets/icons/marketing_icon.svg';

export type ServiceItem = {
    name: string;
    icon: string;
    title: string;
    description: string;
    features: string[];
};

export const serviceList: ServiceItem[] = [
    {
        name: 'Design',
        icon: design_icon,
        title: 'Agency is a business you hire to outsource your digital marketing efforts',
        description:
            'Business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
        features: ['Web Development', 'Brand Strategy', 'Art Direction'],
    },
    {
        name: 'Development',
        icon: development_icon,
        title: 'Agency is a business you hire to outsource your digital marketing efforts',
        description:
            'Business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
        features: ['Web Development', 'Brand Strategy', 'Art Direction'],
    },
    {
        name: 'Marketing',
        icon: marketing_icon,
        title: 'Agency is a business you hire to outsource your digital marketing efforts',
        description:
            'Business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
        features: ['Web Development', 'Brand Strategy', 'Art Direction'],
    },
];
