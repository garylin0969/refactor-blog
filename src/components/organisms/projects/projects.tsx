import cn from '@/utils/cn';
import { SectionPropsT } from '@/types/html';
import ProjectCard from '@/components/molecules/project-card';
import projectsConfig from '@/configs/components/projects.config';

const Projects = ({ className, ...props }: SectionPropsT) => {
    return (
        <section
            className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3', 'gap-4', 'px-2 md:px-0', className)}
            {...props}
        >
            {projectsConfig?.map((data) => {
                return (
                    <div key={data?.id} className={cn('h-full w-full', 'flex justify-center')}>
                        <ProjectCard
                            imageUrl={data?.imageUrl}
                            projectUrl={data?.projectUrl}
                            projectName={data?.projectName}
                            projectTags={data?.projectTags}
                        />
                    </div>
                );
            })}
        </section>
    );
};

export default Projects;
