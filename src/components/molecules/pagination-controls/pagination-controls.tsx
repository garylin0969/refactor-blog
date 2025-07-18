import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';
import { PaginationState } from '@/utils/pagination';

interface PaginationControlsProps {
    paginationState: PaginationState;
    getPageUrl: (pageNumber: number) => string;
    className?: string;
}

/**
 * 分頁控制器元件
 * 負責渲染分頁導航元素
 */
export const PaginationControls = ({ paginationState, getPageUrl, className }: PaginationControlsProps) => {
    const {
        currentPage,
        totalPages,
        hasNextPage,
        hasPreviousPage,
        pageNumbers,
        shouldShowFirstPage,
        shouldShowLastPage,
        shouldShowFirstEllipsis,
        shouldShowLastEllipsis,
    } = paginationState;

    // 如果只有一頁，不顯示分頁器
    if (totalPages <= 1) {
        return null;
    }

    return (
        <Pagination className={className}>
            <PaginationContent>
                {/* 上一頁 */}
                {hasPreviousPage && (
                    <PaginationItem>
                        <PaginationPrevious href={getPageUrl(currentPage - 1)} />
                    </PaginationItem>
                )}

                {/* 首頁與前置省略符號 */}
                {shouldShowFirstPage && (
                    <>
                        <PaginationItem>
                            <PaginationLink href={getPageUrl(1)} isActive={currentPage === 1}>
                                1
                            </PaginationLink>
                        </PaginationItem>
                        {shouldShowFirstEllipsis && (
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

                {/* 末頁與後置省略符號 */}
                {shouldShowLastPage && (
                    <>
                        {shouldShowLastEllipsis && (
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
    );
};
