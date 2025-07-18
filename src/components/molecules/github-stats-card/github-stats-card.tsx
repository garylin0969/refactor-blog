'use client';

import { useTheme } from 'next-themes';
import { useMemo } from 'react';
import NextImage from '@/components/atoms/next-image';
import { DEFAULT_GITHUB_USERNAME } from '@/constants/github-stats';

const GITHUB_STATS_URL = 'https://github-readme-stats.vercel.app/api';
const STATS_ENDPOINT = '';
const TOP_LANGS_ENDPOINT = 'top-langs';

interface GithubStatsParams {
    [key: string]: string | number | boolean | undefined;
}

// 統計卡片類型
type StatsType = 'stats' | 'top-langs';

interface GithubStatsCardProps {
    username?: string;
    type: StatsType;
    params?: GithubStatsParams;
    width?: number;
    height?: number;
    fill?: boolean;
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

    delete params.light_theme;
    delete params.dark_theme;

    // 合併預設參數
    const finalParams: GithubStatsParams = {
        username,
        theme: themeParam,
        ...params,
    };

    const queryString = buildQueryString(finalParams);
    return `${baseUrl}?${queryString}`;
};

const GithubStatsCard = ({
    username = DEFAULT_GITHUB_USERNAME,
    type,
    params = {},
    width = 296,
    height = 296,
    fill = false,
    loading = 'lazy',
    alt = 'GitHub stats',
}: GithubStatsCardProps) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    // 使用 useMemo 避免不必要的 URL 重新計算
    const { lightUrl, darkUrl } = useMemo(() => {
        const lightUrl = buildStatsUrl(type, username, params, 'light');
        const darkUrl = buildStatsUrl(type, username, params, 'dark');

        return { lightUrl, darkUrl };
    }, [type, username, params]);

    const currentUrl = isDark ? darkUrl : lightUrl;

    return <NextImage src={currentUrl} width={width} height={height} fill={fill} loading={loading} alt={alt} />;
};

export default GithubStatsCard;
