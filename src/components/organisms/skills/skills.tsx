import SkillCard from '@/components/molecules/skill-card';
import skillsConfig from '@/configs/components/skills.config';

const Skills = () => {
    return (
        <div className="flex flex-wrap justify-between gap-4">
            {skillsConfig?.map(({ id, title, skills }) => <SkillCard key={id} title={title} skills={skills} />)}
        </div>
    );
};

export default Skills;
