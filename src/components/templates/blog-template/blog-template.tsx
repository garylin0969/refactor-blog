import type { ReactNode } from 'react';
import Container from '@/components/atoms/container';
import SocialIconLinks from '@/components/molecules/social-icon-links';

interface BlogTemplateProps {
    children: ReactNode;
}

const BlogTemplate = ({ children }: BlogTemplateProps) => {
    return (
        <Container className="flex min-h-full max-w-4xl flex-col">
            <SocialIconLinks className="my-4 text-2xl" />
            {children}
        </Container>
    );
};

export default BlogTemplate;
