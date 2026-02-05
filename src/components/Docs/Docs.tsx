import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Docs.module.css';

const DOCS_URL = 'https://docs.slohm.finance';

const docCategories = [
    {
        title: 'Getting Started',
        description: 'Learn the basics of SLOHM and how to participate',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                    d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        links: [
            { label: 'What is SLOHM?', href: '/introduction/what-is-slohm' },
            { label: 'How Staking Works', href: '/protocol-mechanics/staking' },
            { label: 'Understanding Bonding', href: '/protocol-mechanics/bonding' },
            { label: 'The (3,3) Game', href: '/introduction/game-theory' },
        ],
    },
    {
        title: 'Protocol Mechanics',
        description: 'Deep dive into how SLOHM works under the hood',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                    d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.7872 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6002 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6002 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                />
            </svg>
        ),
        links: [
            { label: 'Treasury Model', href: '/protocol-mechanics/treasury' },
            { label: 'Rebase Mechanics', href: '/protocol-mechanics/staking' },
            { label: 'Bond Pricing (RFV)', href: '/protocol-mechanics/bonding' },
            { label: 'Governance', href: '/governance/how-it-works' },
        ],
    },
    {
        title: 'Smart Contracts',
        description: 'Technical documentation for developers',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                    d="M8 9L11 12L8 15M13 15H16M5 20H19C20.1046 20 21 19.1046 21 18V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V18C3 19.1046 3.89543 20 5 20Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        links: [
            { label: 'SLOHM Token', href: '/smart-contracts/slohm-token' },
            { label: 'sSLOHM (Staking)', href: '/smart-contracts/sslohm-token' },
            { label: 'SlohmBonder', href: '/smart-contracts/bonder-contract' },
            { label: 'SlohmTreasury', href: '/smart-contracts/treasury-contract' },
        ],
    },
    {
        title: 'Security',
        description: 'Audit reports and security practices',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                    d="M9 12L11 14L15 10M20.6179 5.98434C20.4132 5.99472 20.2072 5.99997 20 5.99997C16.9265 5.99997 14.123 4.84453 11.9999 2.94434C9.87691 4.84446 7.07339 5.99985 4 5.99985C3.79277 5.99985 3.58678 5.9946 3.38213 5.98422C3.1327 6.94783 3 7.95842 3 9.00001C3 14.5915 6.82432 19.2898 12 20.622C17.1757 19.2898 21 14.5915 21 9.00001C21 7.95847 20.8673 6.94791 20.6179 5.98434Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        links: [
            { label: 'Multisig Setup', href: '/governance/multisig-signers' },
            { label: 'Security Model', href: '/security/security-model' },
            { label: 'Risk Factors', href: '/security/risks' },
            { label: 'FAQ', href: '/faq/general' },
        ],
    },
];

const Docs = () => {
    const [ref, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

    return (
        <section id="docs" className={styles.section} ref={ref}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>Documentation</span>
                    <h2 className={styles.title}>Everything you need to know</h2>
                    <p className={styles.subtitle}>
                        Comprehensive documentation covering protocol mechanics, smart contracts,
                        and security practices.
                    </p>
                </div>

                <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
                    {docCategories.map((category, index) => (
                        <div
                            key={category.title}
                            className={styles.card}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.cardIcon}>{category.icon}</div>
                                <h3 className={styles.cardTitle}>{category.title}</h3>
                            </div>
                            <p className={styles.cardDesc}>{category.description}</p>
                            <ul className={styles.linkList}>
                                {category.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={`${DOCS_URL}${link.href}`}
                                            className={styles.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {link.label}
                                            <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                fill="none"
                                            >
                                                <path
                                                    d="M6 12L10 8L6 4"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className={styles.cta}>
                    <a
                        href={DOCS_URL}
                        className={styles.ctaButton}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M10 3.33334V16.6667M10 3.33334L5 8.33334M10 3.33334L15 8.33334"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        View Full Documentation
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Docs;
