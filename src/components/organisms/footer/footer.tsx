import { FOOTER_CONFIG } from '@/constants/footer';

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="border-t py-6 text-center text-sm tracking-wide">
            <p>
                &copy;{' '}
                {FOOTER_CONFIG.startYear === currentYear ? currentYear : `${FOOTER_CONFIG.startYear}-${currentYear}`}
                <span className="mx-1">
                    <a
                        className="hover:text-primary"
                        href={FOOTER_CONFIG.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {FOOTER_CONFIG.linkTitle}
                    </a>
                </span>
                {FOOTER_CONFIG.copyright}
            </p>
        </footer>
    );
};

export default Footer;
