import AuthorCard from '@/components/molecules/author-card';
import GithubStatsCard from '@/components/molecules/github-stats-card';
import IntroCard from '@/components/molecules/intro-card';
import { DEFAULT_TOP_LANGS_CONFIG } from '@/constants/github-stats';
import { HOME_INTRO_LIST } from '@/constants/intro';

const HomePage = () => {
    return (
        <>
            <div className="mx-auto max-w-6xl space-y-4 md:space-y-8">
                <section className="space-y-4 md:space-y-8">
                    {/* 作者卡片 */}
                    <AuthorCard className="mx-auto" />
                    {/* 簡短介紹卡片 */}
                    <IntroCard className="mx-auto max-w-3xl" list={HOME_INTRO_LIST} />
                </section>
            </div>
        </>
    );
};

export default HomePage;
