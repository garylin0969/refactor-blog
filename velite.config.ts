import rehypeShiki from '@shikijs/rehype';
import rehypePrettyCode from 'rehype-pretty-code';
import { defineConfig, s } from 'velite';

export default defineConfig({
    // 設定根目錄
    root: './content',

    // 設定輸出目錄
    output: {
        data: '.velite',
        assets: 'public/static',
        base: '/static/',
        name: '[name]-[hash:6].[ext]',
        clean: true,
    },

    // 設定 MDX 處理器
    mdx: {
        rehypePlugins: [
            [
                rehypePrettyCode,
                rehypeShiki as any, // eslint-disable-line @typescript-eslint/no-explicit-any
                { theme: 'one-dark-pro' },
            ],
        ],
    },

    // 定義collections
    collections: {
        posts: {
            name: 'Post',
            pattern: 'posts/**/*.{md,mdx}',
            schema: s.object({
                title: s.string(),
                date: s.isodate(),
                description: s.string().optional(),
                category: s.string().optional(),
                tags: s.array(s.string()).optional(),
                image: s.string().optional(),
                slug: s.slug('title'),
                draft: s.boolean().optional(),
                code: s.mdx(),
            }),
        },
    },
});
