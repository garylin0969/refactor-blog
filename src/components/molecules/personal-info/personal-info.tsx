import cn from '@/utils/cn';
import Avatar from '@/components/atoms/avatar';
import { infoName } from '@/configs/components/info.config';

const PersonalInfo = () => {
    return (
        <>
            <div className={cn('flex justify-center')}>
                <Avatar />
            </div>
            <div className={cn('text-center text-4xl font-bold tracking-wider')}>{infoName}</div>
        </>
    );
};

export default PersonalInfo;
