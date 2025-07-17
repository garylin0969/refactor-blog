import SectionTitle from '@/components/atoms/section-title';
import AuthorCard from '@/components/molecules/author-card';
import IntroCard from '@/components/molecules/intro-card';
import ExperienceTimeline from '@/components/organisms/experience-timeline';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SKILLS_LIST } from '@/constants/skills';

const AboutPage = () => {
    return (
        <div className="my-8 space-y-8">
            <section className="mx-auto space-y-8">
                <AuthorCard className="mx-auto" />
                <IntroCard className="mx-auto max-w-3xl" />
            </section>
            <section className="mx-auto max-w-6xl space-y-8">
                <SectionTitle className="text-center">Experience</SectionTitle>
                {/* 時間軸容器 */}
                <ExperienceTimeline />
            </section>
            <section className="mx-auto max-w-6xl space-y-8">
                <SectionTitle className="text-center">Skills</SectionTitle>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    {SKILLS_LIST.map((skill) => (
                        <Card key={skill.id} className="gap-0 bg-transparent p-5">
                            <CardHeader className="gap-0 border-b !p-0 !pb-2">
                                <CardTitle className="text-lg">{skill.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-0">
                                <ul className="list-inside list-disc space-y-1 p-3 text-base">
                                    {skill.skills.map((skill) => (
                                        <li key={skill}>{skill}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
