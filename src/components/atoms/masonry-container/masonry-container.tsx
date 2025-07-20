import { Children, ReactNode } from 'react';
import cn from '@/utils/cn';

interface MasonryContainerProps {
    children: ReactNode;
    className?: string;
    columnGap?: string;
    rowGap?: string;
}

const MasonryContainer = ({ children, className, columnGap = 'gap-8', rowGap = 'gap-8' }: MasonryContainerProps) => {
    if (!children) return null;

    // Convert children to array to work with them
    const childrenArray = Children.toArray(children);

    // Create column arrays for different screen sizes
    const mobileItems = childrenArray;

    // For sm screens (2 columns)
    const smItems1 = childrenArray.filter((_, index) => index % 2 === 0);
    const smItems2 = childrenArray.filter((_, index) => index % 2 === 1);

    // For lg screens (3 columns)
    const lgItems1 = childrenArray.filter((_, index) => index % 3 === 0);
    const lgItems2 = childrenArray.filter((_, index) => index % 3 === 1);
    const lgItems3 = childrenArray.filter((_, index) => index % 3 === 2);

    return (
        <div className={cn('w-full', className)}>
            {/* Mobile layout (single column) */}
            <ul className={cn('space-y-8 sm:hidden', rowGap)}>
                {mobileItems.map((child, index) => (
                    <li key={`mobile-${index}`} className="text-sm leading-6">
                        {child}
                    </li>
                ))}
            </ul>

            {/* Tablet layout (two columns) */}
            <div className={cn('hidden sm:grid sm:grid-cols-2 lg:hidden', columnGap)}>
                <ul className={cn('space-y-8', rowGap)}>
                    {smItems1.map((child, index) => (
                        <li key={`sm-1-${index}`} className="text-sm leading-6">
                            {child}
                        </li>
                    ))}
                </ul>
                <ul className={cn('space-y-8', rowGap)}>
                    {smItems2.map((child, index) => (
                        <li key={`sm-2-${index}`} className="text-sm leading-6">
                            {child}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Desktop layout (three columns) */}
            <div className={cn('hidden lg:grid lg:grid-cols-3', columnGap)}>
                <ul className={cn('space-y-8', rowGap)}>
                    {lgItems1.map((child, index) => (
                        <li key={`lg-1-${index}`} className="text-sm leading-6">
                            {child}
                        </li>
                    ))}
                </ul>
                <ul className={cn('space-y-8', rowGap)}>
                    {lgItems2.map((child, index) => (
                        <li key={`lg-2-${index}`} className="text-sm leading-6">
                            {child}
                        </li>
                    ))}
                </ul>
                <ul className={cn('space-y-8', rowGap)}>
                    {lgItems3.map((child, index) => (
                        <li key={`lg-3-${index}`} className="text-sm leading-6">
                            {child}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MasonryContainer;
