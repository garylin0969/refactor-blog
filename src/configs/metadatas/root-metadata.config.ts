import { Metadata } from 'next';
import baseMetadata from '@/configs/metadatas/base-metadata.config';
import { DOMAIN } from '@/configs/env';

const rootMetadata: Partial<Metadata> = {
    title: 'GaryLin | Dev',
    description: '嗨，我是 Gary Lin，專精於 React.js、Next.js 和現代網頁技術的前端工程師。',
    keywords: [
        'Gary Lin',
        'Frontend Developer',
        'Web Development',
        'React.js',
        'Next.js',
        'TypeScript',
        'JavaScript',
        '前端',
        '前端開發',
        '前端開發者',
        '前端工程師',
        '前端開發人員',
        '網頁開發',
    ],
    authors: [{ name: 'Gary Lin', url: 'https://www.garylin.dev' }],
    openGraph: {
        title: 'GaryLin | Dev',
        description: '嗨，我是 Gary Lin，專精於 React.js、Next.js 和現代網頁技術的前端工程師。',
        url: DOMAIN,
        siteName: 'Gary Lin Portfolio',
        images: [
            {
                url: '/assets/favicons/favicon-512x512.png',
                width: 1200,
                height: 630,
                alt: 'Gary Lin - Portfolio',
            },
        ],
        locale: 'zh_TW',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'GaryLin | Dev',
        description: '嗨，我是 Gary Lin，專精於 React.js、Next.js 和現代網頁技術的前端工程師。',
        images: [
            {
                url: '/assets/favicons/favicon-512x512.png',
                width: 1200,
                height: 630,
                alt: 'Gary Lin - Portfolio',
            },
        ],
    },
    alternates: { canonical: DOMAIN },
};

const rootMetadataConfig = { ...baseMetadata, ...rootMetadata };

export default rootMetadataConfig;
