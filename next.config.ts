import type { NextConfig } from 'next';
import { withContentlayer } from 'next-contentlayer2';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'giscus.app',
                port: '',
                pathname: '/**',
            },
        ],
    },
    transpilePackages: ['next-mdx-remote'],
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

    // 添加 headers 配置
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-Robots-Tag',
                        value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
                    },
                ],
            },
        ];
    },
};

export default withContentlayer(nextConfig);
