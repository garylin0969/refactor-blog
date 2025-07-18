import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/utils/date';

interface PostMetaProps {
    date: string;
    category?: string;
}

export const PostMeta = ({ date, category }: PostMetaProps) => {
    const formattedDate = formatDate(date, 'YYYY/MM/DD');

    return (
        <div className="text-muted-foreground flex items-center gap-3 text-sm">
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
