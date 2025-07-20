import { ReactNode } from 'react';
import cn from '@/utils/cn';

interface GradientBorderProps {
    children: ReactNode;
    className?: string;
    gradientFrom?: string;
    gradientTo?: string;
}

const GradientBorder = ({
    children,
    className,
    gradientFrom = 'from-purple-600',
    gradientTo = 'to-pink-600',
}: GradientBorderProps) => {
    return (
        <div className={cn('group relative', className)}>
            <div
                className={cn(
                    'duration-400 absolute -inset-1 rounded-lg bg-gradient-to-r opacity-25 blur transition group-hover:opacity-100 group-hover:duration-200',
                    gradientFrom,
                    gradientTo,
                )}
            />
            {children}
        </div>
    );
};

export default GradientBorder;
