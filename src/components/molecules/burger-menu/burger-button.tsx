'use client';

import cn from '@/utils/cn';

const burgerBorderClasses = 'h-0.5 w-7 bg-black transition duration-300 dark:bg-white';

interface BurgerButtonProps {
    className?: string;
    isOpen: boolean;
    toggleMenu: () => void;
}

const BurgerButton = ({ className, isOpen, toggleMenu }: BurgerButtonProps) => {
    return (
        <button
            className={cn('space-y-1.5', 'flex flex-col items-center justify-center', 'h-7 w-7', className)}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
        >
            <span className={cn(burgerBorderClasses, isOpen && 'translate-y-2 rotate-45')} />
            <span className={cn(burgerBorderClasses, isOpen && 'opacity-0')} />
            <span className={cn(burgerBorderClasses, isOpen && '-translate-y-2 -rotate-45')} />
        </button>
    );
};

export default BurgerButton;
