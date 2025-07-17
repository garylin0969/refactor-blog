import Link from 'next/link';
import NextImage from '@/components/atoms/next-image';
import { LOGO_IMAGE_PATH, WEBSITE_TITLE } from '@/constants/site';

interface LogoProps {
    href?: string;
    className?: string;
    imageClassName?: string;
    imageWidth?: number;
    imageHeight?: number;
    imageLoading?: 'eager' | 'lazy';
    imageAlt?: string;
    titleClassName?: string;
}

const Logo = ({
    href = '/',
    className = 'flex items-center gap-x-2',
    imageClassName,
    imageWidth = 32,
    imageHeight = 32,
    imageLoading = 'eager',
    imageAlt = 'website logo',
    titleClassName = 'font-bold',
}: LogoProps) => {
    return (
        <Link href={href} className={className}>
            <NextImage
                src={LOGO_IMAGE_PATH}
                className={imageClassName}
                width={imageWidth}
                height={imageHeight}
                loading={imageLoading}
                alt={imageAlt}
            />
            <span className={titleClassName}>{WEBSITE_TITLE}</span>
        </Link>
    );
};

export default Logo;
