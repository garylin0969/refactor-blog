import * as runtime from 'react/jsx-runtime';
import React, { ComponentType } from 'react';
import { CopyButton } from '@/components/atoms/copy-button';

const sharedComponents: Record<string, ComponentType<any>> = {
    figure: ({ children, ...props }) => {
        const hasTitle = Array.isArray(children);
        const title = hasTitle ? (children?.[0]?.props?.children ?? '') : '';
        const language = hasTitle
            ? (children?.[0]?.props?.['data-language'] ?? '')
            : (children?.props?.['data-language'] ?? '');
        const copyContent = hasTitle ? (children?.[1]?.props?.rawcontent ?? '') : (children?.props?.rawcontent ?? '');

        return (
            <div className="overflow-hidden rounded-xs border border-[#ffffff4d] bg-[#282c34]">
                <figcaption className="flex h-[45px] items-center justify-between border-b border-[#ffffff4d] px-3 py-1">
                    <span className="text-sm text-white">{title}</span>
                    <div className="flex items-center gap-x-2">
                        <span className="text-sm text-white">{language}</span>
                        <CopyButton content={copyContent} />
                    </div>
                </figcaption>
                <figure {...props}>{children}</figure>
            </div>
        );
    },

    figcaption: () => null,
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
