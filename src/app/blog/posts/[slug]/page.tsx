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
    return getPublishedPosts()?.map((post) => ({
        slug: post?.slug,
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

    // 決定要使用的圖片：post有image就用post的image，沒有就用網站icon
    const ogImage = post.image
        ? {
              url: post.image,
              width: 1200,
              height: 630,
              alt: post.title,
          }
        : {
              url: '/favicons/android-chrome-512x512.png',
              width: 512,
              height: 512,
              alt: 'GaryLin Dev',
          };

    return {
        title: post.title,
        description: post.description || post.title,
        openGraph: {
            title: `${post.title} | GaryLin Dev`,
            description: post.description || post.title,
            type: 'article',
            publishedTime: post.date,
            authors: ['Gary Lin'],
            tags: post.tags,
            images: [ogImage],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${post.title} | GaryLin Dev`,
            description: post.description || post.title,
            images: [ogImage],
        },
    };
}

const PostPage = async ({ params }: PageProps) => {
    const { slug } = await params;

    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="mx-auto max-w-4xl">
            <article className="max-w-none">
                <header className="mb-4 space-y-3 border-b pb-4">
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
