import { ReactNode } from 'react';
import NextImage from '@/components/atoms/next-image';
import AuthorCard from '@/components/molecules/author-card';

interface BlogLayoutProps {
    children: ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex-1">{children}</div>
            <aside className="hidden w-74 space-y-4 md:block">
                <AuthorCard />
                <NextImage
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=garylin0969&theme=default&bg_color=00000000&hide_border=true"
                    width={296}
                    height={296}
                    alt="top languages"
                />
                <NextImage
                    src="https://github-readme-stats.vercel.app/api?username=garylin0969&show_icons=true&theme=default&bg_color=00000000&hide_rank=true&hide_border=true"
                    width={296}
                    height={296}
                    alt="github stats"
                />
            </aside>
        </div>
    );
};

export default BlogLayout;
