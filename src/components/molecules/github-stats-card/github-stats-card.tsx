'use client';

import { useTheme } from 'next-themes';
import { useMemo, useEffect, useState, ReactNode } from 'react';
import NextImage from '@/components/atoms/next-image';
import { Card, CardContent } from '@/components/ui/card';
import { DEFAULT_GITHUB_USERNAME } from '@/constants/github-stats';
import { cn } from '@/utils/shadcn';

const GITHUB_STATS_URL = 'https://github-readme-stats.vercel.app/api';
const STATS_ENDPOINT = '';
const TOP_LANGS_ENDPOINT = 'top-langs';

interface GithubStatsParams {
    [key: string]: string | number | boolean | undefined;
}

// 統計卡片類型
type StatsType = 'stats' | 'top-langs';

interface GithubStatsCardProps {
    useCard?: boolean;
    cardClassName?: string;
    cardContentClassName?: string;
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

// 根據統計類型獲取對應的 API 端點
const getEndpoint = (type: StatsType): string => {
    return type === 'top-langs' ? TOP_LANGS_ENDPOINT : STATS_ENDPOINT;
};

// 構建完整的 GitHub Stats API URL
const buildStatsUrl = (
    type: StatsType,
    username: string,
    params: GithubStatsParams,
    mode: 'light' | 'dark'
): string => {
    const endpoint = getEndpoint(type);
    const baseUrl = `${GITHUB_STATS_URL}${endpoint ? `/${endpoint}` : ''}`;

    // 根據模式選擇主題
    const themeParam = mode === 'dark' ? params.dark_theme : params.light_theme;

    // 合併預設參數
    const finalParams: GithubStatsParams = {
        username,
        theme: themeParam,
        ...params,
    };

    delete finalParams.light_theme;
    delete finalParams.dark_theme;

    const queryString = buildQueryString(finalParams);
    return `${baseUrl}?${queryString}`;
};

const GithubStatsCard = ({
    useCard = true,
    cardClassName,
    cardContentClassName,
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

    // 確保組件已掛載，避免 hydration 不匹配
    useEffect(() => {
        setMounted(true);
    }, []);

    // 使用 useMemo 避免不必要的 URL 重新計算
    const { lightUrl, darkUrl } = useMemo(() => {
        const lightUrl = buildStatsUrl(type, username, params, 'light');
        const darkUrl = buildStatsUrl(type, username, params, 'dark');

        return { lightUrl, darkUrl };
    }, [type, username, params]);

    const isDark = theme === 'dark';
    const currentUrl = isDark ? darkUrl : lightUrl;

    const ImageComponent = useMemo(() => {
        return (
            <div className="relative overflow-hidden" style={{ width: width, height: height }}>
                <NextImage
                    className="object-cover"
                    src={currentUrl}
                    fill
                    loading={loading}
                    alt={alt}
                    priority={loading === 'eager'}
                />
            </div>
        );
    }, [width, height, currentUrl, loading, alt]);

    // 在元件掛載前，避免 hydration 不匹配
    if (!mounted) {
        return null;
    }

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
