import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostCard from '@/components/molecules/blog-post-card';
import { PaginationControls } from '@/components/molecules/pagination-controls';
import { POSTS_PER_PAGE } from '@/constants/site';
import { calculatePaginationState, validatePageNumber } from '@/utils/pagination';
import { getAllCategories, getPaginatedPosts, getPublishedPosts, isCategoryExists } from '@/utils/post';

export async function generateStaticParams() {
    const allPosts = getPublishedPosts();
    const allCategories = getAllCategories();

    // 預計算每個分類的文章數量，避免重複篩選
    const categoryPostCounts = new Map<string, number>([
        ['all', allPosts.length], // 'all' 分類包含所有文章
        ...allCategories.map((category): [string, number] => [
            category?.toLowerCase() || '',
            allPosts.filter((post) => post?.category?.toLowerCase() === category?.toLowerCase()).length,
        ]),
    ]);

    // 使用 flatMap 簡化路徑生成邏輯
    return Array.from(categoryPostCounts.entries()).flatMap(([category, postCount]) => {
        const totalPages = Math.ceil(postCount / POSTS_PER_PAGE);
        return Array.from({ length: totalPages }, (_, index) => ({
            category,
            page: (index + 1).toString(),
        }));
    });
}

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Blog',
        description: '瀏覽 Gary Lin 的文章，涵蓋前端開發、React.js、Next.js 等主題',
        openGraph: {
            title: 'Blog | GaryLin Dev',
            description: '瀏覽 Gary Lin 的文章，涵蓋前端開發、React.js、Next.js 等主題',
            images: [
                {
                    url: '/favicons/android-chrome-512x512.png',
                    width: 512,
                    height: 512,
                    alt: 'GaryLin Dev',
                },
            ],
        },
        twitter: {
            title: 'Blog | GaryLin Dev',
            description: '瀏覽 Gary Lin 的文章，涵蓋前端開發、React.js、Next.js 等主題',
            images: ['/favicons/android-chrome-512x512.png'],
        },
    };
}

interface BlogPageProps {
    params: Promise<{
        category: string;
        page: string;
    }>;
}

const BlogPage = async ({ params }: BlogPageProps) => {
    const { category, page } = await params;

    // 驗證並處理頁碼
    const validPage = validatePageNumber(page);
    if (!validPage) {
        notFound();
    }

    // 選擇分類
    const selectedCategory = category === 'all' ? 'all' : category;

    // 檢查分類是否存在
    if (!isCategoryExists(selectedCategory)) {
        notFound();
    }

    // 獲取分頁文章
    const { posts, currentPage, totalPages } = getPaginatedPosts(selectedCategory, validPage);

    // 如果沒有文章，顯示 404
    if (posts.length === 0 && currentPage > 1) {
        notFound();
    }

    // 計算分頁狀態
    const paginationState = calculatePaginationState({
        currentPage,
        totalPages,
    });

    // 生成分頁連結
    const getPageUrl = (pageNumber: number) => `/blog/${category}/${pageNumber}`;

    return (
        <div className="mx-auto max-w-5xl space-y-4">
            {/* 文章列表 */}
            <div>
                {posts.map((post) => (
                    <BlogPostCard key={post?.slug} className="border-b" post={post} />
                ))}
            </div>

            {/* 分頁控制器 */}
            <PaginationControls paginationState={paginationState} getPageUrl={getPageUrl} />
        </div>
    );
};

export default BlogPage;
