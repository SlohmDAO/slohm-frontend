import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.gridPattern}></div>
                <div className={styles.gradientOrb1}></div>
                <div className={styles.gradientOrb2}></div>
            </div>

            <div className={styles.container}>
                <div className={styles.badge}>
                    <span className={styles.badgeDot}></span>
                    <span>Built on OPNet</span>
                </div>

                <div className={styles.omegaContainer}>
                    <div className={styles.omegaGlow}></div>
                    <span className={styles.omega}>Ω</span>
                </div>

                <h1 className={styles.title}>
                    The Reserve Currency
                    <br />
                    <span className={styles.titleAccent}>Reborn on Bitcoin</span>
                </h1>

                <p className={styles.subtitle}>
                    SLOHM brings Olympus DAO mechanics to Bitcoin L1. Real backing, real staking,
                    real (3,3) game theory — powered by OPNet smart contracts.
                </p>

                <div className={styles.actions}>
                    <a href="#dashboard" className={styles.btnPrimary}>
                        <span>Launch App</span>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3 8H13M13 8L8 3M13 8L8 13"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                    <a href="#docs" className={styles.btnSecondary}>
                        <span>Read Docs</span>
                    </a>
                </div>

                <div className={styles.metrics}>
                    <div className={styles.metric}>
                        <span className={styles.metricValue}>1,247%</span>
                        <span className={styles.metricLabel}>Target APY</span>
                    </div>
                    <div className={styles.metricDivider}></div>
                    <div className={styles.metric}>
                        <span className={styles.metricValue}>5 Days</span>
                        <span className={styles.metricLabel}>Vesting Period</span>
                    </div>
                    <div className={styles.metricDivider}></div>
                    <div className={styles.metric}>
                        <span className={styles.metricValue}>100%</span>
                        <span className={styles.metricLabel}>On-Chain</span>
                    </div>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <span>Scroll to explore</span>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 3V17M10 17L5 12M10 17L15 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
