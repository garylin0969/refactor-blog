import { ReactNode } from 'react';
import { CopyButton } from '@/components/atoms/copy-button';

interface CodeBlockProps {
    title?: string;
    language?: string;
    copyContent?: string;
    children: ReactNode;
}

const CodeBlock = ({ title = '', language = '', copyContent = '', children }: CodeBlockProps) => {
    return (
        <div className="overflow-hidden rounded-xs border border-[#ffffff4d] bg-[#282c34]">
            <figcaption className="flex h-[45px] items-center justify-between border-b border-[#ffffff4d] px-3 py-1">
                <span className="text-sm text-white">{title}</span>
                <div className="flex items-center gap-x-2">
                    <span className="text-sm text-white">{language}</span>
                    <CopyButton content={copyContent} />
                </div>
            </figcaption>
            <figure>{children}</figure>
        </div>
    );
};

export default CodeBlock;
