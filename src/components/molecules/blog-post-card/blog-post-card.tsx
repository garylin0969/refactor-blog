import { type Post } from '@velite';
import Link from 'next/link';
import NextImage from '@/components/atoms/next-image';
import { PostMeta } from '@/components/atoms/post-meta';
import { TagList } from '@/components/atoms/tag-list';
import { cn } from '@/utils/shadcn';

interface BlogPostCardProps {
    className?: string;
    post: Post;
}

const BlogPostCard = ({ className, post }: BlogPostCardProps) => {
    const link = `/blog/posts/${post.slug}`;

    return (
        <Link href={link} className="group">
            <article className={cn('p-4', className)}>
                <div className="flex items-center gap-x-8">
                    {/* 內容區域 */}
                    <div className="flex-1">
                        <div className="mb-3">
                            <PostMeta useLink={false} date={post.date} category={post?.category} />
                        </div>

                        <h2 className="group-hover:text-primary mb-2 line-clamp-1 text-2xl leading-tight font-bold">
                            {post?.title}
                        </h2>

                        <p className="text-muted-foreground mb-4 line-clamp-2 text-base leading-relaxed">
                            {post?.description}
                        </p>

                        <TagList tags={post?.tags || []} maxVisible={3} />
                    </div>

                    {/* 圖片區域 */}
                    {post?.image && (
                        <div className="relative hidden h-28 w-28 flex-shrink-0 overflow-hidden sm:block">
                            <NextImage
                                src={post?.image}
                                alt={post?.title}
                                height={112}
                                width={112}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                    )}
                </div>
            </article>
        </Link>
    );
};

export default BlogPostCard;
