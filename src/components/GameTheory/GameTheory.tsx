import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './GameTheory.module.css';

const GameTheory = () => {
    const [ref, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.2 });

    return (
        <section className={styles.section} ref={ref}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>Game Theory</span>
                    <h2 className={styles.title}>The (3,3) Game</h2>
                    <p className={styles.subtitle}>
                        When everyone stakes, everyone wins. Bitcoin&apos;s natural slowness makes
                        defection costly.
                    </p>
                </div>

                <div className={`${styles.matrixContainer} ${isVisible ? styles.visible : ''}`}>
                    <table className={styles.matrix}>
                        <thead>
                            <tr>
                                <th className={styles.emptyCell}></th>
                                <th className={styles.emptyCell}></th>
                                <th colSpan={2} className={styles.playerHeader}>
                                    Player B
                                </th>
                            </tr>
                            <tr>
                                <th className={styles.emptyCell}></th>
                                <th className={styles.emptyCell}></th>
                                <th className={styles.actionHeader}>Stake</th>
                                <th className={styles.actionHeader}>Sell</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th rowSpan={2} className={styles.playerSide}>
                                    <span>Player A</span>
                                </th>
                                <th className={styles.actionSide}>Stake</th>
                                <td className={`${styles.cell} ${styles.optimal}`}>
                                    <span className={styles.result}>(3, 3)</span>
                                    <span className={styles.outcome}>Both win</span>
                                </td>
                                <td className={styles.cell}>
                                    <span className={styles.result}>(1, -1)</span>
                                    <span className={styles.outcome}>A loses</span>
                                </td>
                            </tr>
                            <tr>
                                <th className={styles.actionSide}>Sell</th>
                                <td className={styles.cell}>
                                    <span className={styles.result}>(-1, 1)</span>
                                    <span className={styles.outcome}>B loses</span>
                                </td>
                                <td className={`${styles.cell} ${styles.suboptimal}`}>
                                    <span className={styles.result}>(-3, -3)</span>
                                    <span className={styles.outcome}>Both lose</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={styles.explanation}>
                    <div className={styles.explanationCard}>
                        <h4>Why (3,3) is Stronger on Bitcoin</h4>
                        <ul className={styles.reasons}>
                            <li>
                                <strong>10-minute blocks</strong> — Selling takes time, giving
                                stakers an advantage
                            </li>
                            <li>
                                <strong>True 5-day vesting</strong> — No bridges or L2s to escape
                                early
                            </li>
                            <li>
                                <strong>Exit friction</strong> — Defection is slow and visible
                            </li>
                            <li>
                                <strong>OPNet finality</strong> — State changes are permanent and
                                verifiable
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GameTheory;
