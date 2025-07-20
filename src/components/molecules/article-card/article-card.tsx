import cn from '@/utils/cn';
import { ArticlePropsT } from '@/types/html';
import { PostT } from '@/types/post';
import { NextLink } from '@/components/atoms/link';
import ArticleMeta from '@/components/molecules/article-meta';

interface ArticleCardProps extends ArticlePropsT {
    post: PostT;
}

const ArticleCard = ({ className, post, ...props }: ArticleCardProps) => {
    const { category, title = '', date = '', description, url, tags } = post;

    const postLink = `/blog/posts${url}`;

    return (
        <article
            className={cn(
                'p-5',
                'rounded-xl border border-gray-200 dark:border-white/30',
                'shadow-md duration-300',
                'hover:shadow-lg',
                'hover:bg-gradient-to-br hover:from-purple-50/50 hover:to-pink-50/50',
                'dark:hover:from-slate-800/50 dark:hover:to-slate-800/50',
                // 'dark:hover:shadow-sky-800',
                className,
            )}
            {...props}
        >
            <div className={cn('space-y-2')}>
                <NextLink
                    href={postLink}
                    className={cn('inline-block', 'text-lg font-bold', 'md:text-2xl', 'dark:text-white')}
                >
                    <h2>{title}</h2>
                </NextLink>
                <ArticleMeta date={date} category={category} tags={tags} />
                <h3 className="line-clamp-2 text-base/7" title={description}>
                    {description}
                </h3>
            </div>
        </article>
    );
};

export default ArticleCard;
