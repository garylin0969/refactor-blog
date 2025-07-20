import { FaBuilding } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

export const infoImage = {
    url: '/assets/avatar/avatar.jpg',
    alt: 'avatar',
};

export const infoName = 'Gary Lin';

export const infoList = [
    {
        icon: () => FaBuilding({}),
        link: 'https://www.cnyes.com/',
        text: 'Anue 鉅亨網',
    },
    {
        icon: () => FaLocationDot({}),
        link: '',
        text: 'Taipei, Taiwan',
    },
    {
        icon: () => IoMdMail({}),
        link: 'mailto:garylin0969@gmail.com',
        text: 'garylin0969@gmail.com',
    },
];

export const infoDescriptions = [
    'Hi there',
    '我是 Gary Lin，目前於 鉅亨網 擔任前端工程師，主要使用 Next、React、TypeScript 和 Tailwind CSS。閒暇時喜愛看動漫、小說，經常在社群平台上衝浪的哥布林。',
];
