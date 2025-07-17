import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/utils/shadcn';

interface SkillCardProps {
    className?: string;
    title: string;
    skills: string[];
}

const SkillCard = ({ title, skills, className }: SkillCardProps) => {
    return (
        <Card className={cn('gap-0 bg-transparent p-5', className)}>
            <CardHeader className="gap-0 border-b !p-0 !pb-2">
                <CardTitle className="text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <ul className="list-inside list-disc space-y-1 p-3">
                    {skills.map((skill) => (
                        <li key={skill} className="text-base">
                            {skill}
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};

export default SkillCard;
