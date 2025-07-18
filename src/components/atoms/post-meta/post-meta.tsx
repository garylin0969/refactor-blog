import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/utils/date';
import { cn } from '@/utils/shadcn';

interface PostMetaProps {
    className?: string;
    date: string;
    category?: string;
    useLink?: boolean;
}

export const PostMeta = ({ className, date, category, useLink = true }: PostMetaProps) => {
    const formattedDate = formatDate(date, 'YYYY/MM/DD');

    return (
        <div className={cn('text-muted-foreground flex items-center gap-x-3 text-sm', className)}>
            <span>{formattedDate}</span>
            {category && (
                <>
                    <span>•</span>
                    {useLink ? (
                        <Link href={`/blog/${category}/1`}>
                            <Badge variant="outline" className="px-2 py-1">
                                {category}
                            </Badge>
                        </Link>
                    ) : (
                        <Badge variant="outline" className="px-2 py-1">
                            {category}
                        </Badge>
                    )}
                </>
            )}
        </div>
    );
};
