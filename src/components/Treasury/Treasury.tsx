import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Treasury.module.css';

const assets = [
    {
        name: 'Bitcoin',
        symbol: 'BTC',
        type: 'Primary Reserve',
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
                <path
                    d="M12 12V21M20 12C20 12 21 12 21 13.5C21 15 20 15.5 18 15.5H12M20 20C20 20 21 20 21 18.5C21 17 20 16.5 18 16.5H12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M14 10V12M18 10V12M14 21V23M18 21V23"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        ),
        color: '#F7931A',
    },
    {
        name: 'MOTO',
        symbol: 'MOTO',
        type: 'OP20 Reserve',
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
                <path
                    d="M10 20V12L16 16L22 12V20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        color: '#3B82F6',
    },
    {
        name: 'PILL',
        symbol: 'PILL',
        type: 'OP20 Reserve',
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" />
                <rect
                    x="11"
                    y="13"
                    width="10"
                    height="6"
                    rx="3"
                    stroke="currentColor"
                    strokeWidth="2"
                />
            </svg>
        ),
        color: '#8B5CF6',
    },
    {
        name: 'LP Tokens',
        symbol: 'LP',
        type: 'Liquidity',
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="12" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
                <circle cx="20" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
            </svg>
        ),
        color: '#10B981',
    },
];

const Treasury = () => {
    const [ref, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.2 });

    return (
        <section id="treasury" className={styles.section} ref={ref}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.label}>Treasury</span>
                    <h2 className={styles.title}>Real assets backing real value</h2>
                    <p className={styles.description}>
                        SLOHM operates a hybrid treasury model. BTC is held in a
                        community-controlled 4-of-7 multisig, while OP20 tokens are held directly in
                        smart contracts on OPNet.
                    </p>

                    <div className={styles.highlights}>
                        <div className={styles.highlight}>
                            <div className={styles.highlightIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h4>Verifiable On-Chain</h4>
                                <p>All OP20 holdings publicly auditable via OPNet explorer</p>
                            </div>
                        </div>
                        <div className={styles.highlight}>
                            <div className={styles.highlightIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M12 15V17M6 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11H6C4.89543 11 4 11.8954 4 13V19C4 20.1046 4.89543 21 6 21ZM16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11H16Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h4>Community Controlled</h4>
                                <p>4-of-7 multisig for all treasury operations</p>
                            </div>
                        </div>
                        <div className={styles.highlight}>
                            <div className={styles.highlightIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M4 4V20M4 8H8.5C9.32843 8 10 7.32843 10 6.5C10 5.67157 9.32843 5 8.5 5H4V8ZM4 14H9.5C10.3284 14 11 13.3284 11 12.5C11 11.6716 10.3284 11 9.5 11H4V14ZM20 12L16 8V16L20 12Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h4>Redeemable Floor</h4>
                                <p>Each SLOHM redeemable for its backing value</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.visualization} ${isVisible ? styles.visible : ''}`}>
                    <div className={styles.treasuryBox}>
                        <div className={styles.treasuryHeader}>
                            <span className={styles.treasuryLabel}>Treasury Holdings</span>
                        </div>

                        <div className={styles.assets}>
                            {assets.map((asset, index) => (
                                <div
                                    key={asset.symbol}
                                    className={styles.asset}
                                    style={{
                                        transitionDelay: `${index * 100}ms`,
                                        borderLeftColor: asset.color,
                                    }}
                                >
                                    <div
                                        className={styles.assetIcon}
                                        style={{ color: asset.color }}
                                    >
                                        {asset.icon}
                                    </div>
                                    <div className={styles.assetInfo}>
                                        <span className={styles.assetName}>{asset.name}</span>
                                        <span className={styles.assetType}>{asset.type}</span>
                                    </div>
                                    <span
                                        className={styles.assetBadge}
                                        style={{
                                            background: `${asset.color}15`,
                                            color: asset.color,
                                        }}
                                    >
                                        {asset.symbol}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className={styles.treasuryFooter}>
                            <span>Prices from MotoSwap pools</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Treasury;
