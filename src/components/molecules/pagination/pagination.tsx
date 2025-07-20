import cn from '@/utils/cn';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { NextLink } from '../../atoms/link';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    className?: string;
    createPageUrl: (page: number) => string;
}

const Pagination = ({ currentPage, totalPages, className, createPageUrl }: PaginationProps) => {
    // 生成手機版頁碼 (最多5個)
    const getMobilePages = () => {
        const pages: number[] = [];
        const maxPages = 5;
        let start = Math.max(1, currentPage - Math.floor(maxPages / 2));
        const end = Math.min(start + maxPages - 1, totalPages);

        // 調整起始位置，確保總是顯示5個頁碼（如果有足夠的頁數）
        if (end - start + 1 < maxPages && end === totalPages) {
            start = Math.max(1, end - maxPages + 1);
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }
        return pages;
    };

    // 生成桌面版頁碼 (帶省略號)
    const getDesktopPages = () => {
        const delta = 1;
        const pages: (number | string)[] = [];

        pages.push(1);

        const rangeStart = Math.max(2, currentPage - delta);
        const rangeEnd = Math.min(totalPages - 1, currentPage + delta);

        if (rangeStart > 2) {
            pages.push('...');
        }

        for (let i = rangeStart; i <= rangeEnd; i++) {
            pages.push(i);
        }

        if (rangeEnd < totalPages - 1) {
            pages.push('...');
        }

        if (totalPages > 1) {
            pages.push(totalPages);
        }

        return pages;
    };

    const mobilePages = getMobilePages();
    const desktopPages = getDesktopPages();

    // 按鈕基礎樣式
    const buttonBaseStyle = 'flex items-center justify-center transition-all duration-200 ease-in-out';

    // 頁碼按鈕樣式
    const pageButtonStyle = cn(
        buttonBaseStyle,
        'h-8 min-w-[2rem] rounded-md border border-transparent px-3 text-sm font-medium',
        'hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600',
        'dark:hover:border-sky-500 dark:hover:bg-sky-950 dark:hover:text-sky-300',
    );

    // 頁碼按鈕樣式
    const activePageStyle =
        'border-sky-500 bg-sky-50 text-sky-600 dark:border-sky-500 dark:bg-sky-950 dark:text-sky-300';

    // 頁碼按鈕樣式
    const inactivePageStyle = 'text-gray-700 dark:text-gray-300';

    // 箭頭按鈕樣式
    const arrowButtonStyle = cn(
        buttonBaseStyle,
        'h-8 w-8 rounded-md text-gray-700 dark:text-gray-300',
        'hover:bg-sky-50 hover:text-sky-600 dark:hover:bg-sky-950 dark:hover:text-sky-300',
        'disabled:pointer-events-none disabled:opacity-50',
    );

    return (
        <nav className={cn('flex items-center justify-center gap-1 md:gap-2', className)} aria-label="Pagination">
            <NextLink
                href={createPageUrl(currentPage - 1)}
                className={cn(arrowButtonStyle, !(currentPage > 1) && 'pointer-events-none opacity-50')}
                aria-label="Previous page"
            >
                <HiChevronLeft className="h-5 w-5" />
            </NextLink>

            {/* 手機版頁碼 */}
            <div className="flex items-center gap-1 md:hidden">
                {mobilePages.map((page) => (
                    <NextLink
                        key={page}
                        href={createPageUrl(page)}
                        className={cn(pageButtonStyle, page === currentPage ? activePageStyle : inactivePageStyle)}
                        aria-current={page === currentPage ? 'page' : undefined}
                    >
                        {page}
                    </NextLink>
                ))}
            </div>

            {/* 桌面版頁碼 */}
            <div className="hidden items-center gap-2 md:flex">
                {desktopPages.map((page, index) =>
                    page === '...' ? (
                        <span
                            key={`ellipsis-${index}`}
                            className="w-6 text-center text-sm text-gray-500 dark:text-gray-400"
                        >
                            ⋯
                        </span>
                    ) : (
                        <NextLink
                            key={page}
                            href={createPageUrl(Number(page))}
                            className={cn(pageButtonStyle, page === currentPage ? activePageStyle : inactivePageStyle)}
                            aria-current={page === currentPage ? 'page' : undefined}
                        >
                            {page}
                        </NextLink>
                    ),
                )}
            </div>

            <NextLink
                href={createPageUrl(currentPage + 1)}
                className={cn(arrowButtonStyle, !(currentPage < totalPages) && 'pointer-events-none opacity-50')}
                aria-label="Next page"
            >
                <HiChevronRight className="h-5 w-5" />
            </NextLink>
        </nav>
    );
};

export default Pagination;
