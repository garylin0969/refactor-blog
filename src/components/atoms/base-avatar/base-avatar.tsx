import { ReactNode } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface BaseAvatarProps {
    className?: string;
    src: string;
    alt: string;
    fallback?: ReactNode;
}

const BaseAvatar = ({ className, src, alt, fallback = 'avatar' }: BaseAvatarProps) => {
    return (
        <Avatar className={className}>
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
    );
};

export default BaseAvatar;
