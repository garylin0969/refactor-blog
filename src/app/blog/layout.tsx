import { ReactNode } from 'react';
import AuthorCard from '@/components/molecules/author-card';

interface BlogLayoutProps {
    children: ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="flex-1">{children}</div>
            <aside className="hidden w-74 md:block">
                <AuthorCard />
            </aside>
        </div>
    );
};

export default BlogLayout;
