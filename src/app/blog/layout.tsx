import Link from 'next/link';
import { ReactNode } from 'react';
import AuthorCard from '@/components/molecules/author-card';
import BlogStatsCard from '@/components/molecules/blog-stats-card';
import GithubStatsCard from '@/components/molecules/github-stats-card';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DEFAULT_TOP_LANGS_CONFIG, DEFAULT_GITHUB_STATS_PARAMS } from '@/constants/github-stats';
import { getCategoryStats } from '@/utils/post';

interface BlogLayoutProps {
    children: ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
    const categories = getCategoryStats();

    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex-1">{children}</div>
            <aside className="hidden w-74 space-y-4 md:block">
                <AuthorCard />
                <BlogStatsCard />
                <Card className="gap-2">
                    <CardHeader>
                        <CardTitle>Categories</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {categories?.map((category) => (
                            <Link key={category?.category} href={`/blog/${category?.category}`}>
                                <Badge variant="outline" className="hover:text-primary px-2 py-1">
                                    {category?.category} {category?.count}
                                </Badge>
                            </Link>
                        ))}
                    </CardContent>
                </Card>
                <GithubStatsCard
                    type="top-langs"
                    params={DEFAULT_TOP_LANGS_CONFIG}
                    width={296}
                    height={282}
                    loading="eager"
                    alt="top languages"
                />
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
