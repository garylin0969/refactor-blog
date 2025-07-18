import * as runtime from 'react/jsx-runtime';
import React, { ComponentType } from 'react';

const sharedComponents: Record<string, ComponentType<any>> = {
    figure: ({ children, ...props }) => {
        const hasTitle = Array.isArray(children);
        const title = hasTitle ? (children?.[0]?.props?.children ?? '') : '';
        const language = hasTitle
            ? (children?.[0]?.props?.['data-language'] ?? '')
            : (children?.props?.['data-language'] ?? '');

        console.log(title);
        console.log(language);

        return <figure {...props}>{children}</figure>;
    },
};

// 將Velite生成的MDX代碼解析為React組件函數
const useMDXComponent = (code: string) => {
    const fn = new Function(code);
    return fn({ ...runtime }).default;
};

interface MDXProps {
    code: string;
    components?: Record<string, ComponentType<any>>;
}

// MDXContent組件
const MDXContent = ({ code, components }: MDXProps) => {
    const Component = useMDXComponent(code);
    return <Component components={{ ...sharedComponents, ...components }} />;
};

export default MDXContent;
