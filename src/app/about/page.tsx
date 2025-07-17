import AuthorCard from '@/components/molecules/author-card';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
    return (
        <div className="my-8 space-y-8">
            <AuthorCard className="mx-auto" />
            <Card className="relative mx-auto max-w-3xl bg-transparent">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-sky-500 to-purple-500 opacity-20 blur transition duration-300" />
                <CardContent className="font-semibold">
                    <p>Hi there</p>
                    <p>
                        我是 Gary Lin，目前於 鉅亨網 擔任前端工程師，主要使用 Next.js、React.js、TypeScript 和 Tailwind
                        CSS。閒暇時喜愛看動漫、小說，經常在社群平台上衝浪的哥布林。
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};

export default AboutPage;
