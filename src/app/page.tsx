import AuthorCard from '@/components/molecules/author-card';
import IntroCard from '@/components/molecules/intro-card';
import ProjectCard from '@/components/molecules/project-card';
import { HOME_INTRO_LIST } from '@/constants/intro';
import { PROJECT_LIST } from '@/constants/project';

const HomePage = () => {
    return (
        <>
            <div className="mx-auto max-w-6xl space-y-4 md:space-y-8">
                <section className="space-y-4 md:space-y-8">
                    <div className="flex items-center justify-center gap-4">
                        <div className="flex items-center justify-center">
                            {/* 作者卡片 */}
                            <AuthorCard />
                        </div>
                        <div className="flex items-center justify-center">
                            <ProjectCard className="w-74" badge="New" maxVisible={4} project={PROJECT_LIST[0]} />
                        </div>
                    </div>
                    {/* 簡短介紹卡片 */}
                    <IntroCard className="mx-auto max-w-3xl" list={HOME_INTRO_LIST} />
                </section>
            </div>
        </>
    );
};

export default HomePage;
