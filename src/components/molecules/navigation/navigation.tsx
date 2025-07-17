import Link from 'next/link';
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/utils/shadcn';

// 導航路由配置
const NAVIGATION_ROUTES = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Blog',
        href: '/blog',
    },
    {
        label: 'About',
        href: '/about',
    },
] as const;

interface NavigationProps {
    menuClassName?: string;
    listClassName?: string;
    itemClassName?: string;
    linkClassName?: string;
}

const Navigation = ({
    menuClassName,
    listClassName,
    itemClassName,
    linkClassName = cn(navigationMenuTriggerStyle(), 'font-bold'),
}: NavigationProps) => {
    return (
        <NavigationMenu className={menuClassName}>
            <NavigationMenuList className={listClassName}>
                {NAVIGATION_ROUTES.map((route) => (
                    <NavigationMenuItem key={route.href} className={itemClassName}>
                        <NavigationMenuLink asChild className={linkClassName}>
                            <Link href={route.href}>{route.label}</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default Navigation;
