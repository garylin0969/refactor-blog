import { DivPropsT } from '@/types/html';
import cn from '@/utils/cn';

const Container = ({ className, children, ...props }: DivPropsT) => {
    return (
        <div className={cn('mx-auto max-w-6xl px-4', className)} {...props}>
            {children}
        </div>
    );
};

export default Container;
