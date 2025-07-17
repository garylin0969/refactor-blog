import SectionTitle from '@/components/atoms/section-title';
import AuthorCard from '@/components/molecules/author-card';
import IntroCard from '@/components/molecules/intro-card';
import ExperienceTimeline from '@/components/organisms/experience-timeline';

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
        </div>
    );
};

export default AboutPage;
