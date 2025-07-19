import NextImage from '@/components/atoms/next-image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { PROJECT_LIST } from '@/constants/project';
import { cn } from '@/utils/shadcn';

interface ProjectCardProps {
    className?: string;
    badge?: string;
    maxVisible?: number;
    project: (typeof PROJECT_LIST)[number];
}

const ProjectCard = ({ className, badge, maxVisible, project }: ProjectCardProps) => {
    // 限制顯示的標籤數量
    const visibleTags = project?.tags?.slice(0, maxVisible ?? project.tags.length);
    // 計算剩餘的標籤數量
    const remainingCount = project?.tags?.length - visibleTags?.length;

    return (
        <a
            href={project.url}
            className={cn('group', badge && 'relative', className)}
            target="_blank"
            rel="noreferrer noopener"
        >
            {badge && <Badge className="absolute -top-2 -right-2 z-10 px-2 py-1">{badge}</Badge>}
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
                    <div className="flex flex-wrap items-center gap-2">
                        {visibleTags?.map((tag) => (
                            <Badge key={tag} className="px-2 py-1" variant="secondary">
                                {tag}
                            </Badge>
                        ))}
                        {remainingCount > 0 && (
                            <span className="text-muted-foreground text-xs">+{remainingCount} more</span>
                        )}
                    </div>
                </CardContent>
            </Card>
        </a>
    );
};

export default ProjectCard;
