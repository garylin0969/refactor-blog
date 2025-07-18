import { getAllCategories, getAllTags, getPublishedPosts } from '@/utils/post';

const posts = getPublishedPosts();
const categories = getAllCategories();
const tags = getAllTags();

export const BLOG_STATS_MAP = [
    {
        label: 'Posts',
        count: posts?.length,
    },
    {
        label: 'Categories',
        count: categories?.length,
    },
    {
        label: 'Tags',
        count: tags?.length,
    },
];
