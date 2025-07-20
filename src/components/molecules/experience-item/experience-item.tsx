import Image from 'next/image';
import cn from '@/utils/cn';
import { DivPropsT } from '@/types/html';
import ExperienceMore from '@/components/molecules/experience-more';

interface ExperienceItemProps extends DivPropsT {
    logoSrc?: string;
    title?: string;
    companyUrl?: string;
    companyName?: string;
    employmentStartDate?: string;
    employmentEndDate?: string;
    button?: {
        enabled: boolean;
        text: string;
    };
    details?: string[];
}

const CompanyLink = ({ url, name }: { url: string; name: string }) => (
    <a
        href={url}
        className="transition-colors duration-200 hover:text-sky-500 dark:hover:text-sky-400"
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`Visit ${name}'s website`}
    >
        {name}
    </a>
);

const ExperienceItem = ({
    logoSrc = '',
    title = '',
    companyUrl = '',
    companyName = '',
    employmentStartDate = '',
    employmentEndDate = '',
    button = {
        enabled: false,
        text: '',
    },
    details = [],
    className,
    ...props
}: ExperienceItemProps) => {
    const itemClasses = cn(
        'max-w-xl',
        'p-4',
        'shadow-lg hover:shadow-xl',
        'rounded-xl border border-purple-100 dark:border-white/30',
        'bg-gradient-to-br from-white to-purple-50/30',
        'dark:from-slate-900 dark:to-slate-900',
        className,
    );

    return (
        <div className={itemClasses} {...props}>
            <div className="flex gap-4">
                <div className="flex-shrink-0">
                    <Image
                        className={cn('h-16 w-16 rounded-md bg-white object-contain')}
                        src={logoSrc}
                        width={64}
                        height={64}
                        alt={`${companyName} logo`}
                    />
                </div>
                <div className="flex-grow">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <div className="mb-1 text-base">
                        {companyUrl ? <CompanyLink url={companyUrl} name={companyName} /> : companyName}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                        <time dateTime={employmentStartDate}>{employmentStartDate}</time>
                        <span className="mx-2">-</span>
                        <time dateTime={employmentEndDate}>{employmentEndDate}</time>
                    </div>
                </div>
            </div>
            {button?.enabled && <ExperienceMore details={details} button={button} />}
        </div>
    );
};

export default ExperienceItem;
