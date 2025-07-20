import { forwardRef } from 'react';
import { LinkPropsT } from '@/types/html';
import cn from '@/utils/cn';

const BaseLink = forwardRef<HTMLAnchorElement, LinkPropsT>(({ href, className, children, ...props }, ref) => {
    return (
        <a
            href={href}
            className={cn('cursor-pointer hover:text-sky-500 dark:hover:text-sky-400', className)}
            target="_blank"
            rel="noreferrer noopener"
            ref={ref}
            {...props}
        >
            {children}
        </a>
    );
});

BaseLink.displayName = 'BaseLink';

export default BaseLink;
