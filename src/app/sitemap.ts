import { MetadataRoute } from 'next';
import { DOMAIN, POSTS_PER_PAGE } from '@/constants/site';
import { getAllCategories, getAllPosts } from '@/utils/post';

type SitemapEntry = MetadataRoute.Sitemap[0];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = getAllPosts();
    const categories = getAllCategories();

    // 獲取最新文章日期作為動態內容的 lastModified
    const latestPostDate = posts.length > 0 ? new Date(posts[0]?.date || '') : new Date();

    // 預計算每個分類的文章數量，避免重複篩選
    const categoryPostCounts = new Map<string, number>([
        ['all', posts.length],
        ...categories.map((category): [string, number] => [
            category?.toLowerCase() || '',
            posts.filter((post) => post?.category?.toLowerCase() === category?.toLowerCase()).length,
        ]),
    ]);

    // 基本頁面路由
    const staticRoutes: SitemapEntry[] = [
        {
            url: DOMAIN,
            lastModified: latestPostDate, // 使用最新文章日期
            changeFrequency: 'monthly',
            priority: 1.0,
        },
        {
            url: `${DOMAIN}/about`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ];

    // 分類頁面路由（包含分頁）
    const categoryRoutes: SitemapEntry[] = Array.from(categoryPostCounts.entries()).flatMap(([category, postCount]) => {
        const totalPages = Math.ceil(postCount / POSTS_PER_PAGE);
        return Array.from({ length: totalPages }, (_, index): SitemapEntry => {
            const page = index + 1;
            return {
                url: `${DOMAIN}/blog/${category}/${page}`,
                lastModified: latestPostDate,
                changeFrequency: 'daily',
                priority: page === 1 ? 0.9 : 0.8, // 第一頁優先級較高
            };
        });
    });

    // 文章頁面路由
    const postRoutes: SitemapEntry[] = posts.map(
        (post): SitemapEntry => ({
            url: `${DOMAIN}/blog/posts/${post?.slug}`,
            lastModified: new Date(post.date || ''),
            changeFrequency: 'weekly',
            priority: 0.7,
        })
    );

    return [...staticRoutes, ...categoryRoutes, ...postRoutes];
}
