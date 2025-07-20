import cn from '@/utils/cn';
import { DivPropsT } from '@/types/html';
import DisplayElement from '@/components/molecules/display-element';
import WebsiteIntroductionConfig from '@/configs/components/website-introduction.config';

// 抽取共用的樣式配置
const titleGradient = cn(
    'bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500',
    'bg-clip-text text-transparent',
    'dark:from-sky-400 dark:via-purple-400 dark:to-pink-400',
);

const subtitleGradient = cn(
    'bg-gradient-to-r from-sky-500 to-purple-500',
    'bg-clip-text text-transparent',
    'dark:from-sky-400 dark:to-purple-400',
);

// 可重用的文本組件
const GradientText = ({ text, gradient, className }: { text: string; gradient: string; className?: string }) => (
    <span className={cn(gradient, className)}>{text}</span>
);

const WebsiteIntroduction = ({ className, ...props }: DivPropsT) => {
    return (
        <div className={cn('flex w-full items-center justify-center md:text-2xl', className)} {...props}>
            {/* 移動端顯示 */}
            <div className="space-y-2 text-center md:hidden">
                <h2 className="text-2xl font-bold">
                    <GradientText text={WebsiteIntroductionConfig.title} gradient={titleGradient} />
                </h2>
                <p className="text-xl">
                    <GradientText text={WebsiteIntroductionConfig.subtitle} gradient={subtitleGradient} />
                </p>
            </div>

            {/* 桌面端顯示 */}
            <DisplayElement tag="body" className="hidden md:block">
                <DisplayElement tag="main">
                    <DisplayElement tag="h1" wrap={false} className="mb-8">
                        <GradientText
                            text={WebsiteIntroductionConfig.title}
                            gradient={titleGradient}
                            className="font-bold md:text-4xl lg:text-5xl"
                        />
                    </DisplayElement>
                    <DisplayElement tag="p" wrap={false}>
                        <GradientText
                            text={WebsiteIntroductionConfig.subtitle}
                            gradient={subtitleGradient}
                            className="md:text-3xl lg:text-4xl"
                        />
                    </DisplayElement>
                </DisplayElement>
            </DisplayElement>
        </div>
    );
};

export default WebsiteIntroduction;
