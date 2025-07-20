import { ReactNode } from 'react';
import cn from '@/utils/cn';
import { DivPropsT } from '@/types/html';

interface InfoItemProps extends DivPropsT {
    icon?: ReactNode | (() => ReactNode);
    link?: string;
    text?: string;
}

const InfoItem = ({ icon, link, text, className, ...props }: InfoItemProps) => {
    return (
        <div className={cn('flex items-center', 'text-sm', className)} {...props}>
            {icon && <div className="mr-2">{typeof icon === 'function' ? icon() : icon}</div>}
            <div>
                {link ? (
                    <a
                        href={link}
                        className="hover:text-sky-500 dark:hover:text-sky-400"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        {text}
                    </a>
                ) : (
                    <span>{text}</span>
                )}
            </div>
        </div>
    );
};

export default InfoItem;
