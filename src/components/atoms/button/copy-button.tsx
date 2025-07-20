'use client';

import { useState, useEffect, useCallback } from 'react';
import cn from '@/utils/cn';

interface CopyButtonProps {
    copyText: string;
    className?: string;
}

// 提取 SVG 圖標為獨立組件
const CheckIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

const CopyIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
);

/**
 * 複製按鈕組件
 * 用於複製代碼塊內容到剪貼板
 */
const CopyButton = ({ copyText, className }: CopyButtonProps) => {
    const [copied, setCopied] = useState(false);

    // 重置複製狀態
    useEffect(() => {
        if (!copied) return;

        const timeoutId = setTimeout(() => setCopied(false), 1600);
        return () => clearTimeout(timeoutId);
    }, [copied]);

    // 處理複製功能
    const handleCopy = useCallback(async () => {
        if (!copyText || typeof navigator === 'undefined') return;

        try {
            await navigator.clipboard.writeText(copyText);
            setCopied(true);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    }, [copyText]);

    const buttonLabel = copied ? 'Copied!' : 'Copy code to clipboard';

    // 提取常用的 CSS 類名
    const iconBaseClass = 'absolute inset-0 transition-opacity duration-200';

    return (
        <button
            onClick={handleCopy}
            className={cn(
                'cursor-pointer',
                'group flex h-7 w-7 items-center justify-center',
                'rounded-md bg-gray-700/80 text-gray-300',
                'hover:bg-gray-600 hover:text-white',
                'transition-colors duration-200',
                className,
            )}
            aria-label={buttonLabel}
            title={buttonLabel}
        >
            <div className="relative h-4 w-4">
                {/* 複製成功圖標 */}
                <div className={cn(iconBaseClass, copied ? 'opacity-100' : 'opacity-0')}>
                    <CheckIcon />
                </div>

                {/* 複製圖標 */}
                <div className={cn(iconBaseClass, copied ? 'opacity-0' : 'opacity-100')}>
                    <CopyIcon />
                </div>
            </div>
        </button>
    );
};

export default CopyButton;
