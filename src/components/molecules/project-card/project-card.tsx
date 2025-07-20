import Image from 'next/image';
import { DivPropsT } from '@/types/html';
import cn from '@/utils/cn';
import { BaseLink } from '@/components/atoms/link';
import { Tag } from '@/components/atoms/tag';

interface ProjectCardProps extends DivPropsT {
    imageUrl?: string;
    projectUrl?: string;
    projectName?: string;
    projectTags?: string[];
}

const ProjectCard = ({
    className,
    imageUrl = '',
    projectUrl = '',
    projectName = '',
    projectTags = [],
    ...props
}: ProjectCardProps) => {
    const cardClasses = cn(
        'h-full w-full',
        'shadow-lg transition-shadow duration-300 hover:shadow-xl',
        'rounded-xl border border-purple-100 dark:border-white/30',
        'overflow-hidden',
        'flex flex-col',
        'bg-gradient-to-br from-white to-purple-50/30 dark:from-slate-900 dark:to-slate-900',
        className,
    );

    return (
        <div className={cardClasses} {...props}>
            <BaseLink href={projectUrl} className="group hover:text-inherit dark:hover:text-inherit">
                <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                        src={imageUrl}
                        className={cn(
                            'object-cover',
                            'transition duration-300 group-hover:scale-110',
                            'group-hover:brightness-110',
                        )}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        alt={projectName}
                    />
                </div>
                <div className={cn('flex-grow', 'space-y-3 md:space-y-6', 'p-3 md:p-6')}>
                    <h3 className={cn('text-lg font-bold tracking-tighter md:text-xl')}>{projectName}</h3>
                    <div className={cn('flex flex-wrap gap-2')}>
                        {projectTags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                    </div>
                </div>
            </BaseLink>
        </div>
    );
};

export default ProjectCard;
