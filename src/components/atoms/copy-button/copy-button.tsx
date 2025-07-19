'use client';

import { Copy, Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/utils/shadcn';

interface CopyButtonProps {
    className?: string;
    content?: string;
}

const CopyButton = ({ className, content }: CopyButtonProps) => {
    const [copied, setCopied] = useState(false);
    let timeout: NodeJS.Timeout;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(content ?? '');
            setCopied(true);
            timeout = setTimeout(() => setCopied(false), 1500);
        } catch (error) {
            console.error('copy failed:', error);
        }
    };

    useEffect(() => {
        return () => clearTimeout(timeout);
    }, []);

    return (
        <button
            type="button"
            className={cn('flex items-center justify-center p-1.5', className)}
            title={copied ? 'copied' : 'copy'}
            onClick={handleCopy}
        >
            {copied ? (
                <>
                    <Check className="text-white" size={14} />
                    <span className="sr-only">copied</span>
                </>
            ) : (
                <>
                    <Copy className="text-white" size={14} />
                    <span className="sr-only">copy</span>
                </>
            )}
        </button>
    );
};

export default CopyButton;
