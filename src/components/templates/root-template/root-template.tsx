import type { ReactNode } from 'react';
import cn from '@/utils/cn';
import Header from '@/components/organisms/header';
import Footer from '@/components/organisms/footer';
import ScrollToTopButton from '@/components/atoms/scroll-to-top-button';

interface RootTemplateProps {
    children: ReactNode;
}

const RootTemplate = ({ children }: RootTemplateProps) => {
    return (
        <div className={cn('relative', 'text-slate-700 dark:text-slate-300')}>
            <div
                className={cn(
                    'absolute inset-0',
                    'bg-gradient-to-b from-pink-50 via-purple-50 to-sky-50',
                    'transition-opacity duration-300',
                    'dark:opacity-0',
                )}
            />
            <div
                className={cn(
                    'absolute inset-0',
                    'bg-slate-900',
                    'transition-opacity duration-300',
                    'opacity-0 dark:opacity-100',
                )}
            />
            <div className="relative">
                <Header />
                <div className="flex min-h-[calc(100vh-68px)] pt-16">
                    <main className="flex-grow">{children}</main>
                </div>
                <Footer />
                <ScrollToTopButton />
            </div>
        </div>
    );
};

export default RootTemplate;
