import { posts, type Post } from '@velite';

interface Options {
    sort?: 'asc' | 'desc';
    draft?: boolean;
}

// 排序文章 asc 升序，desc 降序
export const sortPosts = (posts: Post[], sort: 'asc' | 'desc' = 'desc') => {
    return posts.sort((a, b) => {
        if (sort === 'asc') {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        }
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
};

// 獲取所有文章
export const getAllPosts = () => {
    return sortPosts(posts);
};

// 獲取所有已發布文章
export const getPublishedPosts = () => {
    return sortPosts(posts.filter((post) => !post?.draft));
};

// 獲取所有草稿文章
export const getDraftPosts = () => {
    return sortPosts(posts.filter((post) => post?.draft));
};

// 根據 slug 獲取文章
export const getPostBySlug = (slug: string) => {
    return sortPosts(posts).find((post) => post?.slug === slug);
};

// 根據分類獲取文章
export const getPostByCategory = (category: string, options: Options = { sort: 'desc', draft: false }) => {
    const filteredPosts = posts.filter((post) => post?.category === category && !!post?.draft === options.draft);
    return sortPosts(filteredPosts, options.sort);
};

// 根據標籤獲取文章
export const getPostByTag = (tag: string) => {
    return sortPosts(posts).filter((post) => post?.tags?.includes(tag));
};

// 獲取所有分類
export const getAllCategories = (options: Options = { sort: 'desc', draft: false }) => {
    const filteredPosts = posts.filter((post) => !!post?.draft === options.draft);
    return [...new Set(filteredPosts.map((post) => post?.category).filter(Boolean))];
};

// 獲取所有標籤
export const getAllTags = (options: Options = { sort: 'desc', draft: false }) => {
    const filteredPosts = posts.filter((post) => !!post?.draft === options.draft);
    return [...new Set(filteredPosts.flatMap((post) => post?.tags).filter(Boolean))];
};

export const getLatestPosts = (limit: number = 5) => {
    return sortPosts(posts).slice(0, limit);
};

// 檢查分類是否存在
export const isCategoryExists = (category: string): boolean => {
    if (category === 'all') {
        return true;
    }

    const valid = getAllCategories()
        ?.map((category) => category?.toLowerCase())
        ?.includes(category?.toLowerCase());

    return valid;
};

// 獲取所有分類的統計資料
export const getCategoryStats = (options: Options = { sort: 'desc', draft: false }) => {
    // 獲取所有分類
    const categories = getAllCategories(options);

    // 如果沒有分類，返回空陣列
    if (categories?.length < 1) {
        return [];
    }

    // 獲取所有分類的統計資料
    return categories
        ?.map((category) => ({
            category,
            count: getPostByCategory(category ?? '', options)?.length,
        }))
        ?.filter((category) => category.count > 0);
};

/**
 * 獲取分頁文章
 * @param category 分類
 * @param page 頁碼
 * @param limit 每頁文章數量
 * @param options 選項
 */
export const getPaginatedPosts = (
    category: string,
    page: number,
    limit: number = 10,
    options: Options = { sort: 'desc', draft: false }
) => {
    const posts = category === 'all' ? getPublishedPosts() : getPostByCategory(category, options);
    const totalPages = Math.ceil(posts.length / limit);

    const start = (page - 1) * limit;
    const end = start + limit;

    const paginatedPosts = posts.slice(start, end);

    return {
        posts: paginatedPosts,
        totalPages,
        currentPage: page,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
    };
};
