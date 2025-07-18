import { posts, type Post } from '@velite';

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
export const getPostByCategory = (category: string) => {
    return sortPosts(posts).filter((post) => post?.category === category);
};

// 根據標籤獲取文章
export const getPostByTag = (tag: string) => {
    return sortPosts(posts).filter((post) => post?.tags?.includes(tag));
};
