import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeMathjax from 'rehype-mathjax';
import type { Options } from 'rehype-pretty-code';

import cn from '@/utils/cn';
import mdxRenderConfig from '@/configs/mdx-render.config';

import themeDark from 'shiki/dist/themes/one-dark-pro.mjs';
import { createHighlighter } from 'shiki/bundle/web';

interface MDXContentProps {
    content: string;
    className?: string;
}

const MDXContent = ({ content, className }: MDXContentProps) => {
    return (
        <div
            className={cn(
                'prose md:prose-lg',
                'dark:prose-invert',
                'prose-figure:!font-mono',
                'prose-code:before:!content-none prose-code:after:!content-none',
                className,
            )}
        >
            <MDXRemote
                source={content}
                components={mdxRenderConfig}
                options={{
                    parseFrontmatter: true,
                    mdxOptions: {
                        remarkPlugins: [remarkGfm, remarkMath],
                        rehypePlugins: [
                            [rehypeMathjax, {}],
                            [
                                rehypePrettyCode,
                                {
                                    theme: themeDark,
                                    getHighlighter: createHighlighter,
                                    transformers: [
                                        {
                                            pre(node) {
                                                node.properties.rawcontent = this.source;
                                            },
                                        },
                                    ],
                                } as Options,
                            ],
                        ],
                    },
                }}
            />
        </div>
    );
};

export default MDXContent;
