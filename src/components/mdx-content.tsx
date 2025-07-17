import * as runtime from 'react/jsx-runtime';

const sharedComponents = {
    // 這裡可以添加全域的自定義組件
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
export const MDXContent = ({ code, components }: MDXProps) => {
    const Component = useMDXComponent(code);
    return <Component components={{ ...sharedComponents, ...components }} />;
};
