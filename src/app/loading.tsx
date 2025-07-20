import cn from '@/utils/cn';

const loading = () => {
    return (
        <div
            className={cn(
                'min-h-full',
                'flex items-center justify-center',
                'bg-gradient-to-b from-pink-50 via-purple-50 to-sky-50',
                'dark:from-slate-900 dark:to-slate-800',
            )}
        >
            <div className="flex flex-col items-center">
                <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-solid border-sky-500 dark:border-sky-400"></div>
                <p className="mt-4 text-lg text-slate-700 dark:text-slate-300">Loading...</p>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Please wait a moment</p>
            </div>
        </div>
    );
};

export default loading;
