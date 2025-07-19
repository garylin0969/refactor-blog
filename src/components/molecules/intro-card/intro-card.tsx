import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/utils/shadcn';

interface IntroCardProps {
    className?: string;
    list?: string[];
}

const IntroCard = ({ className, list }: IntroCardProps) => {
    return (
        <Card className={cn('relative bg-transparent', className)}>
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-sky-500 to-purple-500 opacity-20 blur transition duration-300" />
            <CardContent className="font-semibold">
                {list?.map((text) => (
                    <p key={text}>{text}</p>
                ))}
            </CardContent>
        </Card>
    );
};

export default IntroCard;
