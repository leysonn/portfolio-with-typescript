import facebook_icon from '../assets/icons/facebook.svg';
import twitter_icon from '../assets/icons/twitter.svg';
import instagram_icon from '../assets/icons/instagram.svg';

export type FooterLink = {
    menu: {
        title: string;
        url: string;
    }[];
    service: {
        title: string;
        url: string;
    }[];
    social: {
        icon: string;
        url: string;
    }[];
};

export const footerLinks: FooterLink = {
    menu: [
        {
            title: 'About',
            url: '/about',
        },
        {
            title: 'Services',
            url: '/services',
        },
        {
            title: 'Blog',
            url: '/blog',
        },
        {
            title: 'Contact',
            url: '/contact',
        },
    ],
    service: [
        {
            title: 'Design',
            url: '#!',
        },
        {
            title: 'Development',
            url: '#!',
        },
        {
            title: 'Marketing',
            url: '#!',
        },
        {
            title: 'See More',
            url: '#!',
        },
    ],
    social: [
        {
            icon: facebook_icon,
            url: 'https://www.facebook.com/',
        },
        {
            icon: twitter_icon,
            url: 'https://twitter.com/',
        },
        {
            icon: instagram_icon,
            url: 'https://www.instagram.com/',
        },
    ],
};
