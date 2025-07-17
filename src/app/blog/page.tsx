import { posts, type Post } from '@velite';
import Link from 'next/link';

const BlogPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-8 text-4xl font-bold">部落格</h1>

            <div className="grid gap-6">
                {posts.map((post: Post) => (
                    <article key={post.slug} className="rounded-lg border p-6 transition-shadow hover:shadow-lg">
                        <h2 className="mb-2 text-2xl font-semibold">
                            <Link href={`/blog/posts/${post.slug}`} className="text-blue-600 hover:text-blue-800">
                                {post.title}
                            </Link>
                        </h2>

                        <div className="mb-3 text-gray-600">
                            <time dateTime={post.date}>
                                {new Date(post.date).toLocaleDateString('zh-TW', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </time>
                        </div>

                        {post.description && <p className="mb-4 text-gray-700">{post.description}</p>}

                        <Link
                            href={`/blog/posts/${post.slug}`}
                            className="inline-block rounded bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                        >
                            閱讀更多
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
