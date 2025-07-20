import Container from '@/components/atoms/container';
import LatestArticles from '@/components/organisms/latest-articles';
import WebsiteIntroduction from '@/components/organisms/website-introduction';

const HomePage = () => {
    return (
        <Container className="h-full">
            <div className="mt-6 flex h-full flex-col justify-evenly space-y-6 md:mt-0">
                <WebsiteIntroduction />
                <LatestArticles />
            </div>
        </Container>
    );
};

export default HomePage;
