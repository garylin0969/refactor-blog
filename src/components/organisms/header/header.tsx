import Link from 'next/link';
import ThemeToggle from '@/components/atoms/theme-toggle';
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/utils/shadcn';

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
];

const Header = () => {
    return (
        <header className="border-border/40 bg-background/70 sticky top-0 left-0 z-50 h-14.5 border-b shadow-md backdrop-blur-md">
            <div className="container mx-auto flex h-full items-center justify-between px-4">
                <h1 className="font-bold">GaryLin.dev</h1>
                <NavigationMenu>
                    <NavigationMenuList>
                        {NAVIGATION_ROUTES.map((route) => (
                            <NavigationMenuItem key={route.href}>
                                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), 'font-bold')}>
                                    <Link href={route.href}>{route.label}</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                        <NavigationMenuItem>
                            <ThemeToggle />
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
};

export default Header;
