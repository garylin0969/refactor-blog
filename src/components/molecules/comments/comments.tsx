'use client';

import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';

// 動態導入 Giscus
const Giscus = dynamic(() => import('@giscus/react'), {
    ssr: false, // 禁用 SSR
});

export default function Comments() {
    const { theme } = useTheme();

    return (
        <Giscus
            repo="garylin0969/blog"
            repoId="R_kgDONFDN5Q"
            category="General"
            categoryId="DIC_kwDONFDN5c4CnIE8"
            mapping="og:title"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            theme={theme === 'dark' ? 'dark_tritanopia' : 'light_tritanopia'}
            lang="zh-TW"
            loading="lazy"
        />
    );
}
