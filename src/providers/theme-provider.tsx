'use client';

import { ReactNode } from 'react';
import { ThemeProvider as Provider } from 'next-themes';

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    return (
        <>
            <Provider enableSystem={true} attribute="class">
                {children}
            </Provider>
        </>
    );
};

export default ThemeProvider;
