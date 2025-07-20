'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MdLightMode } from 'react-icons/md';
import { BsFillMoonFill } from 'react-icons/bs';
import themeConfig from '@/configs/theme.config';

const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentTheme: string | undefined =
        theme === 'system' && ['dark', 'light'].includes(themeConfig.mode) ? themeConfig.mode : theme;

    // If theme switch is disabled in config, don't render anything
    if (!themeConfig.enabled) {
        return null;
    }

    return (
        <>
            {!mounted && <div className="h-5 w-5" />}
            {mounted &&
                (currentTheme === 'dark' ? (
                    <MdLightMode
                        className="cursor-pointer text-xl text-sky-500 dark:text-sky-400"
                        onClick={() => setTheme('light')}
                    />
                ) : (
                    <BsFillMoonFill
                        className="cursor-pointer text-xl text-sky-500 dark:text-sky-400"
                        onClick={() => setTheme('dark')}
                    />
                ))}
        </>
    );
};

export default ThemeSwitch;
