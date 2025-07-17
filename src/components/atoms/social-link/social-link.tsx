import { IconType } from 'react-icons';

interface SocialLinkProps {
    href: string;
    target: string;
    icon: IconType;
    label: string;
    className?: string;
}

const SocialLink = ({ href, target, icon: IconComponent, label, className = 'size-4' }: SocialLinkProps) => {
    return (
        <a href={href} target={target} rel="noopener noreferrer" aria-label={label}>
            <IconComponent className={className} />
        </a>
    );
};

export default SocialLink;
