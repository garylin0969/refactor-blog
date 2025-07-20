import { MetadataRoute } from 'next';
import { DOMAIN } from '@/configs/env';
import { getAllCategories, getAllPosts, POSTS_PER_PAGE } from '@/utils/posts';
import { PostT } from '@/types/post';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // 獲取所有文章
    const posts = getAllPosts();
    const categories = getAllCategories();

    // 基本頁面
    const routes = [
        {
            url: DOMAIN,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 1.0, // 首頁最重要
        },
        {
            url: `${DOMAIN}/about`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8, // 關於頁面
        },
    ];

    // 分類頁面（包含分頁）
    const categoryRoutes = [];

    // 處理 'all' 分類的分頁
    const allTotalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
    for (let page = 1; page <= allTotalPages; page++) {
        categoryRoutes.push({
            url: `${DOMAIN}/blog/all/${page}`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: page === 1 ? 0.9 : 0.8, // 第一頁優先級較高
        });
    }

    // 處理其他分類的分頁
    categories.forEach((category) => {
        const categoryPosts = posts.filter((post: PostT) => post?.category?.toLowerCase() === category.toLowerCase());
        const totalPages = Math.ceil(categoryPosts.length / POSTS_PER_PAGE);

        for (let page = 1; page <= totalPages; page++) {
            categoryRoutes.push({
                url: `${DOMAIN}/blog/${category.toLowerCase()}/${page}`,
                lastModified: new Date(),
                changeFrequency: 'daily' as const,
                priority: page === 1 ? 0.9 : 0.8,
            });
        }
    });

    // 文章頁面
    const postRoutes = posts?.map((post: PostT) => ({
        url: `${DOMAIN}/blog/posts${encodeURI(post?.url || '')}`,
        lastModified: new Date(post.date || ''),
        changeFrequency: 'weekly' as const,
        priority: 0.7, // 降低單篇文章的優先級，因為分類頁面更重要
    }));

    return [...routes, ...categoryRoutes, ...postRoutes];
}
