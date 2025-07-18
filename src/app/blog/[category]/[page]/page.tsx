import { notFound } from 'next/navigation';
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

    return <div>page</div>;
};

export default BlogPage;
