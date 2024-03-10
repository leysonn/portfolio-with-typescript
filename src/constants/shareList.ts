import facebook_icon from '../assets/icons/facebook.svg';
import twitter_icon from '../assets/icons/twitter.svg';
import pinterest_icon from '../assets/icons/pinterest.svg';

export type ShareItem = {
    name: string;
    icon: string;
    url: string;
};

export const shareList: ShareItem[] = [
    {
        name: 'Facebook',
        icon: facebook_icon,
        url: 'https://www.facebook.com/',
    },
    {
        name: 'Twitter',
        icon: twitter_icon,
        url: 'https://twitter.com/',
    },
    {
        name: 'Pinterest',
        icon: pinterest_icon,
        url: 'https://pinterest.com/',
    },
];
