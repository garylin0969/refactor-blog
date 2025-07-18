import { posts, type Post } from '@velite';
import { BlogPostCard } from '@/components/molecules/blog-post-card';

const BlogPage = () => {
    return (
        <div className="mx-auto max-w-5xl px-4">
            <div className="divide-border divide-y">
                {posts.map((post: Post) => (
                    <BlogPostCard key={post?.slug} post={post} />
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
