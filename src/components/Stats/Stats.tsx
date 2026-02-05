import { useScrollAnimation, useCountUp } from '../../hooks/useScrollAnimation';
import styles from './Stats.module.css';

interface StatItemProps {
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
    isVisible: boolean;
}

const StatItem = ({ value, suffix = '', prefix = '', label, isVisible }: StatItemProps) => {
    const count = useCountUp(value, 2000, isVisible);

    return (
        <div className={styles.stat}>
            <span className={styles.statValue}>
                {prefix}
                {count.toLocaleString()}
                {suffix}
            </span>
            <span className={styles.statLabel}>{label}</span>
        </div>
    );
};

const Stats = () => {
    const [ref, isVisible] = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });

    const stats = [
        { value: 24, suffix: 'M+', prefix: '$', label: 'Target TVL' },
        { value: 1247, suffix: '%', label: 'Staking APY' },
        { value: 144, label: 'Blocks Per Epoch' },
        { value: 7, label: 'Multisig Signers' },
    ];

    return (
        <section className={styles.stats} ref={ref}>
            <div className={styles.container}>
                {stats.map((stat) => (
                    <StatItem
                        key={stat.label}
                        value={stat.value}
                        suffix={stat.suffix}
                        prefix={stat.prefix}
                        label={stat.label}
                        isVisible={isVisible}
                    />
                ))}
            </div>
        </section>
    );
};

export default Stats;
