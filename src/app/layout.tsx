import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Footer from '@/components/organisms/footer';
import Header from '@/components/organisms/header';
import { DOMAIN, GA_ID } from '@/constants/site';
import { ThemeProvider } from '@/providers';
import { cn } from '@/utils/shadcn';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    preload: true,
    adjustFontFallback: true,
});

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: {
        default: 'GaryLin Dev',
        template: '%s | GaryLin Dev',
    },
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
        'Blog',
        '技術部落格',
    ],
    authors: [{ name: 'Gary Lin' }],
    creator: 'Gary Lin',
    publisher: 'Gary Lin',
    metadataBase: new URL(DOMAIN),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'GaryLin Dev',
        description: '嗨，我是 Gary Lin，專精於 React.js、Next.js 和現代網頁技術的前端工程師。',
        url: DOMAIN,
        siteName: 'GaryLin Dev',
        locale: 'zh_TW',
        type: 'website',
        images: [
            {
                url: '/favicons/android-chrome-512x512.png',
                width: 512,
                height: 512,
                alt: 'GaryLin Dev',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'GaryLin Dev',
        description: '嗨，我是 Gary Lin，專精於 React.js、Next.js 和現代網頁技術的前端工程師。',
        images: ['/favicons/android-chrome-512x512.png'],
        creator: '@garylin_dev',
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
    icons: {
        icon: [
            { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [{ url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
        other: [
            {
                rel: 'icon',
                url: '/favicons/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                rel: 'icon',
                url: '/favicons/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    },
    manifest: '/favicons/site.webmanifest',
    category: 'technology',
    referrer: 'origin-when-cross-origin',
    generator: 'Next.js',
    applicationName: 'GaryLin Dev',
    appleWebApp: {
        title: 'GaryLin Dev',
        statusBarStyle: 'default',
        capable: true,
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#000000' },
    ],
    colorScheme: 'light dark',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="zh-TW" suppressHydrationWarning>
            <body className={cn(inter.className, geistSans.variable, geistMono.variable, 'antialiased')}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <div className="flex min-h-screen flex-col">
                        <Header />
                        <main className="container mx-auto my-8 flex flex-1 flex-col px-4">{children}</main>
                        <Footer />
                    </div>
                </ThemeProvider>
                <GoogleAnalytics gaId={GA_ID} />
            </body>
        </html>
    );
}
