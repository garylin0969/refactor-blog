import SectionTitle from '@/components/atoms/section-title';
import AuthorCard from '@/components/molecules/author-card';
import IntroCard from '@/components/molecules/intro-card';

const AboutPage = () => {
    return (
        <div className="my-8 space-y-8">
            <AuthorCard className="mx-auto" />
            <IntroCard className="mx-auto max-w-3xl" />
            <SectionTitle className="text-center">Experience</SectionTitle>
        </div>
    );
};

export default AboutPage;
