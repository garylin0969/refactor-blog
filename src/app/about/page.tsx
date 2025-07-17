import { MailIcon, MapPinIcon } from 'lucide-react';
import BaseAvatar from '@/components/atoms/base-avatar';
import SocialLinks from '@/components/molecules/social-links';
import { Card, CardContent } from '@/components/ui/card';

const AUTHOR_INFO = {
    name: 'Gary Lin',
    avatar: 'https://github.com/shadcn.png',
    location: 'Taipei, Taiwan',
    email: 'garylin0969@gmail.com',
} as const;

const AboutPage = () => {
    return (
        <Card className="w-74">
            <CardContent className="space-y-3">
                <BaseAvatar className="mx-auto size-33" src={AUTHOR_INFO.avatar} fallback="author" />
                <div className="text-center text-2xl font-bold">{AUTHOR_INFO.name}</div>
                <ul className="flex flex-col items-center gap-y-2">
                    <li className="flex items-center gap-x-2">
                        <MapPinIcon className="size-4" />
                        <span>{AUTHOR_INFO.location}</span>
                    </li>
                    <li className="flex items-center gap-x-2">
                        <MailIcon className="size-4" />
                        <a href={`mailto:${AUTHOR_INFO.email}`} target="_blank" rel="noreferrer noopener">
                            <span>{AUTHOR_INFO.email}</span>
                        </a>
                    </li>
                </ul>
                <SocialLinks className="flex items-center justify-center gap-x-2" iconClassName="size-6" />
            </CardContent>
        </Card>
    );
};

export default AboutPage;
