import { forwardRef, ReactNode } from 'react';
import cn from '@/utils/cn';
import Link, { LinkProps } from 'next/link';

interface NextLinkProps extends LinkProps {
    className?: string;
    children: ReactNode;
}

const NextLink = forwardRef<HTMLAnchorElement, NextLinkProps>(({ href = '', className, children, ...props }, ref) => {
    return (
        <Link href={href} className={cn('hover:text-sky-500 dark:hover:text-sky-400', className)} ref={ref} {...props}>
            {children}
        </Link>
    );
});

NextLink.displayName = 'NextLink';

export default NextLink;
