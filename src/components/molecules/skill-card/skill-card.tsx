import cn from '@/utils/cn';

interface SkillCardProps {
    title: string;
    skills: string[];
}

const SkillCard = ({ title, skills }: SkillCardProps) => {
    return (
        <div className="mx-2 flex-1 transform rounded-lg border border-purple-100 p-5 shadow-md transition-transform dark:border-white/30">
            <h2 className="border-b-2 border-gray-200 pb-2 text-xl font-bold">{title}</h2>
            <ul className={cn('list-inside list-disc space-y-1 rounded-lg', 'p-4')}>
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </div>
    );
};

export default SkillCard;
