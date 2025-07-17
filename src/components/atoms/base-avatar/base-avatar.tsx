import { ReactNode } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface BaseAvatarProps {
    className?: string;
    src: string;
    fallback?: ReactNode;
}

const BaseAvatar = ({ className, src, fallback = 'avatar' }: BaseAvatarProps) => {
    return (
        <Avatar className={className}>
            <AvatarImage src={src} />
            <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
    );
};

export default BaseAvatar;
