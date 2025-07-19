import Image, { ImageProps } from 'next/image';
import { DEFAULT_IMAGE_NOT_FOUND } from '@/constants/site';

const NextImage = ({ src, alt = '', unoptimized = true, ...props }: ImageProps) => {
    const imgSrc = src || DEFAULT_IMAGE_NOT_FOUND;

    return <Image src={imgSrc} alt={alt} unoptimized={unoptimized} {...props} />;
};

export default NextImage;
