import { BlogPostCard } from '@/components/molecules/blog-post-card';
import { getPublishedPosts } from '@/utils/post';

const BlogPage = () => {
    const posts = getPublishedPosts();

    return (
        <div className="mx-auto max-w-5xl px-4">
            <div className="divide-border divide-y">
                {posts.map((post) => (
                    <BlogPostCard key={post?.slug} post={post} />
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
