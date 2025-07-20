import type { Metadata } from 'next';
import { ReactNode } from 'react';
import BlogTemplate from '@/components/templates/blog-template';
import blogMetadataConfig from '@/configs/metadatas/blog-metadata.config';

export const metadata: Metadata = blogMetadataConfig;

const BlogLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return <BlogTemplate>{children}</BlogTemplate>;
};

export default BlogLayout;
