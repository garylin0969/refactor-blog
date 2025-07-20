import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import cn from '@/utils/cn';
import ThemeProvider from '@/providers/theme-provider';
import RootTemplate from '@/components/templates/root-template';
import rootMetadataConfig from '@/configs/metadatas/root-metadata.config';
import { GA_ID } from '@/configs/env';

import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    preload: true,
    adjustFontFallback: true,
});

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
};

export const metadata: Metadata = rootMetadataConfig;

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html suppressHydrationWarning lang="zh-TW" className={cn('scroll-smooth')}>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            </head>
            <body className={cn(inter.className, 'min-h-screen antialiased')}>
                <ThemeProvider>
                    <RootTemplate>{children}</RootTemplate>
                </ThemeProvider>
                <GoogleAnalytics gaId={GA_ID} />
            </body>
        </html>
    );
}
