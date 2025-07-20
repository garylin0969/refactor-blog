import { getLatestPosts } from '@/utils/posts';
import ArticleList from '../article-list';
import { NextLink } from '@/components/atoms/link';
import { BaseButton } from '@/components/atoms/button';
import SectionTitle from '@/components/molecules/section-title';
import { homeSectionTitleConfig } from '@/configs/components/section-title.config';
import latestArticlesConfig from '@/configs/components/latest-articles.config';

const { latestArticles: latestArticlesSectionConfig } = homeSectionTitleConfig;
const latestPosts = getLatestPosts(latestArticlesConfig?.count); // 獲取最新的 count 篇文章

const LatestArticles = () => {
    return (
        <div className="space-y-6">
            <SectionTitle
                title={latestArticlesSectionConfig?.title}
                align={latestArticlesSectionConfig?.align}
                showDivider={latestArticlesSectionConfig?.showDivider}
            />
            <ArticleList posts={latestPosts} />
            {latestArticlesConfig?.button?.enable && (
                <div className="flex justify-end">
                    <NextLink href={latestArticlesConfig?.button?.href} className="text-blue-500 hover:underline">
                        <BaseButton>{latestArticlesConfig?.button?.text}</BaseButton>
                    </NextLink>
                </div>
            )}
        </div>
    );
};

export default LatestArticles;
