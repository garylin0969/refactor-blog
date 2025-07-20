import cn from '@/utils/cn';
import Tag from '@/components/atoms/tag';
import CopyButton from '@/components/atoms/button/copy-button';
import type { MDXRemoteProps } from 'next-mdx-remote/rsc';

// 自定義 MDX 組件
const mdxRenderConfig: MDXRemoteProps['components'] = {
    figure: (props) => {
        const { children } = props;
        const hasTitle = Array.isArray(children);
        const title = hasTitle ? (children?.[0]?.props?.children ?? '') : '';
        const language = hasTitle
            ? (children?.[1]?.props?.['data-language'] ?? '')
            : (children?.props?.['data-language'] ?? '');
        const copyContent = hasTitle ? (children?.[1]?.props?.rawcontent ?? '') : (children?.props?.rawcontent ?? '');

        return (
            <figure
                className={cn('overflow-hidden rounded-lg shadow-md')}
                style={{ margin: '0', border: '1px solid rgb(255 255 255/.3)' }}
            >
                <div
                    className={cn(
                        'flex items-center justify-between gap-1',
                        'px-4 py-2',
                        'bg-gray-800',
                        'text-sm text-gray-200',
                    )}
                    style={{ borderBottom: '1px solid rgb(255 255 255/.3)' }}
                >
                    <figcaption className="not-prose max-w-[180px] !truncate sm:max-w-full">{title}</figcaption>
                    <div className="flex items-center gap-1">
                        {language && (
                            <Tag variant="secondary" mode="dark">
                                {language}
                            </Tag>
                        )}
                        <CopyButton copyText={copyContent} className="static bg-transparent hover:bg-gray-700" />
                    </div>
                </div>
                {children}
            </figure>
        );
    },

    figcaption: () => null,

    pre: (props) => {
        return (
            <pre
                className={cn(props.className, 'flex flex-col justify-center', '!min-h-[50px] p-4', 'bg-gray-800')}
                style={{ margin: '0', borderTopRightRadius: '0px', borderTopLeftRadius: '0px' }}
            >
                {props.children}
            </pre>
        );
    },

    // 可以在此添加更多自定義組件
    code: (props) => {
        const isInline = typeof props.children === 'string';
        if (isInline) {
            return (
                <code
                    {...props}
                    className={cn(
                        'mx-1 rounded-md px-2 py-1',
                        'text-sky-700 dark:text-sky-200',
                        'bg-sky-100 dark:bg-sky-900/50',
                    )}
                />
            );
        }

        return <code {...props} />;
    },
};

export default mdxRenderConfig;
