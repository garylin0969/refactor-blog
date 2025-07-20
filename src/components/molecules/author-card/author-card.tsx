import { MapPinIcon, MailIcon } from 'lucide-react';
import BaseAvatar from '@/components/atoms/base-avatar';
import SocialLinks from '@/components/molecules/social-links';
import { Card, CardContent } from '@/components/ui/card';
import { AUTHOR_INFO } from '@/constants/author-info';
import { cn } from '@/utils/shadcn';

interface AuthorCardProps {
    className?: string;
}

const AuthorCard = ({ className }: AuthorCardProps) => {
    return (
        <Card className={cn('w-74', className)}>
            <CardContent className="space-y-3">
                <BaseAvatar
                    className="mx-auto size-33"
                    src={AUTHOR_INFO.avatar}
                    alt={AUTHOR_INFO.name}
                    fallback="author"
                />
                <div className="text-center text-2xl font-bold">{AUTHOR_INFO.name}</div>
                <ul className="flex flex-col items-center gap-y-2 text-sm">
                    <li className="flex items-center gap-x-2">
                        <MapPinIcon className="size-4" />
                        <span>{AUTHOR_INFO.location}</span>
                    </li>
                    <li className="flex items-center gap-x-2">
                        <MailIcon className="size-4" />
                        <a
                            className="hover:text-primary"
                            href={`mailto:${AUTHOR_INFO.email}`}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <span>{AUTHOR_INFO.email}</span>
                        </a>
                    </li>
                </ul>
                <SocialLinks className="flex items-center justify-center gap-x-2" iconClassName="size-6" />
            </CardContent>
        </Card>
    );
};

export default AuthorCard;
