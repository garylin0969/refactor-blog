'use client';

import { useTheme } from 'next-themes';
import { useMemo, useEffect, useState } from 'react';
import NextImage from '@/components/atoms/next-image';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { DEFAULT_GITHUB_USERNAME } from '@/constants/github-stats';
import { cn } from '@/utils/shadcn';

const GITHUB_STATS_URL = 'https://github-readme-stats.vercel.app/api'; // Github Stats API URL
const TOP_LANGS_ENDPOINT = 'top-langs'; // Github Stats API Top Languages Endpoint
const CARD_PADDING_HEIGHT = 48; // Shadcn Card Padding Height

// 統計卡片類型
type StatsType = 'stats' | 'top-langs';

interface GithubStatsParams {
    [key: string]: string | number | boolean | undefined;
    light_theme?: string;
    dark_theme?: string;
}

interface GithubStatsCardProps {
    useCard?: boolean;
    cardClassName?: string;
    cardContentClassName?: string;
    imageContainerClassName?: string;
    skeletonClassName?: string;
    username?: string;
    type: StatsType;
    params?: GithubStatsParams;
    width?: number;
    height?: number;
    loading?: 'lazy' | 'eager';
    alt?: string;
}

// 將參數物件轉換成查詢字串
const buildQueryString = (params: GithubStatsParams): string => {
    const queryParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
            queryParams.append(key, value.toString());
        }
    });

    return queryParams.toString();
};

// 構建完整的 GitHub Stats API URL
const buildStatsUrl = (type: StatsType, username: string, params: GithubStatsParams, theme: string): string => {
    const endpoint = type === 'top-langs' ? TOP_LANGS_ENDPOINT : '';
    const baseUrl = `${GITHUB_STATS_URL}${endpoint ? `/${endpoint}` : ''}`;

    // 準備最終參數，移除主題相關的特殊參數
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { light_theme, dark_theme, ...restParams } = params;
    const finalParams: GithubStatsParams = {
        username,
        theme,
        ...restParams,
    };

    const queryString = buildQueryString(finalParams);
    return `${baseUrl}?${queryString}`;
};

// 根據主題模式獲取對應的主題參數
const getThemeParam = (params: GithubStatsParams, isDark: boolean): string => {
    return isDark ? params.dark_theme || 'dark' : params.light_theme || 'default';
};

const GithubStatsCard = ({
    useCard = true,
    cardClassName,
    cardContentClassName,
    imageContainerClassName,
    skeletonClassName,
    username = DEFAULT_GITHUB_USERNAME,
    type,
    params = {},
    width = 296,
    height = 190,
    loading = 'lazy',
    alt = 'github stats',
}: GithubStatsCardProps) => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // 確保元件已掛載
    useEffect(() => {
        setMounted(true);
    }, []);

    // 計算當前 URL
    const currentUrl = useMemo(() => {
        const isDark = theme !== 'light';
        const themeParam = getThemeParam(params, isDark);
        const currentUrl = buildStatsUrl(type, username, params, themeParam);

        return currentUrl;
    }, [type, username, params, theme]);

    // 圖片元件
    const ImageComponent = useMemo(
        () => (
            <div className={cn('relative overflow-hidden', imageContainerClassName)} style={{ width, height }}>
                <NextImage
                    className="object-cover"
                    src={currentUrl}
                    fill
                    loading={loading}
                    alt={alt}
                    priority={loading === 'eager'}
                />
            </div>
        ),
        [imageContainerClassName, width, height, currentUrl, loading, alt]
    );

    // 骨架屏元件
    const SkeletonComponent = useMemo(() => {
        const skeletonHeight = useCard ? height + CARD_PADDING_HEIGHT : height;
        return <Skeleton className={skeletonClassName} style={{ width, height: skeletonHeight }} />;
    }, [skeletonClassName, width, height, useCard]);

    // 在元件掛載前，避免 hydration 不匹配
    if (!mounted) {
        return SkeletonComponent;
    }

    // 返回卡片或圖片元件
    if (useCard) {
        return (
            <Card className={cardClassName}>
                <CardContent className={cn('p-0', cardContentClassName)}>{ImageComponent}</CardContent>
            </Card>
        );
    }

    return ImageComponent;
};

export default GithubStatsCard;
