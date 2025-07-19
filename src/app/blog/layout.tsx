import { ReactNode } from 'react';
import AuthorCard from '@/components/molecules/author-card';
import BlogCategoriesCard from '@/components/molecules/blog-categories-card';
import BlogStatsCard from '@/components/molecules/blog-stats-card';
import GithubStatsCard from '@/components/molecules/github-stats-card';
import { DEFAULT_TOP_LANGS_CONFIG, DEFAULT_GITHUB_STATS_PARAMS } from '@/constants/github-stats';

interface BlogLayoutProps {
    children: ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex-1 md:mr-4">{children}</div>
            <aside className="hidden w-74 space-y-4 md:block">
                {/* 作者 */}
                <AuthorCard />
                {/* 文章統計 */}
                <BlogStatsCard />
                {/* 文章分類 */}
                <BlogCategoriesCard />
                {/* GitHub 使用最多的程式語言 */}
                <GithubStatsCard
                    type="top-langs"
                    params={DEFAULT_TOP_LANGS_CONFIG}
                    width={296}
                    height={282}
                    loading="eager"
                    alt="top languages"
                />
                {/* GitHub 統計 */}
                <GithubStatsCard
                    type="stats"
                    params={DEFAULT_GITHUB_STATS_PARAMS}
                    width={296}
                    height={190}
                    loading="eager"
                    alt="github stats"
                />
            </aside>
        </div>
    );
};

export default BlogLayout;
