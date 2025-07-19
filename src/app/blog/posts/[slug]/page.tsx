import { notFound } from 'next/navigation';
import { PostMeta } from '@/components/atoms/post-meta/post-meta';
import { TagList } from '@/components/atoms/tag-list';
import MDXContent from '@/components/molecules/mdx-content';
import { getPostBySlug, getPublishedPosts } from '@/utils/post';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

// 生成靜態參數
export async function generateStaticParams() {
    return getPublishedPosts().map((post) => ({
        slug: post.slug,
    }));
}

// 生成metadata
export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: '文章不存在',
        };
    }

    return {
        title: post?.title,
        description: post?.description,
    };
}

const PostPage = async ({ params }: PageProps) => {
    const { slug } = await params;

    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="mx-auto max-w-4xl px-4">
            <article className="max-w-none">
                <header className="mb-8 space-y-3">
                    <h1 className="text-[42px] font-bold">{post?.title}</h1>
                    <PostMeta date={post?.date} category={post?.category} />
                    <TagList tags={post?.tags ?? []} />
                </header>
                <div className="prose prose-figcaption:mt-0 prose-figure:m-0 dark:prose-invert md:prose-lg">
                    <MDXContent code={post?.code} />
                </div>
            </article>
        </div>
    );
};

export default PostPage;
