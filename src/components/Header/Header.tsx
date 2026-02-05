import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const DOCS_URL = 'https://docs.slohm.finance';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <a href="/" className={styles.logo} onClick={handleLogoClick}>
                    <span className={styles.logoOmega}>Ω</span>
                    <span className={styles.logoText}>SLOHM</span>
                </a>

                <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
                    <a
                        href="#features"
                        className={styles.navLink}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Features
                    </a>
                    <a
                        href="#how-it-works"
                        className={styles.navLink}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        How It Works
                    </a>
                    <a
                        href="#treasury"
                        className={styles.navLink}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Treasury
                    </a>
                    <a
                        href={DOCS_URL}
                        className={styles.navLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Docs
                    </a>
                </nav>

                <div className={styles.actions}>
                    <a href="#dashboard" className={styles.btnSecondary}>
                        Dashboard
                    </a>
                    <a
                        href={DOCS_URL}
                        className={styles.btnPrimary}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Launch App
                    </a>
                </div>

                <button
                    className={`${styles.menuBtn} ${isMobileMenuOpen ? styles.menuOpen : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
