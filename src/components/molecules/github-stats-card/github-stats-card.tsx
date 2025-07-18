'use client';

import { useTheme } from 'next-themes';
import NextImage from '@/components/atoms/next-image';
import { DEFAULT_GITHUB_USERNAME } from '@/constants/github-stats';

const GITHUB_STATS_URL = 'https://github-readme-stats.vercel.app/api';

// 將 params object 轉換成 query string
const buildQueryString = (params: GithubStatsParams): string => {
    const queryParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
        queryParams.append(key, value.toString());
    });

    return queryParams.toString();
};

interface GithubStatsParams {
    [key: string]: string | number | boolean;
}

interface GithubStatsCardProps {
    username?: string;
    type: 'stats' | 'top-langs';
    params?: GithubStatsParams;
    width?: number;
    height?: number;
    fill?: boolean;
    loading?: 'lazy' | 'eager';
    alt?: string;
}

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

    // 構建完整的 URL
    const buildUrl = (params: GithubStatsParams, mode: 'light' | 'dark'): string => {
        const endpoint = type === 'top-langs' ? 'top-langs' : '';
        const baseUrl = `${GITHUB_STATS_URL}${endpoint ? `/${endpoint}` : ''}`;

        // 預設參數
        const defaultParams = {
            username,
            theme: mode === 'dark' ? params.dark_theme : params.light_theme,
            ...params,
        };

        const queryString = buildQueryString(defaultParams);
        return `${baseUrl}?${queryString}`;
    };

    const lightUrl = buildUrl(params, 'light');
    const darkUrl = buildUrl(params, 'dark');

    return (
        <NextImage
            src={isDark ? darkUrl : lightUrl}
            width={width}
            height={height}
            fill={fill}
            loading={loading}
            alt={alt}
        />
    );
};

export default GithubStatsCard;
