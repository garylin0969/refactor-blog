'use client';

import { Copy, Check } from 'lucide-react';
import React, { useState } from 'react';

interface CopyButtonProps {
    code: string;
    className?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ code, className = '' }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error('複製失敗:', error);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className={`bg-background/80 hover:bg-background absolute top-2 right-2 flex items-center gap-1 rounded p-1.5 text-xs opacity-0 transition-opacity group-hover:opacity-100 ${className}`}
            title={copied ? '已複製！' : '複製代碼'}
        >
            {copied ? (
                <>
                    <Check size={14} className="text-green-500" />
                    <span className="text-green-500">已複製</span>
                </>
            ) : (
                <>
                    <Copy size={14} />
                    <span>複製</span>
                </>
            )}
        </button>
    );
};

export default CopyButton;
