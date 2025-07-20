import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const socialIconLinksConfig = [
    {
        enabled: true,
        id: 'github',
        icon: () => FaGithub({ className: 'cursor-pointer opacity-90' }),
        link: 'https://github.com/garylin0969',
    },
    {
        enabled: true,
        id: 'linkedin',
        icon: () => FaLinkedin({ className: 'cursor-pointer opacity-90' }),
        link: 'https://www.linkedin.com/in/garylin0969/',
    },
    {
        enabled: true,
        id: 'facebook',
        icon: () => FaFacebook({ className: 'cursor-pointer opacity-90' }),
        link: 'https://www.facebook.com/profile.php?id=100009915255579&mibextid=ZbWKwL',
    },
    {
        enabled: false,
        id: 'instagram',
        icon: () => FaInstagram({ className: 'cursor-pointer opacity-90' }),
        link: 'https://www.instagram.com/gary_1226_/',
    },
];

export default socialIconLinksConfig;
