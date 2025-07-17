import { ElementType, ReactNode } from 'react';
import { cn } from '@/utils/shadcn';

interface SectionTitleProps {
    className?: string;
    as?: ElementType;
    isHash?: boolean;
    children: ReactNode;
}

const SectionTitle = ({ className, as: Component = 'h2', isHash = true, children }: SectionTitleProps) => {
    return (
        <Component className={cn('text-3xl font-bold tracking-tight lg:text-4xl', className)}>
            {isHash && <span className="text-primary mr-1">#</span>}
            {children}
        </Component>
    );
};

export default SectionTitle;
