import type { Metadata } from 'next';
import SectionTitle from '@/components/atoms/section-title';
import AuthorCard from '@/components/molecules/author-card';
import GithubStatsCard from '@/components/molecules/github-stats-card/github-stats-card';
import IntroCard from '@/components/molecules/intro-card';
import ProjectCard from '@/components/molecules/project-card';
import SkillCard from '@/components/molecules/skill-card';
import ExperienceTimeline from '@/components/organisms/experience-timeline';
import { DEFAULT_TOP_LANGS_CONFIG } from '@/constants/github-stats';
import { ABOUT_INTRO_LIST } from '@/constants/intro';
import { PROJECT_LIST } from '@/constants/project';
import { SKILL_LIST } from '@/constants/skill';

export const metadata: Metadata = {
    title: 'About',
    description: '了解更多關於 Gary Lin 的背景、工作經驗、技能和專案',
    openGraph: {
        title: 'About | GaryLin Dev',
        description: '了解更多關於 Gary Lin 的背景、工作經驗、技能和專案',
        images: [
            {
                url: '/favicons/android-chrome-512x512.png',
                width: 512,
                height: 512,
                alt: 'GaryLin Dev',
            },
        ],
    },
    twitter: {
        title: 'About | GaryLin Dev',
        description: '了解更多關於 Gary Lin 的背景、工作經驗、技能和專案',
        images: ['/favicons/android-chrome-512x512.png'],
    },
};

const AboutPage = () => {
    return (
        <div className="mx-auto max-w-6xl space-y-4 md:space-y-8">
            <section className="space-y-4 md:space-y-8">
                <div className="flex flex-wrap items-center justify-center gap-4">
                    {/* 作者卡片 */}
                    <AuthorCard />
                    {/* Github Stats Card - Top Languages */}
                    <GithubStatsCard
                        useCard={false}
                        type="top-langs"
                        params={DEFAULT_TOP_LANGS_CONFIG}
                        width={350}
                        height={300}
                        loading="eager"
                        alt="top languages"
                    />
                </div>
                {/* 簡短介紹卡片 */}
                <IntroCard className="mx-auto max-w-3xl" list={ABOUT_INTRO_LIST} />
            </section>
            <section className="space-y-4 md:space-y-8">
                <SectionTitle className="text-center">Experience</SectionTitle>
                {/* 經歷時間軸 */}
                <ExperienceTimeline />
            </section>
            <section className="space-y-4 md:space-y-8">
                <SectionTitle className="text-center">Skills</SectionTitle>
                {/* 技能卡片 */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    {SKILL_LIST.map((skill) => (
                        <SkillCard key={skill.id} title={skill.title} skills={skill.skills} />
                    ))}
                </div>
            </section>
            <section className="space-y-4 md:space-y-8">
                <SectionTitle className="text-center">Projects</SectionTitle>
                {/* 專案卡片 */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    {PROJECT_LIST.map((project) => (
                        <ProjectCard key={project.id} project={project} className="h-full" />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
