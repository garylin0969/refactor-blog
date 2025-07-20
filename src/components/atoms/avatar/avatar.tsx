import Image, { ImageProps } from 'next/image';
import { infoImage } from '@/configs/components/info.config';

const avatarInitProps = {
    className: 'rounded-full aspect-square',
    src: infoImage.url,
    width: 160,
    height: 160,
    alt: infoImage.alt,
};

const Avatar = ({ ...props }: Partial<ImageProps>) => {
    return <Image {...avatarInitProps} alt={props.alt || infoImage.alt} {...props} />;
};

export default Avatar;
