import cn from '@/utils/cn';
import { DivPropsT } from '@/types/html';
import { DateFormatter } from '@/components/atoms/date';
import { NextLink } from '@/components/atoms/link';
import { Tag } from '@/components/atoms/tag';

interface ArticleMetaProps extends DivPropsT {
    date?: string;
    category?: string;
    tags?: string[];
}

const ArticleMeta = ({ className, date, category, tags = [], ...props }: ArticleMetaProps) => {
    const categoryLink = `/blog/${category?.toLowerCase()}`;

    return (
        <div className={cn('space-y-2', className)} {...props}>
            <div className={cn('font-serif', 'space-x-3', 'dark:text-slate-400')}>
                <span>
                    <DateFormatter dateString={date} />
                </span>
                <span>__</span>
                <span>
                    <NextLink href={categoryLink}>{category}</NextLink>
                </span>
            </div>
            {tags?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Tag key={tag} className="text-xs">
                            {tag}
                        </Tag>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ArticleMeta;
