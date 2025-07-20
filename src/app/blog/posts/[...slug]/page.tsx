import { type Metadata } from 'next';
import { getAllPosts } from '@/utils/posts';
import PostsPage from '@/components/pages/posts-page';
import postsMetadataConfig from '@/configs/metadatas/posts-metadata.config';
import { PostT } from '@/types/post';

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
    return postsMetadataConfig({ params });
}

export async function generateStaticParams() {
    const posts = getAllPosts();

    return posts.map((post: PostT) => ({
        slug: post?.url?.split('/').filter(Boolean),
    }));
}

export default PostsPage;
