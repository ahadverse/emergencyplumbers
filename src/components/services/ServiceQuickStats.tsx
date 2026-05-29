import type { StatItem } from '@/types';

export default function ServiceQuickStats({ stats }: { stats: StatItem[] }) {
  return (
    <div className="quick-stats">
      <div className="quick-stats-inner">
        {stats.map(({ num, label }) => (
          <div key={label} className="qs-item">
            <div className="qs-num">{num}</div>
            <div className="qs-label">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
