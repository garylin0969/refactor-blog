import { Card, CardContent } from '@/components/ui/card';
import { BLOG_STATS_MAP } from '@/constants/blog-stats';
import { cn } from '@/utils/shadcn';

interface BlogStatsCardProps {
    className?: string;
}

// 統計文章、分類、標籤的卡片
const BlogStatsCard = ({ className }: BlogStatsCardProps) => {
    return (
        <Card className={cn(className)}>
            <CardContent className="flex flex-row flex-wrap items-center justify-around">
                {BLOG_STATS_MAP.map((stats) => (
                    <div className="space-y-2 text-center text-sm">
                        <div className="font-bold">{stats?.count}</div>
                        <div className="font-medium">{stats?.label}</div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default BlogStatsCard;
