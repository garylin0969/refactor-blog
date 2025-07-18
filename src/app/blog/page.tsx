import { posts, type Post } from '@velite';
import Link from 'next/link';
import NextImage from '@/components/atoms/next-image';
import { Badge } from '@/components/ui/badge';

const BlogPage = () => {
    // 格式化日期為 yyyy/mm/dd
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    };

    return (
        <div className="mx-auto max-w-4xl px-4">
            <div className="divide-border divide-y">
                {posts.map((post: Post) => {
                    return (
                        <Link key={post?.slug} href={`/blog/posts/${post.slug}`} className="group">
                            <article className="p-4">
                                <div className="flex items-center gap-x-8">
                                    {/* 內容區域 */}
                                    <div className="flex-1">
                                        <div className="mb-3">
                                            <div className="text-muted-foreground flex items-center gap-3 text-sm">
                                                <span>{formatDate(post.date)}</span>
                                                {post?.category && (
                                                    <>
                                                        <span>•</span>
                                                        <Badge variant="outline" className="text-xs">
                                                            {post?.category}
                                                        </Badge>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        <h2 className="group-hover:text-primary mb-2 line-clamp-1 text-2xl leading-tight font-bold">
                                            {post?.title}
                                        </h2>

                                        <p className="text-muted-foreground mb-4 line-clamp-2 text-base leading-relaxed">
                                            {post?.description}
                                        </p>

                                        {post?.tags && post.tags.length > 0 && (
                                            <div className="flex flex-wrap items-center gap-2">
                                                {post.tags.slice(0, 3).map((tag) => (
                                                    <Badge key={tag} className="px-2 py-1 text-xs">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                                {post.tags.length > 3 && (
                                                    <span className="text-muted-foreground text-xs">
                                                        +{post.tags.length - 3} more
                                                    </span>
                                                )}
                                            </div>
                                        )}
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
                })}
            </div>
        </div>
    );
};

export default BlogPage;
