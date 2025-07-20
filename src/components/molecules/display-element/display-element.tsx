import { JSX } from 'react';
import cn from '@/utils/cn';
import { DivPropsT } from '@/types/html';

const tagColor = 'text-slate-400 dark:text-slate-300';
const tagTextColor = 'text-[#f92672]';

interface RenderTagProps {
    tag: keyof JSX.IntrinsicElements | ''; // 限制 tag 屬性為合法的 HTML 標籤
    isClose?: boolean;
}

const RenderTag = ({ tag = '', isClose = false }: RenderTagProps) => (
    <>
        <span className={tagColor}>{isClose ? `</` : `<`}</span>
        <span className={tagTextColor}>{tag}</span>
        <span className={tagColor}>{`>`}</span>
    </>
);

interface DisplayElementProps extends DivPropsT {
    tag?: keyof JSX.IntrinsicElements | ''; // 限制 tag 屬性為合法的 HTML 標籤
    tagClassName?: string;
    wrap?: boolean; // 控制是否換行
}

const DisplayElement = ({
    tag = '',
    tagClassName,
    wrap = true,
    className,
    children,
    ...props
}: DisplayElementProps) => {
    return (
        <div className={cn({ 'md:flex md:items-center': !wrap }, className)} {...props}>
            <p className={cn('block', { 'md:inline-block md:pl-[2em] md:pr-2': !wrap }, tagClassName)}>
                <RenderTag tag={tag} />
            </p>
            <div className={cn('pl-[2em]', { 'md:inline-block md:p-0': !wrap })}>{children}</div>
            <p className={cn('block', { 'md:inline-block md:pl-2': !wrap }, tagClassName)}>
                <RenderTag tag={tag} isClose />
            </p>
        </div>
    );
};

export default DisplayElement;
