import { Card, CardContent } from '@/components/ui/card';
import { INTRO_TEXT } from '@/constants/intro';
import { cn } from '@/utils/shadcn';

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
