import { notFound } from 'next/navigation';
import { BlogPostCard } from '@/components/molecules/blog-post-card';
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { getPaginatedPosts } from '@/utils/post';

interface BlogPageProps {
    params: Promise<{
        category: string;
        page: string;
    }>;
}

const BlogPage = async ({ params }: BlogPageProps) => {
    const { category, page } = await params;

    // 驗證並處理頁碼
    const validPage = Number(page);
    if (isNaN(validPage) || validPage < 1) {
        notFound();
    }

    const selectedCategory = category === 'all' ? 'all' : category;

    const { posts, currentPage, totalPages, hasNextPage, hasPreviousPage } = getPaginatedPosts(
        selectedCategory,
        validPage
    );

    // 如果沒有文章，顯示 404
    if (posts.length === 0 && currentPage > 1) {
        notFound();
    }

    // 生成分頁連結
    const getPageUrl = (pageNumber: number) => `/blog/${category}/${pageNumber}`;

    // 生成頁碼陣列
    const getPageNumbers = () => {
        const pages = [];
        const maxPagesToShow = 5;

        if (totalPages <= maxPagesToShow) {
            // 如果總頁數不多，顯示所有頁碼
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // 複雜邏輯：顯示首頁、末頁、當前頁前後兩頁
            if (currentPage <= 3) {
                // 當前頁在前面
                pages.push(1, 2, 3, 4, 5);
            } else if (currentPage >= totalPages - 2) {
                // 當前頁在後面
                pages.push(totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                // 當前頁在中間
                pages.push(currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2);
            }
        }

        return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="mx-auto max-w-5xl px-4">
            <div className="divide-border divide-y">
                {posts.map((post) => (
                    <BlogPostCard key={post?.slug} post={post} />
                ))}
            </div>

            {/* 分頁器 */}
            {totalPages > 1 && (
                <Pagination>
                    <PaginationContent>
                        {/* 上一頁 */}
                        {hasPreviousPage && (
                            <PaginationItem>
                                <PaginationPrevious href={getPageUrl(currentPage - 1)} />
                            </PaginationItem>
                        )}

                        {/* 首頁 */}
                        {currentPage > 3 && totalPages > 5 && (
                            <>
                                <PaginationItem>
                                    <PaginationLink href={getPageUrl(1)} isActive={currentPage === 1}>
                                        1
                                    </PaginationLink>
                                </PaginationItem>
                                {currentPage > 4 && (
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                )}
                            </>
                        )}

                        {/* 頁碼 */}
                        {pageNumbers.map((pageNumber) => (
                            <PaginationItem key={pageNumber}>
                                <PaginationLink href={getPageUrl(pageNumber)} isActive={pageNumber === currentPage}>
                                    {pageNumber}
                                </PaginationLink>
                            </PaginationItem>
                        ))}

                        {/* 末頁 */}
                        {currentPage < totalPages - 2 && totalPages > 5 && (
                            <>
                                {currentPage < totalPages - 3 && (
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                )}
                                <PaginationItem>
                                    <PaginationLink href={getPageUrl(totalPages)} isActive={currentPage === totalPages}>
                                        {totalPages}
                                    </PaginationLink>
                                </PaginationItem>
                            </>
                        )}

                        {/* 下一頁 */}
                        {hasNextPage && (
                            <PaginationItem>
                                <PaginationNext href={getPageUrl(currentPage + 1)} />
                            </PaginationItem>
                        )}
                    </PaginationContent>
                </Pagination>
            )}
        </div>
    );
};

export default BlogPage;
