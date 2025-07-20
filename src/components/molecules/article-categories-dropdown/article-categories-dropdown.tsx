'use client';

import { useRouter } from 'next/navigation';
import { DivPropsT } from '@/types/html';
import { getAllCategories } from '@/utils/posts';
import Dropdown from '@/components/molecules/dropdown';

interface ArticleCategoriesDropdownProps extends DivPropsT {
    currentCategory: string;
}

// 文章分類下拉選單
const ArticleCategoriesDropdown = ({ currentCategory, className }: ArticleCategoriesDropdownProps) => {
    const router = useRouter();

    const categories = getAllCategories() || []; // 確保不會是 undefined

    const options = [
        {
            id: 'all',
            label: 'All',
            value: 'all',
        },
        ...categories.map((category) => ({
            id: category,
            label: category,
            value: category?.toLowerCase(),
        })),
    ];

    return (
        <Dropdown
            className={className}
            value={currentCategory}
            options={options}
            onOptionChange={(category) => router.push(`/blog/${category}/1`)}
        />
    );
};

export default ArticleCategoriesDropdown;
