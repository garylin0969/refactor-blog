import cn from '@/utils/cn';
import { NextLink } from '@/components/atoms/link';
import headerConfig from '@/configs/components/header.config';

const NavMenu = () => {
    return (
        <nav className={cn('text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200')}>
            <ul className={cn('flex gap-4')}>
                {headerConfig?.navMenuLinks?.map((data) => {
                    return (
                        <li key={data?.label}>
                            <NextLink href={data?.href}>{data?.label}</NextLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavMenu;
