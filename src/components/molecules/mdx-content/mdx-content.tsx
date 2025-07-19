import * as runtime from 'react/jsx-runtime';
import React, { ComponentType } from 'react';
import CodeBlock from '@/components/molecules/code-block';
import { Badge } from '@/components/ui/badge';

// 提取程式碼片段的屬性
const extractCodeBlockProps = (children: any) => {
    const hasTitle = Array.isArray(children); // 判斷是否有標題
    const title = hasTitle ? (children?.[0]?.props?.children ?? '') : ''; // 如果有標題，則取標題
    // 如果有標題，則取標題的data-language屬性，否則取程式碼片段的data-language屬性
    const language = hasTitle
        ? (children?.[0]?.props?.['data-language'] ?? '')
        : (children?.props?.['data-language'] ?? '');
    // 如果有標題，則取標題的rawcontent屬性，否則取程式碼片段的rawcontent屬性
    const copyContent = hasTitle ? (children?.[1]?.props?.rawcontent ?? '') : (children?.props?.rawcontent ?? '');

    // 返回標題、語言和複製內容
    return { title, language, copyContent };
};

// 客製化blog的元件
const sharedComponents: Record<string, ComponentType<any>> = {
    figure: ({ children, ...props }) => {
        const { title, language, copyContent } = extractCodeBlockProps(children);

        return (
            <CodeBlock title={title} language={language} copyContent={copyContent} {...props}>
                {children}
            </CodeBlock>
        );
    },

    figcaption: () => null,

    code: ({ children, ...props }) => {
        const isInline = typeof children === 'string';

        if (isInline) {
            return (
                <Badge className="rounded-md px-2 py-1" variant="secondary" {...props}>
                    {children}
                </Badge>
            );
        }

        return <code {...props}>{children}</code>;
    },
};

// 將Velite生成的MDX代碼解析為React元件函數
const useMDXComponent = (code: string) => {
    const fn = new Function(code);
    return fn({ ...runtime }).default;
};

interface MDXProps {
    code: string;
    components?: Record<string, ComponentType<any>>;
}

// MDXContent元件
const MDXContent = ({ code, components }: MDXProps) => {
    const Component = useMDXComponent(code);
    return <Component components={{ ...sharedComponents, ...components }} />;
};

export default MDXContent;
