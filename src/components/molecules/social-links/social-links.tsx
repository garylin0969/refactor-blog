import SocialLink from '@/components/atoms/social-link';
import { SOCIAL_LINKS } from '@/constants/social-links';

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
