import { useState, useEffect } from 'react';
import styles from './Header.module.css';

const DOCS_URL = 'https://docs.slohm.finance';
const APP_URL = 'https://app.slohm.finance';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isGovernanceOpen, setIsGovernanceOpen] = useState(false);

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

                <div className={styles.rightSection}>
                    <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
                        <a
                            href={DOCS_URL}
                            className={styles.navLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Docs
                        </a>
                        <div
                            className={styles.dropdown}
                            onMouseEnter={() => setIsGovernanceOpen(true)}
                            onMouseLeave={() => setIsGovernanceOpen(false)}
                        >
                            <button className={styles.navLink}>
                                Governance
                                <svg
                                    className={`${styles.dropdownArrow} ${isGovernanceOpen ? styles.dropdownArrowOpen : ''}`}
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                >
                                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <div className={`${styles.dropdownMenu} ${isGovernanceOpen ? styles.dropdownMenuOpen : ''}`}>
                                <a
                                    href="https://vote.slohm.finance"
                                    className={styles.dropdownItem}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Vote
                                </a>
                                <a
                                    href="https://forum.slohm.finance"
                                    className={styles.dropdownItem}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Forum
                                </a>
                            </div>
                        </div>
                    </nav>

                    <a
                        href={APP_URL}
                        className={styles.btnPrimary}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Enter App
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
