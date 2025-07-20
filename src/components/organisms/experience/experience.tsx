import cn from '@/utils/cn';
import { SectionPropsT } from '@/types/html';
import ExperienceItem from '@/components/molecules/experience-item';
import experienceConfig from '@/configs/components/experience.config';

const Experience = ({ className, ...props }: SectionPropsT) => {
    return (
        <section className={cn('grid', className)} {...props}>
            <h2 className="sr-only">Experience</h2>
            <div className={cn('relative w-full')}>
                <div
                    className={cn(
                        'absolute left-1/2 hidden h-full translate-x-[-50%] border border-sky-500 dark:border-sky-400 md:block',
                    )}
                />
                <ul className="space-y-4" role="list">
                    {experienceConfig?.map((data) => (
                        <li key={data?.id} className={cn('group relative md:grid md:grid-cols-2')}>
                            <div
                                className={cn(
                                    'absolute left-1/2 top-1/2 hidden h-4 w-4 translate-x-[-50%] translate-y-[-50%] rounded-full bg-sky-500 dark:bg-sky-400 md:block',
                                )}
                            />
                            <ExperienceItem className={cn('m-1 p-2 md:m-3 md:group-even:col-end-3')} {...data} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Experience;
