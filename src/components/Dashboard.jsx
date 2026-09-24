import useReveal from '../hooks/useReveal.js';
import useCountUp from '../hooks/useCountUp.js';
import { dashboardStats, tenureBars } from '../data.js';

function StatCard({ label, count, suffix }) {
  const [ref, value] = useCountUp(count);
  return (
    <div className="dash-card" ref={ref}>
      <div className="label">{label}</div>
      <div className="val"><span className="counted">{value}</span>{suffix}</div>
    </div>
  );
}

export default function Dashboard() {
  const headRef = useReveal();
  const gridRef = useReveal();
  const chartRef = useReveal();

  return (
    <section id="dashboard">
      <div className="section-head reveal" ref={headRef}>
        <p className="eyebrow">05 — Career Data</p>
        <h2>Tenure &amp; scope, at a glance</h2>
      </div>
      <div className="dash-grid reveal" ref={gridRef}>
        {dashboardStats.map((s) => (
          <StatCard key={s.label} label={s.label} count={s.count} suffix={s.suffix} />
        ))}
      </div>
      <div className="chart-wrap reveal" ref={chartRef}>
        <div>
          <p className="label" style={{ fontSize: '.8rem', opacity: 0.8, marginBottom: 10 }}>
            Tenure by employer (years)
          </p>
          <div className="bars">
            {tenureBars.map((b) => (
              <div className="bar" key={b.label} style={{ height: `${b.heightPct}%` }}>
                <span>{b.label}<br />{b.years}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="dash-note">
          This panel reflects tenure and scope taken directly from the resume's employment dates
          and stated responsibilities — it is a summary view, not a claimed financial-performance
          metric.
        </p>
      </div>
    </section>
  );
}
