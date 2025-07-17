import Link from 'next/link';
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
