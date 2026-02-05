import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Features.module.css';

const features = [
    {
        icon: (
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M16 2L4 8V24L16 30L28 24V8L16 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path d="M16 16L28 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M16 16V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M16 16L4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        title: 'Asset-Backed Treasury',
        description:
            'Every SLOHM is backed by real assets: BTC in community multisig plus OP20 tokens (MOTO, PILL, LP) held on-chain in smart contracts.',
    },
    {
        icon: (
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
                <path
                    d="M16 10V16L20 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        title: 'High-Yield Staking',
        description:
            'Stake SLOHM to receive sSLOHM. Your balance automatically grows every epoch through rebasing, targeting 1000%+ APY during bootstrap.',
    },
    {
        icon: (
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M4 16H8L12 6L20 26L24 16H28"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        title: 'Discounted Bonding',
        description:
            'Trade OP20 assets or LP tokens for SLOHM at 5-15% discount. Assets go to treasury, strengthening backing for all holders.',
    },
    {
        icon: (
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="4"
                    y="14"
                    width="24"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                />
                <path
                    d="M8 14V10C8 6.68629 10.6863 4 14 4H18C21.3137 4 24 6.68629 24 10V14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <circle cx="16" cy="21" r="2" fill="currentColor" />
            </svg>
        ),
        title: '4-of-7 Multisig',
        description:
            'Community-controlled governance with 4-of-7 multisig for both BTC treasury and on-chain parameters. No single point of failure.',
    },
    {
        icon: (
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="8" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="24" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="8" cy="24" r="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="2" />
                <path
                    d="M12 8H20M12 24H20M8 12V20M24 12V20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        ),
        title: 'OPNet Native',
        description:
            'Built on Bitcoin L1 via OPNet smart contracts. Trustless execution, verifiable on-chain, with all the security of Bitcoin consensus.',
    },
    {
        icon: (
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M16 4L4 10L16 16L28 10L16 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M4 16L16 22L28 16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M4 22L16 28L28 22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        title: 'SlowFi Philosophy',
        description:
            "Bitcoin's 10-minute blocks create natural exit friction. The (3,3) game theory is STRONGER when defection takes time.",
    },
];

const Features = () => {
    const [ref, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

    return (
        <section id="features" className={styles.features} ref={ref}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>Core Features</span>
                    <h2 className={styles.title}>
                        A complete reserve currency
                        <br />
                        protocol on Bitcoin
                    </h2>
                    <p className={styles.subtitle}>
                        SLOHM combines proven OHM mechanics with Bitcoin&apos;s security and
                        OPNet&apos;s smart contract capabilities.
                    </p>
                </div>

                <div className={`${styles.grid} ${isVisible ? styles.visible : ''}`}>
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={styles.card}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className={styles.cardIcon}>{feature.icon}</div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardDesc}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
