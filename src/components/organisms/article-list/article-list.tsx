import { PostT } from '@/types/post';
import ArticleCard from '@/components/molecules/article-card';

interface ArticleListProps {
    posts: PostT[];
}

const ArticleList = ({ posts }: ArticleListProps) => {
    return (
        <div className="space-y-3">
            {/* {posts?.map((post) => (
                <div
                    key={post?.title}
                    className={cn(
                        'flex justify-center',
                        'rounded-xl border dark:border-white/30',
                        'transition-scale shadow-lg duration-300',
                        'hover:scale-[1.02] hover:shadow-xl',
                    )}
                >
                    <ArticleCard className="w-full" post={post} />
                </div>
            ))} */}
            {posts?.map((post) => <ArticleCard key={post?.title} className="w-full" post={post} />)}
        </div>
    );
};

export default ArticleList;
