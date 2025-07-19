'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { NAVIGATION_ROUTES } from '@/constants/navigation';
import { cn } from '@/utils/shadcn';

interface NavigationProps {
    menuClassName?: string;
    listClassName?: string;
    itemClassName?: string;
    linkClassName?: string;
}

const Navigation = ({ menuClassName, listClassName, itemClassName, linkClassName }: NavigationProps) => {
    const pathname = usePathname();

    // 判斷是否為當前頁面
    const isActive = (href: string) => {
        // 根目錄直接比較
        if (href === '/') {
            return pathname === '/';
        }

        // 比較第一個路徑段
        const currentSection = pathname?.split('/')[1];
        const targetSection = href?.split('/')[1];

        return currentSection === targetSection;
    };

    return (
        <NavigationMenu className={menuClassName}>
            <NavigationMenuList className={listClassName}>
                {NAVIGATION_ROUTES.map((route) => (
                    <NavigationMenuItem key={route.href} className={itemClassName}>
                        <NavigationMenuLink asChild>
                            <Link
                                href={route.href}
                                className={cn(
                                    navigationMenuTriggerStyle(),
                                    'hover:text-primary data-[active=true]:text-primary font-bold',
                                    linkClassName
                                )}
                                data-active={isActive(route.href)}
                            >
                                {route.label}
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default Navigation;
