import { BaseButton } from '@/components/atoms/button';
import { NextLink } from '@/components/atoms/link';
import { UlPropsT } from '@/types/html';
import { getAllCategories } from '@/utils/posts';

// 文章分類按鈕
const ArticleCategoriesButton = ({ className, ...props }: UlPropsT) => {
    const categories = getAllCategories() || []; // 確保不會是 undefined

    return (
        <ul className={className} {...props}>
            <li>
                <NextLink href="/blog/all/1">
                    <BaseButton>All</BaseButton>
                </NextLink>
            </li>
            {categories?.map((category) => (
                <li key={category}>
                    <NextLink href={`/blog/${category.toLowerCase()}/1`}>
                        <BaseButton>{category}</BaseButton>
                    </NextLink>
                </li>
            ))}
        </ul>
    );
};

export default ArticleCategoriesButton;
