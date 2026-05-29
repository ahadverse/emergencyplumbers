import { HOME_STATS } from '@/lib/constants';

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-inner">
        {HOME_STATS.map(({ num, label }) => (
          <div key={label} className="stat-item">
            <div className="stat-num">{num}</div>
            <div className="stat-label">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
