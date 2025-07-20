import cn from '@/utils/cn';
import PersonalInfo from '@/components/molecules/personal-info';
import BasicInfoList from '@/components/molecules/basic-info-list';
import SocialIconLinks from '@/components/molecules/social-icon-links';

interface InfoCardProps {
    className?: string;
}

const InfoCard = ({ className }: InfoCardProps) => {
    return (
        <div className={cn('space-y-6 p-3', 'dark:text-slate-200', className)}>
            <PersonalInfo />
            <BasicInfoList />
            <div className={cn('flex justify-center')}>
                <SocialIconLinks className="text-2xl" />
            </div>
        </div>
    );
};

export default InfoCard;
