import { forwardRef } from 'react';
import cn from '@/utils/cn';
import { ButtonPropsT } from '@/types/html';

const BaseButton = forwardRef<HTMLButtonElement, ButtonPropsT>(({ className, children, ...props }, ref) => {
    return (
        <button
            ref={ref}
            className={cn(
                'cursor-pointer',
                'px-4 py-2',
                'rounded-md',
                'text-sm font-semibold text-white',
                'bg-sky-500',
                'hover:bg-sky-600 dark:hover:bg-sky-400',
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
});

BaseButton.displayName = 'BaseButton';

export default BaseButton;
