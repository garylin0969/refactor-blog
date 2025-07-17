import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import NextImage from '@/components/atoms/next-image';
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

const LOGO_IMAGE_PATH = '/favicons/favicon-32x32.png';
const WEBSITE_TITLE = 'garylin.dev';

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

// 社交媒體連結配置
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

// 通用樣式類別
const HEADER_STYLES = {
    container: 'border-border/40 bg-background/70 sticky top-0 left-0 z-50 h-14.5 border-b shadow-md backdrop-blur-md',
    innerContainer: 'container mx-auto flex h-full items-center justify-between px-4',
    desktopNav: 'hidden items-center gap-x-2 md:flex',
    mobileNav: 'flex items-center gap-x-2 md:hidden',
    socialLinks: 'flex items-center gap-x-2',
    navLink: cn(navigationMenuTriggerStyle(), 'font-bold'),
    iconSize: 'size-4',
} as const;

const Header = () => {
    return (
        <header className={HEADER_STYLES.container}>
            <div className={HEADER_STYLES.innerContainer}>
                {/* 網站標題 */}
                <Link href="/" className="flex items-center gap-x-2">
                    <NextImage src={LOGO_IMAGE_PATH} width={32} height={32} loading="eager" alt="website logo" />
                    <span className="font-bold">{WEBSITE_TITLE}</span>
                </Link>

                {/* 桌面版導航 */}
                <div className={HEADER_STYLES.desktopNav}>
                    <NavigationMenu>
                        <NavigationMenuList>
                            {NAVIGATION_ROUTES.map((route) => (
                                <NavigationMenuItem key={route.href}>
                                    <NavigationMenuLink asChild className={HEADER_STYLES.navLink}>
                                        <Link href={route.href}>{route.label}</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* 社交媒體連結 */}
                    <div className={HEADER_STYLES.socialLinks}>
                        {SOCIAL_LINKS.map((link) => {
                            const IconComponent = link.icon;
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target={link.target}
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                >
                                    <IconComponent className={HEADER_STYLES.iconSize} />
                                </a>
                            );
                        })}
                    </div>

                    <ThemeToggle />
                </div>

                {/* 手機版導航 */}
                <div className={HEADER_STYLES.mobileNav}>
                    <ThemeToggle />
                    <Sheet>
                        <SheetTrigger aria-label="open menu">
                            <MenuIcon className={HEADER_STYLES.iconSize} />
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader>
                                <SheetTitle>
                                    <NextImage
                                        src={LOGO_IMAGE_PATH}
                                        width={32}
                                        height={32}
                                        loading="eager"
                                        alt="website logo"
                                    />
                                    <span className="sr-only">{WEBSITE_TITLE}</span>
                                </SheetTitle>
                            </SheetHeader>
                            <NavigationMenu className="flex min-w-full flex-none flex-col items-start justify-start gap-y-2">
                                <NavigationMenuList className="flex flex-col items-start gap-y-2">
                                    {NAVIGATION_ROUTES.map((route) => (
                                        <NavigationMenuItem key={route.href}>
                                            <NavigationMenuLink asChild className={HEADER_STYLES.navLink}>
                                                <Link href={route.href}>{route.label}</Link>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>
                            <div className="flex items-center gap-x-2 px-4">
                                {SOCIAL_LINKS.map((link) => {
                                    const IconComponent = link.icon;
                                    return (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            target={link.target}
                                            rel="noopener noreferrer"
                                            aria-label={link.label}
                                        >
                                            <IconComponent className="size-5" />
                                        </a>
                                    );
                                })}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;
