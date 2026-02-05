import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Dashboard.module.css';

const Dashboard = () => {
    const [ref, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

    return (
        <section id="dashboard" className={styles.section} ref={ref}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.label}>Dashboard</span>
                    <h2 className={styles.title}>
                        Manage your SLOHM
                        <br />
                        all in one place
                    </h2>
                    <p className={styles.description}>
                        Stake, bond, and track your rewards with our intuitive dashboard. Connect
                        your wallet and start earning.
                    </p>

                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <div className={styles.featureIcon}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path
                                        d="M7 10L9 12L13 8M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <span>Real-time staking rewards</span>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.featureIcon}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path
                                        d="M7 10L9 12L13 8M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <span>Active bond tracking</span>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.featureIcon}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path
                                        d="M7 10L9 12L13 8M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <span>Treasury transparency</span>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.featureIcon}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path
                                        d="M7 10L9 12L13 8M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <span>OP_WALLET integration</span>
                        </div>
                    </div>

                    <a href="#" className={styles.launchBtn}>
                        Launch Dashboard
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
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

                <div className={`${styles.preview} ${isVisible ? styles.visible : ''}`}>
                    <div className={styles.mockup}>
                        <div className={styles.mockupHeader}>
                            <div className={styles.dots}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <span className={styles.mockupTitle}>SLOHM Dashboard</span>
                        </div>

                        <div className={styles.mockupContent}>
                            <div className={styles.statsRow}>
                                <div className={styles.statCard}>
                                    <span className={styles.statLabel}>Your Balance</span>
                                    <span className={styles.statValue}>12,847.32</span>
                                    <span className={styles.statUnit}>sSLOHM</span>
                                </div>
                                <div className={styles.statCard}>
                                    <span className={styles.statLabel}>Pending Rewards</span>
                                    <span className={styles.statValueGreen}>+247.18</span>
                                    <span className={styles.statUnit}>SLOHM</span>
                                </div>
                            </div>

                            <div className={styles.actionCards}>
                                <div className={styles.actionCard}>
                                    <h4>Stake</h4>
                                    <div className={styles.inputRow}>
                                        <span className={styles.inputPlaceholder}>0.0</span>
                                        <span className={styles.inputMax}>MAX</span>
                                    </div>
                                    <div className={styles.actionBtn}>Stake SLOHM</div>
                                </div>

                                <div className={styles.actionCard}>
                                    <h4>Bond</h4>
                                    <div className={styles.bondOptions}>
                                        <span className={styles.bondOption}>MOTO</span>
                                        <span className={styles.bondOption}>PILL</span>
                                        <span className={styles.bondOption}>LP</span>
                                    </div>
                                    <div className={styles.discount}>5-15% Discount</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
