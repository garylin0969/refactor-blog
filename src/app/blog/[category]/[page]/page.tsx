import { notFound } from 'next/navigation';
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
    if (isNaN(validPage)) {
        notFound();
    }

    const { posts, currentPage, totalPages, hasNextPage, hasPreviousPage } = getPaginatedPosts(category, validPage);

    const pagination = {
        totalPages,
        currentPage,
        hasNextPage,
        hasPreviousPage,
    };

    return (
        <>
            <Pagination>
                <PaginationContent>
                    {pagination.hasPreviousPage && (
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                    )}
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    {pagination.totalPages > 1 && (
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                    )}
                    {pagination.hasNextPage && (
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    )}
                </PaginationContent>
            </Pagination>
        </>
    );
};

export default BlogPage;
