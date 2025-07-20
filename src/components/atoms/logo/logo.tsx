import Link from 'next/link';
import Image from 'next/image';
import cn from '@/utils/cn';
import headerConfig from '@/configs/components/header.config';

const Logo = () => {
    return (
        <Link href="/">
            <div className={cn('flex items-center gap-2')}>
                <Image
                    // className="h-9 w-9 rounded-md object-contain"
                    src={headerConfig.logoImageUrl}
                    width={36}
                    height={36}
                    alt="logo"
                    priority
                />
                <h1 className="text-2xl font-bold text-slate-700 dark:text-slate-200">{headerConfig.title}</h1>
            </div>
        </Link>
    );
};

export default Logo;
