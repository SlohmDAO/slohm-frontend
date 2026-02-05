import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './HowItWorks.module.css';

const steps = [
    {
        number: '01',
        title: 'Bond Assets',
        description:
            'Trade MOTO, PILL, or LP tokens for SLOHM at a discount. Your assets go directly to the Treasury, increasing the backing for all holders.',
        highlight: '5-15% Discount',
    },
    {
        number: '02',
        title: 'Vest Over Time',
        description:
            'Bonded SLOHM vests linearly over 5 days (~720 blocks). This prevents instant arbitrage and ensures long-term alignment.',
        highlight: '5 Day Vesting',
    },
    {
        number: '03',
        title: 'Stake SLOHM',
        description:
            'Once vested, stake your SLOHM to receive sSLOHM. Your staked balance automatically grows every epoch through rebasing.',
        highlight: '1000%+ APY',
    },
    {
        number: '04',
        title: 'Earn Rewards',
        description:
            'Every 144 blocks (~1 day), the protocol distributes rewards to stakers. The longer you stake, the more you earn.',
        highlight: '(3,3) Win',
    },
];

const HowItWorks = () => {
    const [ref, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

    return (
        <section id="how-it-works" className={styles.section} ref={ref}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>How It Works</span>
                    <h2 className={styles.title}>Four steps to (3,3)</h2>
                    <p className={styles.subtitle}>
                        A simple yet powerful mechanism that aligns incentives and grows the
                        treasury.
                    </p>
                </div>

                <div className={`${styles.steps} ${isVisible ? styles.visible : ''}`}>
                    <div className={styles.connector}></div>

                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className={styles.step}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className={styles.stepNumber}>{step.number}</div>
                            <div className={styles.stepContent}>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.description}</p>
                                <span className={styles.stepHighlight}>{step.highlight}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.cta}>
                    <a href="#docs" className={styles.ctaLink}>
                        Learn more in our documentation
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 10H15M15 10L10 5M15 10L10 15"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
