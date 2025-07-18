import { ReactNode } from 'react';
import AuthorCard from '@/components/molecules/author-card';
import GithubStatsCard from '@/components/molecules/github-stats-card';
import { DEFAULT_TOP_LANGS_CONFIG, DEFAULT_GITHUB_STATS_PARAMS } from '@/constants/github-stats';

interface BlogLayoutProps {
    children: ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex-1">{children}</div>
            <aside className="hidden w-74 space-y-4 md:block">
                <AuthorCard />
                <GithubStatsCard type="top-langs" params={DEFAULT_TOP_LANGS_CONFIG} alt="top languages" />
                <GithubStatsCard type="stats" params={DEFAULT_GITHUB_STATS_PARAMS} alt="github stats" />
            </aside>
        </div>
    );
};

export default BlogLayout;
