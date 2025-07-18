import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/utils/date';
import { cn } from '@/utils/shadcn';

interface PostMetaProps {
    className?: string;
    date: string;
    category?: string;
}

export const PostMeta = ({ className, date, category }: PostMetaProps) => {
    const formattedDate = formatDate(date, 'YYYY/MM/DD');

    return (
        <div className={cn('text-muted-foreground flex items-center gap-x-3 text-sm', className)}>
            <span>{formattedDate}</span>
            {category && (
                <>
                    <span>•</span>
                    <Badge variant="outline" className="text-xs">
                        {category}
                    </Badge>
                </>
            )}
        </div>
    );
};
