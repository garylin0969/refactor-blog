import cn from '@/utils/cn';
import InfoItem from '@/components/atoms/info-item';
import { infoList } from '@/configs/components/info.config';

const BasicInfoList = () => {
    return (
        <div className={cn('flex justify-center')}>
            <div>
                {infoList?.map((data) => (
                    <InfoItem key={data?.text} icon={data?.icon} link={data?.link} text={data?.text} />
                ))}
            </div>
        </div>
    );
};

export default BasicInfoList;
