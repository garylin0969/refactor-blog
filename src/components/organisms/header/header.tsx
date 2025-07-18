import Logo from '@/components/atoms/logo';
import ThemeToggle from '@/components/atoms/theme-toggle';
import MobileNavigation from '@/components/molecules/mobile-navigation';
import Navigation from '@/components/molecules/navigation';
import SocialLinks from '@/components/molecules/social-links';

// 通用樣式類別
const HEADER_STYLES = {
    container: 'border-border/40 bg-background/60 sticky top-0 left-0 z-50 h-14.5 border-b shadow-md backdrop-blur-md',
    innerContainer: 'container mx-auto flex h-full items-center justify-between px-4',
    desktopNav: 'hidden items-center gap-x-2 md:flex',
} as const;

const Header = () => {
    return (
        <header className={HEADER_STYLES.container}>
            <div className={HEADER_STYLES.innerContainer}>
                {/* 網站標題 */}
                <Logo />

                {/* 桌面版導航 */}
                <div className={HEADER_STYLES.desktopNav}>
                    <Navigation linkClassName="hover:text-primary" />
                    <SocialLinks />
                    <ThemeToggle />
                </div>

                {/* 手機版導航 */}
                <MobileNavigation />
            </div>
        </header>
    );
};

export default Header;
