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
            <div className="grid">
                {posts.map((post: Post) => {
                    return (
                        <article key={post?.slug} className="mb-2">
                            <Card className="block h-41 gap-0 overflow-hidden rounded-none p-3">
                                <div className="flex items-center">
                                    {/* 內容區域 */}
                                    <div className="flex flex-1 flex-col">
                                        <CardHeader className="mb-2 gap-0">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-x-2">
                                                    <CardDescription>{formatDate(post.date)}</CardDescription>
                                                    {post?.category && (
                                                        <Badge variant="outline" className="px-2 py-1">
                                                            {post?.category}
                                                        </Badge>
                                                    )}
                                                </div>
                                                <CardTitle className="line-clamp-1 text-xl font-semibold">
                                                    <Link
                                                        href={`/blog/posts/${post.slug}`}
                                                        className="hover:text-primary"
                                                    >
                                                        {post?.title}
                                                    </Link>
                                                </CardTitle>
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
                                    {post?.image && (
                                        <div className="relative hidden h-[107px] w-40 overflow-hidden lg:block">
                                            <NextImage
                                                src={post?.image}
                                                alt={post?.title}
                                                height={107}
                                                width={160}
                                                className="object-cover duration-300 hover:scale-110"
                                            />
                                        </div>
                                    )}
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
