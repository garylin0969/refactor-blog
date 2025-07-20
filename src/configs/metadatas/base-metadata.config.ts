import { Metadata } from 'next';
import { DOMAIN } from '@/configs/env';

const baseMetadata: Partial<Metadata> = {
    metadataBase: new URL(DOMAIN),
    generator: 'Next.js',
    applicationName: 'Gary Lin Portfolio',
    referrer: 'origin-when-cross-origin',
    creator: 'Gary Lin',
    publisher: 'Gary Lin',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: [
            { url: '/assets/favicon.ico', type: 'image/x-icon' },
            { url: '/assets/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/assets/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/assets/favicons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        ],
        shortcut: [{ url: '/assets/favicon.ico', type: 'image/x-icon' }],
        // Apple 設備專用
        apple: [
            { url: '/assets/favicons/favicon-57x57.png', sizes: '57x57', type: 'image/png' },
            { url: '/assets/favicons/favicon-60x60.png', sizes: '60x60', type: 'image/png' },
            { url: '/assets/favicons/favicon-72x72.png', sizes: '72x72', type: 'image/png' },
            { url: '/assets/favicons/favicon-76x76.png', sizes: '76x76', type: 'image/png' },
            { url: '/assets/favicons/favicon-114x114.png', sizes: '114x114', type: 'image/png' },
            { url: '/assets/favicons/favicon-120x120.png', sizes: '120x120', type: 'image/png' },
            { url: '/assets/favicons/favicon-144x144.png', sizes: '144x144', type: 'image/png' },
            { url: '/assets/favicons/favicon-152x152.png', sizes: '152x152', type: 'image/png' },
            { url: '/assets/favicons/favicon-180x180.png', sizes: '180x180', type: 'image/png' },
        ],
        // Android/PWA 用
        other: [
            { url: '/assets/favicons/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/assets/favicons/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
            // PWA maskable icon
            { url: '/assets/favicons/favicon-192x192.png', sizes: '192x192', type: 'image/png', rel: 'maskable' },
            { url: '/assets/favicons/favicon-512x512.png', sizes: '512x512', type: 'image/png', rel: 'maskable' },
        ],
    },
    verification: {
        google: 'CtxomoS71tuDi5qlZJbJpoLQ7dcgEOXcW_oCY8zyLUw',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default baseMetadata;
