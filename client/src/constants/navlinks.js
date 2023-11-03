import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';

export const navlinks = [
    {
        name: 'داشبورد',
        imgUrl: dashboard,
        link: '/',
    },
    {
        name: 'کمپین',
        imgUrl: createCampaign,
        link: '/campaign/create',
    },
    {
        name: 'پرداخت',
        imgUrl: payment,
        link: '/payment',
        disabled: true,
    },
    {
        name: 'برداشت',
        imgUrl: withdraw,
        link: '/withdraw',
        disabled: true,
    },
    {
        name: 'پروفایل',
        imgUrl: profile,
        link: '/profile',
    },
    {
        name: 'خروج',
        imgUrl: logout,
        link: '/logout',
        disabled: true,
    },
];