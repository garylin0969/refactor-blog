import SectionTitle from '@/components/atoms/section-title';
import AuthorCard from '@/components/molecules/author-card';
import IntroCard from '@/components/molecules/intro-card';
import SkillCard from '@/components/molecules/skill-card';
import ExperienceTimeline from '@/components/organisms/experience-timeline';
import { SKILLS_LIST } from '@/constants/skills';

const AboutPage = () => {
    return (
        <div className="my-8 space-y-8">
            <section className="mx-auto space-y-8">
                {/* 作者卡片 */}
                <AuthorCard className="mx-auto" />
                {/* 簡短介紹卡片 */}
                <IntroCard className="mx-auto max-w-3xl" />
            </section>
            <section className="mx-auto max-w-6xl space-y-8">
                <SectionTitle className="text-center">Experience</SectionTitle>
                {/* 經歷時間軸 */}
                <ExperienceTimeline />
            </section>
            <section className="mx-auto max-w-6xl space-y-8">
                <SectionTitle className="text-center">Skills</SectionTitle>
                {/* 技能卡片 */}
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    {SKILLS_LIST.map((skill) => (
                        <SkillCard key={skill.id} title={skill.title} skills={skill.skills} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
