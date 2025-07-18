interface GithubStatsConfig {
    [key: string]: string | number | boolean;
}

export const DEFAULT_GITHUB_USERNAME = 'garylin0969';

/**
 * Github Stats Card 的樣式
 * https://github.com/anuraghazra/github-readme-stats/blob/master/themes/README.md
 */

export const DEFAULT_GITHUB_STATS_CONFIG: GithubStatsConfig = {
    light_theme: 'buefy',
    dark_theme: 'jolly',
    bg_color: '00000000',
    hide_border: true,
    disable_animations: true,
};

export const DEFAULT_TOP_LANGS_CONFIG: GithubStatsConfig = {
    ...DEFAULT_GITHUB_STATS_CONFIG,
    custom_title: 'Most Used in GitHub',
    // layout: 'compact',
    // langs_count: 8,
};

export const DEFAULT_GITHUB_STATS_PARAMS: GithubStatsConfig = {
    ...DEFAULT_GITHUB_STATS_CONFIG,
    show_icons: true,
    hide_rank: true,
    count_private: true,
};
