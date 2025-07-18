interface GithubStatsConfig {
    [key: string]: string | number | boolean;
}

export const DEFAULT_GITHUB_USERNAME = 'garylin0969';

export const GITHUB_STATS_THEMES = {
    default: 'default',
    dark: 'dark',
    radical: 'radical',
    merko: 'merko',
    gruvbox: 'gruvbox',
    tokyonight: 'tokyonight',
    onedark: 'onedark',
    cobalt: 'cobalt',
    synthwave: 'synthwave',
    highcontrast: 'highcontrast',
    dracula: 'dracula',
} as const;

export const DEFAULT_GITHUB_STATS_CONFIG: GithubStatsConfig = {
    light_theme: GITHUB_STATS_THEMES.default,
    dark_theme: GITHUB_STATS_THEMES.dark,
    bg_color: '00000000',
    hide_border: true,
    disable_animations: true,
};

export const DEFAULT_TOP_LANGS_CONFIG: GithubStatsConfig = {
    ...DEFAULT_GITHUB_STATS_CONFIG,
    // layout: 'compact',
    // langs_count: 8,
};

export const DEFAULT_GITHUB_STATS_PARAMS: GithubStatsConfig = {
    ...DEFAULT_GITHUB_STATS_CONFIG,
    show_icons: true,
    hide_rank: true,
    count_private: true,
};
