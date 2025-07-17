import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SocialLink from '@/components/atoms/social-link';

// 社交媒體連結配置
const SOCIAL_LINKS = [
    {
        href: 'https://www.linkedin.com/in/garylin0969',
        target: '_blank',
        icon: FaLinkedin,
        label: 'LinkedIn',
    },
    {
        href: 'https://github.com/garylin0969',
        target: '_blank',
        icon: FaGithub,
        label: 'GitHub',
    },
] as const;

interface SocialLinksProps {
    className?: string;
    iconClassName?: string;
}

const SocialLinks = ({ className = 'flex items-center gap-x-2', iconClassName = 'size-4' }: SocialLinksProps) => {
    return (
        <div className={className}>
            {SOCIAL_LINKS.map((link) => (
                <SocialLink
                    key={link.label}
                    href={link.href}
                    target={link.target}
                    icon={link.icon}
                    label={link.label}
                    className={iconClassName}
                />
            ))}
        </div>
    );
};

export default SocialLinks;
