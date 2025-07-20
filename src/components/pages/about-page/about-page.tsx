import { aboutSectionTitleConfig } from '@/configs/components/section-title.config';
import Container from '@/components/atoms/container';
import SectionTitle from '@/components/molecules/section-title';
import InfoCard from '@/components/organisms/info-card';
import AboutInfo from '@/components/organisms/about-info';
import Experience from '@/components/organisms/experience';
import Skills from '@/components/organisms/skills';
import Projects from '@/components/organisms/projects';

const {
    experience: experienceSectionConfig,
    skills: skillsSectionConfig,
    projects: projectsSectionConfig,
} = aboutSectionTitleConfig;

const AboutPage = () => {
    return (
        <Container className="space-y-8">
            <InfoCard className="mt-6" />
            <AboutInfo className="mx-auto max-w-3xl" />
            <SectionTitle
                align={experienceSectionConfig?.align}
                title={experienceSectionConfig?.title}
                showDivider={experienceSectionConfig?.showDivider}
            />
            <Experience />
            <SectionTitle
                align={skillsSectionConfig?.align}
                title={skillsSectionConfig?.title}
                showDivider={skillsSectionConfig?.showDivider}
            />
            <Skills />
            <SectionTitle
                align={projectsSectionConfig?.align}
                title={projectsSectionConfig?.title}
                showDivider={projectsSectionConfig?.showDivider}
            />
            <Projects className="pb-6" />
        </Container>
    );
};

export default AboutPage;
