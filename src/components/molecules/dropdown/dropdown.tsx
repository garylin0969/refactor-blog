'use client';

import { useState, useRef, useEffect } from 'react';
import cn from '@/utils/cn';
import { DivPropsT } from '@/types/html';

interface DropdownProps extends DivPropsT {
    label?: string;
    options: Array<{
        id: string | number;
        label: string;
        value: string | number;
    }>;
    value?: string | number;
    onOptionChange?: (value: string | number) => void;
    placeholder?: string;
    disabled?: boolean;
}

const Dropdown = ({
    className,
    label,
    options,
    value,
    onOptionChange,
    placeholder = 'Select an option',
    disabled = false,
    ...props
}: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<(typeof options)[0] | null>(
        options.find((option) => option.value === value) || null,
    );
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Update selected option when value prop changes
    useEffect(() => {
        const option = options.find((option) => option.value === value);
        setSelectedOption(option || null);
    }, [value, options]);

    const handleSelect = (option: (typeof options)[0]) => {
        setSelectedOption(option);
        setIsOpen(false);
        onOptionChange?.(option.value);
    };

    return (
        <div className={cn('w-full', className)} {...props}>
            {label && (
                <label className="mb-1 block text-sm font-semibold text-gray-700 dark:text-gray-300">{label}</label>
            )}
            <div ref={dropdownRef} className="relative">
                <button
                    type="button"
                    className={cn(
                        'w-full px-4 py-2',
                        'flex items-center justify-between',
                        'rounded-md border border-gray-200 shadow-md dark:border-white/30',
                        'bg-transparent dark:bg-slate-900',
                        'text-sm font-semibold text-gray-700 dark:text-gray-200',
                        // 'focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500',
                        disabled && 'cursor-not-allowed opacity-50',
                    )}
                    onClick={() => !disabled && setIsOpen(!isOpen)}
                    disabled={disabled}
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                >
                    <span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
                    <svg
                        className={cn('h-5 w-5 text-gray-400', isOpen ? 'rotate-180 transform' : '')}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>

                {isOpen && (
                    <ul
                        className={cn(
                            'absolute z-10 mt-1 w-full',
                            'max-h-60 overflow-auto',
                            'rounded-md',
                            'bg-white',
                            'text-sm text-gray-700',
                            'shadow-lg',
                            'border border-gray-300',
                            'focus:outline-none',
                        )}
                        role="listbox"
                    >
                        {options.length > 0 ? (
                            options.map((option) => (
                                <li
                                    key={option.id}
                                    className={cn(
                                        'font-semibold',
                                        'relative cursor-pointer px-4 py-2 select-none',
                                        'hover:bg-sky-100',
                                        selectedOption?.value === option.value ? 'bg-sky-50 text-sky-600' : '',
                                    )}
                                    onClick={() => handleSelect(option)}
                                    role="option"
                                    aria-selected={selectedOption?.value === option.value}
                                >
                                    {option.label}
                                </li>
                            ))
                        ) : (
                            <li className="px-4 py-2 text-gray-500 italic">No options available</li>
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Dropdown;
