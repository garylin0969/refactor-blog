import { MailIcon, MapPinIcon } from 'lucide-react';
import BaseAvatar from '@/components/atoms/base-avatar';
import SocialLinks from '@/components/molecules/social-links';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
    return (
        <>
            <Card className="w-74">
                <CardContent className="space-y-3">
                    <BaseAvatar className="mx-auto size-33" src="https://github.com/shadcn.png" fallback="author" />
                    <div className="text-center text-2xl font-bold">Gary Lin</div>
                    <ul className="flex flex-col items-center gap-y-2">
                        <li className="flex items-center gap-x-2">
                            <MapPinIcon className="size-4" />
                            <span>Taipei, Taiwan</span>
                        </li>
                        <li className="flex items-center gap-x-2">
                            <MailIcon className="size-4" />
                            <a href="mailto:garylin0969@gmail.com" target="_blank" rel="noreferrer noopener">
                                <span>garylin0969@gmail.com</span>
                            </a>
                        </li>
                    </ul>
                    <SocialLinks className="flex items-center justify-center gap-x-2" iconClassName="size-6" />
                </CardContent>
            </Card>
        </>
    );
};

export default AboutPage;
