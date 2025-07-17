import { FOOTER_CONFIG } from '@/constants/footer';

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="py-6 text-center text-sm tracking-wide">
            <p>
                &copy;{' '}
                {FOOTER_CONFIG.startYear === currentYear ? currentYear : `${FOOTER_CONFIG.startYear}-${currentYear}`}
                <span className="mx-1">
                    <a href={FOOTER_CONFIG.link} target="_blank" rel="noopener noreferrer">
                        {FOOTER_CONFIG.linkTitle}
                    </a>
                </span>
                {FOOTER_CONFIG.copyright}
            </p>
        </footer>
    );
};

export default Footer;
