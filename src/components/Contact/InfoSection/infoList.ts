import phone_icon from '../../../assets/icons/phone_icon.svg';
import email_icon from '../../../assets/icons/email_icon.svg';
import address_icon from '../../../assets/icons/address_icon.svg';

export type InfoListItem = {
    icon: string;
    title: string;
    description: string;
};

export const infoList: InfoListItem[] = [
    {
        icon: phone_icon,
        title: 'Phone',
        description: '+1 (234) 567-89-00',
    },
    {
        icon: email_icon,
        title: 'EMail',
        description: 'info@agency.com',
    },
    {
        icon: address_icon,
        title: 'Address',
        description: '2247 Lunetta Street, TX 76301',
    },
];
