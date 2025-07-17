import NextImage from '@/components/atoms/next-image';
import SectionTitle from '@/components/atoms/section-title';
import AuthorCard from '@/components/molecules/author-card';
import IntroCard from '@/components/molecules/intro-card';
import SkillCard from '@/components/molecules/skill-card';
import ExperienceTimeline from '@/components/organisms/experience-timeline';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { SKILL_LIST } from '@/constants/skills';

const PROJECT_LIST = [
    {
        id: 'hot-now',
        image: '/projects/hot-now.jpg',
        url: 'https://hotnow.garylin.dev/',
        name: 'Hot Now',
        tags: [
            '2025',
            'Next',
            'TypeScript',
            'Tailwind CSS',
            'Shadcn UI',
            'Zustand',
            'TanStack Query',
            'React Hook Form',
            'Zod',
            'Google Analytics',
            'Puppeteer',
            'next-themes',
        ],
    },
    {
        id: 'life-restart',
        image: '/projects/life-restart.jpg',
        url: 'https://garylin0969-life-restart.vercel.app/',
        name: '人生重來 - Life Restart',
        tags: ['2025', 'Next', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'next-intl', 'next-themes'],
    },
    {
        id: 'perplexity-ai-concat',
        image: '/projects/perplexity-ai-concat.jpg',
        url: 'https://garylin0969-perplexity-concat.vercel.app/',
        name: 'AI 串接測試工具 - Perplexity AI Concat',
        tags: ['2025', 'Perplexity API', 'React', 'TypeScript', 'Tailwind CSS', 'React Hook Form', 'React Json View'],
    },
    {
        id: 'gemini-api-tester',
        image: '/projects/gemini-api-tester.jpg',
        url: 'https://garylin0969-gemini-tester.vercel.app/',
        name: 'AI 串接測試工具 - Gemini API Tester',
        tags: ['2025', 'Gemini', 'Next', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'React Query'],
    },
    {
        id: 'blog',
        image: '/projects/blog.jpg',
        url: 'https://github.com/garylin0969/blog',
        name: 'Blog - GaryLin.dev',
        tags: [
            '2024',
            'Next',
            'TypeScript',
            'Google Analytics',
            'Contentlayer',
            'Tailwind CSS',
            'next-themes',
            'Giscus',
        ],
    },
    {
        id: 'chinese-number-format',
        image: '/projects/chinese-number-format.avif',
        url: 'https://www.npmjs.com/package/chinese-number-format',
        name: 'NPM 套件 - chinese-number-format',
        tags: ['2024', 'TypeScript', 'Jest', 'NPM'],
    },
    {
        id: 'next13-imdb-clone',
        image: '/projects/next13-imdb-clone.avif',
        url: 'https://garylin0969-next-imdb-clone.vercel.app',
        name: 'Clone - IMDb',
        tags: ['2023', 'Next', 'TypeScript', 'React Hook Form', 'SWR', 'Tailwind CSS', 'next-themes'],
    },
    {
        id: 'next13-google-clone',
        image: '/projects/next13-google-clone.avif',
        url: 'https://garylin0969-next-google-clone.vercel.app',
        name: 'Clone - Google',
        tags: ['2023', 'Next', 'TypeScript', 'React Hook Form', 'SWR', 'Tailwind CSS'],
    },
    {
        id: 'akatsuki',
        image: '/projects/akatsuki.avif',
        url: 'https://garylin0969-akatsuki.vercel.app',
        name: '火影忍者 - 曉組織成員介紹',
        tags: ['2023', 'React', 'Redux', 'TypeScript', 'Styled Components'],
    },
    {
        id: 'ispan-project',
        image: '/projects/ispan-project.jpg',
        url: 'https://github.com/garylin0969/react-ispan-project',
        name: 'iSpan 資策會 - 專題',
        tags: ['2022', 'React', 'JavaScript', 'Socket.IO', 'Bootstrap', 'GSAP'],
    },
];

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
                    {SKILL_LIST.map((skill) => (
                        <SkillCard key={skill.id} title={skill.title} skills={skill.skills} />
                    ))}
                </div>
            </section>
            <section className="mx-auto max-w-6xl space-y-8">
                <SectionTitle className="text-center">Projects</SectionTitle>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    {PROJECT_LIST.map((project) => (
                        <a key={project.id} href={project.url}>
                            <Card className="gap-0 overflow-hidden p-0">
                                <AspectRatio ratio={16 / 9}>
                                    <NextImage className="object-cover" src={project.image} alt={project.name} fill />
                                </AspectRatio>
                                <CardContent className="space-y-4 p-6">
                                    <CardTitle>{project.name}</CardTitle>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <Badge key={tag}>{tag}</Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
