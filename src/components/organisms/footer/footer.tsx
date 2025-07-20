import cn from '@/utils/cn';
import { BaseLink } from '@/components/atoms/link';
import footerConfig from '@/configs/components/footer.config';

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className={cn('py-6', 'text-center text-sm tracking-wide')}>
            <p>
                &copy;{' '}
                {footerConfig.startYear === currentYear ? currentYear : `${footerConfig.startYear}-${currentYear}`}
                <span className={cn('mx-1')}>
                    <BaseLink href={footerConfig.link}>{footerConfig.linkTitle}</BaseLink>
                </span>
                {footerConfig.copyright}
            </p>
        </footer>
    );
};

export default Footer;
