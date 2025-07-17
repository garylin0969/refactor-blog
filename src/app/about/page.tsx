import NextImage from 'next/image';
import SectionTitle from '@/components/atoms/section-title';
import AuthorCard from '@/components/molecules/author-card';
import IntroCard from '@/components/molecules/intro-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AboutPage = () => {
    return (
        <div className="my-8 space-y-8">
            <AuthorCard className="mx-auto" />
            <IntroCard className="mx-auto max-w-3xl" />
            <SectionTitle className="text-center">Experience</SectionTitle>
            <Card className="gap-2 p-2">
                <CardHeader className="flex items-center gap-2 p-0">
                    <NextImage src="/image-not-found.png" alt="Anue 鉅亨網" width={64} height={64} />
                    <div>
                        <CardTitle>Frontend Developer</CardTitle>
                        <CardDescription>Anue 鉅亨網</CardDescription>
                        <CardDescription>2024.03 - Now</CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <Button className="w-full">View Details</Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default AboutPage;
