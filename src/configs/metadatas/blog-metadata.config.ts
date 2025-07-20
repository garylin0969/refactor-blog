import { Metadata } from 'next';
import baseMetadata from '@/configs/metadatas/base-metadata.config';
import { DOMAIN } from '@/configs/env';

const blogMetadata: Partial<Metadata> = {
    title: 'GaryLin | Blog',
    description: '歡迎來到 Gary Lin 的Blog。在這裡我分享關於前端開發、React.js、Next.js 等方面的想法和經驗。',
    openGraph: {
        title: 'GaryLin | Blog',
        description: '歡迎來到 Gary Lin 的Blog。在這裡我分享關於前端開發、React.js、Next.js 等方面的想法和經驗。',
        url: `${DOMAIN}/blog/all/1`,
        siteName: 'Gary Lin Blog',
        images: [
            {
                url: '/assets/favicons/favicon-512x512.png',
                width: 1200,
                height: 630,
                alt: 'Gary Lin Blog - Frontend Development Insights',
            },
        ],
        locale: 'zh_TW',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'GaryLin | Blog',
        description: '歡迎來到 Gary Lin 的Blog。在這裡我分享關於前端開發、React.js、Next.js 等方面的想法和經驗。',
        images: [
            {
                url: '/assets/favicons/favicon-512x512.png',
                width: 1200,
                height: 630,
                alt: 'Gary Lin Blog - Frontend Development Insights',
            },
        ],
    },
    keywords: [
        'Gary Lin',
        'Frontend Developer',
        'Web Development',
        'React.js',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Blog',
        '前端',
        '前端開發',
        '前端開發者',
        '前端工程師',
        '前端開發人員',
        '網頁開發',
        '部落格',
        '技術部落格',
    ],
    alternates: { canonical: `${DOMAIN}/blog/all/1` },
};

const blogMetadataConfig = { ...baseMetadata, ...blogMetadata };

export default blogMetadataConfig;
