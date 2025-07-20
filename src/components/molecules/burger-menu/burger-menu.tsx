'use client';

import { useState } from 'react';
import cn from '@/utils/cn';
import ExpandableContainer from '@/components/atoms/expandable-container';
import BurgerButton from './burger-button';
import MobileNavMenu from './mobile-nav-menu';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen((prev) => !prev);

    return (
        <>
            <div
                className={cn(
                    'fixed inset-0 top-16 h-[calc(100vh-64px)] w-screen bg-black/50 backdrop-blur-sm transition-all duration-300 md:hidden',
                    isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
                )}
                onClick={toggleMenu}
            />
            <BurgerButton isOpen={isOpen} toggleMenu={toggleMenu} className="md:hidden" />
            <ExpandableContainer
                isOpen={isOpen}
                direction="down"
                className={cn('top-16 z-50 bg-white md:hidden dark:bg-slate-900', isOpen && 'shadow-md')}
            >
                <MobileNavMenu onItemClick={toggleMenu} />
            </ExpandableContainer>
        </>
    );
};

export default BurgerMenu;
