import cn from '@/utils/cn';
import Logo from '@/components/atoms/logo';
import ThemeSwitch from '@/components/molecules/theme-switch';
import NavMenu from '@/components/molecules/nav-menu';
import SocialIconLinks from '@/components/molecules/social-icon-links';
import BurgerMenu from '@/components/molecules/burger-menu';

const Header = () => {
    return (
        <header
            className={cn(
                'fixed top-0 z-50 flex h-16 w-full items-center bg-white/70 px-4 font-serif shadow backdrop-blur-md dark:bg-slate-900/70 md:px-6 lg:px-8',
            )}
        >
            <div className={cn('mx-auto flex w-full max-w-6xl items-center justify-between')}>
                <Logo />
                <div className={cn('flex items-center gap-4')}>
                    <div className={cn('hidden items-center gap-2 md:flex')}>
                        <NavMenu />
                        <SocialIconLinks className="border-x border-slate-200 px-2 dark:border-slate-800" />
                    </div>
                    <ThemeSwitch />
                    <BurgerMenu />
                </div>
            </div>
        </header>
    );
};

export default Header;
