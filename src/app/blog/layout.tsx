import { ReactNode } from 'react';
import AuthorCard from '@/components/molecules/author-card';

interface BlogLayoutProps {
    children: ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
    return (
        <div className="flex">
            <div className="flex-1">{children}</div>
            <aside className="w-74">
                <AuthorCard />
            </aside>
        </div>
    );
};

export default BlogLayout;
