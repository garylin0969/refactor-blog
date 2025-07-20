import { getAllCategories, getAllPosts, POSTS_PER_PAGE } from '@/utils/posts';
import BlogPage from '@/components/pages/blog-page';

export async function generateStaticParams() {
    const categories = getAllCategories();
    const allPosts = getAllPosts();
    const paths: { category: string; page: string }[] = [];

    // 為每個分類生成頁碼路徑
    const addPagesForCategory = (category: string, postCount: number) => {
        const totalPages = Math.ceil(postCount / POSTS_PER_PAGE);
        for (let page = 1; page <= totalPages; page++) {
            paths.push({ category, page: page.toString() });
        }
    };

    // 處理 'all' 分類
    addPagesForCategory('all', allPosts.length);

    // 處理其他分類
    categories.forEach((category) => {
        const categoryPosts = allPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase());
        addPagesForCategory(category.toLowerCase(), categoryPosts.length);
    });

    return paths;
}

export default BlogPage;
