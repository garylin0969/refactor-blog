import * as runtime from 'react/jsx-runtime';
import React from 'react';
import { CopyButton } from '@/components/atoms/copy-button';

const sharedComponents = {
    // 全域自定義組件
    pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
        // 提取程式碼內容
        const codeContent = React.Children.toArray(children)
            .map((child) => {
                if (React.isValidElement(child) && child.type === 'code') {
                    // 安全地提取 children 屬性
                    const codeChildren = (child.props as any)?.children;
                    return React.Children.toArray(codeChildren).join('');
                }
                return '';
            })
            .join('');

        return (
            <pre {...props} className="group relative">
                {children}
                {codeContent && <CopyButton code={codeContent} />}
            </pre>
        );
    },
};

// 將Velite生成的MDX代碼解析為React組件函數
const useMDXComponent = (code: string) => {
    const fn = new Function(code);
    return fn({ ...runtime }).default;
};

interface MDXProps {
    code: string;
    components?: Record<string, React.ComponentType<any>>;
}

// MDXContent組件
const MDXContent = ({ code, components }: MDXProps) => {
    const Component = useMDXComponent(code);
    return <Component components={{ ...sharedComponents, ...components }} />;
};

export default MDXContent;
