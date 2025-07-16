import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ThemeToggle from '@/components/atoms/theme-toggle';
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
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

const SOCIAL_LINKS = [
    {
        href: 'https://www.linkedin.com/in/garylin0969',
        target: '_blank',
        icon: FaLinkedin,
        label: 'LinkedIn',
    },
    {
        href: 'https://github.com/garylin0969',
        target: '_blank',
        icon: FaGithub,
        label: 'GitHub',
    },
] as const;

const Header = () => {
    return (
        <header className="border-border/40 bg-background/70 sticky top-0 left-0 z-50 h-14.5 border-b shadow-md backdrop-blur-md">
            <div className="container mx-auto flex h-full items-center justify-between px-4">
                <h1 className="font-bold">GaryLin.dev</h1>
                <NavigationMenu className="hidden md:block">
                    <NavigationMenuList>
                        {NAVIGATION_ROUTES.map((route) => (
                            <NavigationMenuItem key={route.href}>
                                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), 'font-bold')}>
                                    <Link href={route.href}>{route.label}</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                        <NavigationMenuItem className="flex items-center gap-2">
                            {SOCIAL_LINKS.map((link) => (
                                <a key={link.label} href={link.href} target={link.target} rel="noopener noreferrer">
                                    <link.icon className="size-4" />
                                </a>
                            ))}
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <ThemeToggle />
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <Sheet>
                        <SheetTrigger>
                            <MenuIcon className="size-4" />
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader>
                                <SheetTitle>Are you absolutely sure?</SheetTitle>
                                <SheetDescription>
                                    This action cannot be undone. This will permanently delete your account and remove
                                    your data from our servers.
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;
