import { posts, type Post } from '@velite';
import Link from 'next/link';
import NextImage from '@/components/atoms/next-image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

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
        <div className="mx-auto max-w-5xl md:px-4">
            <div className="grid gap-6">
                {posts.map((post: Post) => {
                    return (
                        <article key={post?.slug}>
                            <Card className="overflow-hidden p-0">
                                <div className="flex min-h-41">
                                    <NextImage
                                        src={post?.image ?? ''}
                                        alt={post?.title}
                                        height={164}
                                        width={164}
                                        className="hidden object-cover lg:block"
                                    />
                                    {/* 內容區域 */}
                                    <div className="flex flex-1 flex-col py-4">
                                        <CardHeader className="mb-4">
                                            <div className="flex items-center justify-between gap-x-2">
                                                <CardTitle className="line-clamp-1 text-xl font-semibold">
                                                    <Link
                                                        href={`/blog/posts/${post.slug}`}
                                                        className="hover:text-primary"
                                                    >
                                                        {post?.title}
                                                    </Link>
                                                </CardTitle>
                                                <div className="flex items-center gap-x-2">
                                                    <CardDescription>{formatDate(post.date)}</CardDescription>
                                                    {post?.category && (
                                                        <Badge variant="outline" className="px-2 py-1">
                                                            {post?.category}
                                                        </Badge>
                                                    )}
                                                </div>
                                            </div>
                                        </CardHeader>

                                        <CardContent className="mb-4 flex-1">
                                            <p className="line-clamp-2 text-sm leading-relaxed">{post?.description}</p>
                                        </CardContent>

                                        <CardFooter className="flex flex-wrap gap-2">
                                            {post?.tags?.map((tag) => (
                                                <Badge key={tag} className="px-2 py-1 text-xs">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </CardFooter>
                                    </div>
                                </div>
                            </Card>
                        </article>
                    );
                })}
            </div>
        </div>
    );
};

export default BlogPage;
