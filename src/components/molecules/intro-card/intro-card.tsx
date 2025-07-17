import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/utils/shadcn';

const INTRO_TEXT = [
    'Hi there',
    '我是 Gary Lin，目前於 鉅亨網 擔任前端工程師，主要使用 Next.js、React.js、TypeScript 和 Tailwind CSS。閒暇時喜愛看動漫、小說，經常在社群平台上衝浪的哥布林。',
];

interface IntroCardProps {
    className?: string;
}

const IntroCard = ({ className }: IntroCardProps) => {
    return (
        <Card className={cn('relative bg-transparent', className)}>
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-sky-500 to-purple-500 opacity-20 blur transition duration-300" />
            <CardContent className="font-semibold">
                {INTRO_TEXT.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </CardContent>
        </Card>
    );
};

export default IntroCard;
