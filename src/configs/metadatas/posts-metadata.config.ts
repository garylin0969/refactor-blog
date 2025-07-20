import { Metadata } from 'next';
import { getPostBySlug } from '@/utils/posts';
import baseMetadata from '@/configs/metadatas/base-metadata.config';
import { DOMAIN } from '@/configs/env';

const postsMetadataConfig = async ({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> => {
    const { slug } = await params;
    const decodedSlug = slug?.map(decodeURIComponent).join('/');
    const post = getPostBySlug(`/${decodedSlug}`);

    if (!post) {
        return {
            ...baseMetadata,
            title: '找不到文章',
            description: '您請求的文章無法找到。',
        };
    }

    const postMetadata: Partial<Metadata> = {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            url: `${DOMAIN}/blog/posts${post.url}`,
            siteName: 'Gary Lin Blog',
            images: [
                {
                    url: post.coverImage || '/assets/favicons/favicon-512x512.png',
                    width: 1200,
                    height: 630,
                    alt: `${post.title} - Gary Lin Blog`,
                },
            ],
            type: 'article',
            publishedTime: post.date,
            authors: ['Gary Lin'],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: [
                {
                    url: post.coverImage || '/assets/favicons/favicon-512x512.png',
                    width: 1200,
                    height: 630,
                    alt: `${post.title} - Gary Lin Blog`,
                },
            ],
        },
        keywords: [
            'Gary Lin',
            'Frontend Developer',
            'Web Development',
            'React.js',
            'Next.js',
            'TypeScript',
            'JavaScript',
            'Blog',
            '前端',
            '前端開發',
            '前端開發者',
            '前端工程師',
            '前端開發人員',
            '網頁開發',
            '部落格',
            '技術部落格',
            ...(post?.tags || []),
        ],
        authors: [{ name: 'Gary Lin', url: DOMAIN }],
        alternates: { canonical: `${DOMAIN}/blog/posts${post.url}` },
    };

    return { ...baseMetadata, ...postMetadata };
};

export default postsMetadataConfig;
