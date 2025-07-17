import { posts } from '@velite';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MDXContent from '@/components/molecules/mdx-content';

interface PageProps {
    params: {
        slug: string;
    };
}

// 生成靜態參數
export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

// 生成metadata
export async function generateMetadata({ params }: PageProps) {
    const post = posts.find((post) => post.slug === params.slug);

    if (!post) {
        return {
            title: '文章不存在',
        };
    }

    return {
        title: post.title,
        description: post.description,
    };
}

const PostPage = ({ params }: PageProps) => {
    console.log(params.slug);

    const post = posts.find((post) => post.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <Link href="/blog" className="text-blue-600 hover:text-blue-800">
                    ← 回到部落格
                </Link>
            </div>

            <article className="max-w-none">
                <header className="mb-8">
                    <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>

                    <div className="mb-4 text-gray-600">
                        <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('zh-TW', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </time>
                    </div>

                    {post.description && <p className="text-xl text-gray-700">{post.description}</p>}
                </header>

                <div className="prose max-w-none">
                    <MDXContent code={post.code} />
                </div>
            </article>
        </div>
    );
};

export default PostPage;
