import Image, { ImageProps } from 'next/image';
import { DEFAULT_IMAGE_NOT_FOUND } from '@/constants/site';

const NextImage = ({ src, unoptimized = true, ...props }: ImageProps) => {
    const imgSrc = src || DEFAULT_IMAGE_NOT_FOUND;

    return <Image src={imgSrc} unoptimized={unoptimized} {...props} />;
};

export default NextImage;
