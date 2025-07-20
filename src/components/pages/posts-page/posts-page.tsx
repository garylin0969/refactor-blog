import { notFound } from 'next/navigation';

import ArticleMeta from '@/components/molecules/article-meta';
import SectionTitle from '@/components/molecules/section-title';
import Comments from '@/components/molecules/comments';
import MDXContent from '@/components/molecules/mdx-content';

import cn from '@/utils/cn';
import { getPostBySlug } from '@/utils/posts';

interface PostProps {
    params: Promise<{
        slug: string[];
    }>;
}

const PostsPage = async ({ params }: PostProps) => {
    const { slug } = await params;
    const decodedSlug = slug?.map(decodeURIComponent).join('/');
    const post = getPostBySlug(`/${decodedSlug}`);

    if (!post) {
        return notFound();
    }

    const { date, category, title, tags } = post;

    return (
        <article className="space-y-6">
            <header className="space-y-3">
                <h2 className={cn('text-3xl font-bold', 'dark:text-white')}>{title}</h2>
                <ArticleMeta className="space-y-3" date={date} category={category} tags={tags} />
            </header>
            <SectionTitle />
            <div className="grid grid-cols-1">
                <MDXContent className="col-span-1 max-w-none" content={post?.body?.raw} />
            </div>
            <div className="mt-10">
                <Comments />
            </div>
        </article>
    );
};

export default PostsPage;
