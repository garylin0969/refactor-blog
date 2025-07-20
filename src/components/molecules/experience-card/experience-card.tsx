import NextImage from '@/components/atoms/next-image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { ExperienceItem } from '@/constants/experience';

interface ExperienceCardProps {
    experience: ExperienceItem;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => (
    <Card className="gap-y-2 p-2.5">
        <CardHeader className="flex items-center gap-x-2 p-0">
            {/* 使用相對定位容器來保持圖片長寬比 */}
            <div className="relative h-16 w-16 overflow-hidden rounded-md bg-white">
                <NextImage src={experience.image} fill alt={experience.company} className="object-contain" />
            </div>
            <div className="space-y-1">
                <CardTitle>{experience.title}</CardTitle>
                <CardDescription className="dark:text-white">{experience.company}</CardDescription>
                <CardDescription className="dark:text-white">
                    {experience.startDate} - {experience.endDate}
                </CardDescription>
            </div>
        </CardHeader>
        <CardContent className="p-0">
            <Accordion type="single" collapsible>
                <AccordionItem value={experience.id}>
                    <AccordionTrigger asChild>
                        <Button className="w-full">View Details</Button>
                    </AccordionTrigger>
                    <AccordionContent className="p-0">
                        <ul className="list-inside list-disc space-y-2 p-3 text-base">
                            {experience.details.map((detail, detailIndex) => (
                                <li key={detailIndex}>{detail}</li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </CardContent>
    </Card>
);

export default ExperienceCard;
