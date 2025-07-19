import { notFound } from 'next/navigation';
import { BlogPostCard } from '@/components/molecules/blog-post-card';
import { PaginationControls } from '@/components/molecules/pagination-controls';
import { calculatePaginationState, validatePageNumber } from '@/utils/pagination';
import { getPaginatedPosts, isCategoryExists } from '@/utils/post';

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
        <div className="mx-auto max-w-5xl px-4">
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
