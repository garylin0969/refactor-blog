import NextImage from '@/components/atoms/next-image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { PROJECT_LIST } from '@/constants/project';
import { cn } from '@/utils/shadcn';

interface ProjectCardProps {
    className?: string;
    project: (typeof PROJECT_LIST)[number];
}

const ProjectCard = ({ className, project }: ProjectCardProps) => {
    return (
        <a href={project.url} className={cn('group', className)}>
            <Card className="flex h-full flex-col gap-0 overflow-hidden p-0">
                <AspectRatio ratio={16 / 9} className="overflow-hidden">
                    <NextImage
                        className="object-cover duration-300 group-hover:scale-110"
                        src={project.image}
                        alt={project.name}
                        fill
                    />
                </AspectRatio>
                <CardContent className="flex flex-1 flex-col space-y-6 p-6">
                    <CardTitle className="group-hover:text-primary">{project.name}</CardTitle>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <Badge key={tag} className="px-2 py-1" variant="secondary">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </a>
    );
};

export default ProjectCard;
