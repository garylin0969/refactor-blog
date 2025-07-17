import { MenuIcon } from 'lucide-react';
import Logo from '@/components/atoms/logo';
import ThemeToggle from '@/components/atoms/theme-toggle';
import Navigation from '@/components/molecules/navigation';
import SocialLinks from '@/components/molecules/social-links';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const MobileNavigation = () => {
    return (
        <div className="flex items-center gap-x-2 md:hidden">
            <ThemeToggle />
            <Sheet>
                <SheetTrigger aria-label="open menu">
                    <MenuIcon className="size-4" />
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle>
                            <Logo imageLoading="lazy" />
                        </SheetTitle>
                    </SheetHeader>
                    <Navigation
                        menuClassName="flex min-w-full flex-none flex-col items-start justify-start gap-y-2"
                        listClassName="flex flex-col items-start gap-y-2"
                    />
                    <SocialLinks className="flex items-center gap-x-2 px-4" iconClassName="size-5" />
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileNavigation;
