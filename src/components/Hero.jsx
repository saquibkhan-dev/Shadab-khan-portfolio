import { MapPin, Mail, Briefcase } from 'lucide-react';
import useReveal from '../hooks/useReveal.js';
import useCountUp from '../hooks/useCountUp.js';
import { profile, heroKpis } from '../data.js';

function Kpi({ count, suffix, label }) {
  const [ref, value] = useCountUp(count);
  return (
    <div className="kpi" ref={ref}>
      <div className="kpi-num">
        <span className="counted">{value}</span>{suffix}
      </div>
      <div className="kpi-label">{label}</div>
    </div>
  );
}

export default function Hero() {
  const kpiRef = useReveal();

  return (
    <section id="hero">
      <div className="hero-grid">
        <div className="hero-top">
          <p className="eyebrow">Finance &amp; Accounting — Record to Report</p>
          <p className="hero-loc"><MapPin size={14} /> {profile.location}</p>
        </div>

        <div className="hero-main">
          <div>
            <h1 className="hero-name">Shadab Ali<br />Khan</h1>
            <p className="hero-role">{profile.role}</p>
            <div className="hero-actions">
              <a href="#contact" className="btn-solid"><Mail size={16} /> Get in touch</a>
              <a href="#experience" className="btn-line"><Briefcase size={16} /> View experience</a>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <img
              className="hero-photo"
              src="/profile-photo.png"
              alt={`Portrait of ${profile.name}`}
              width="200"
              height="200"
            />
            <span className="hero-photo-tag">R2R Manager</span>
          </div>
        </div>

        <div className="kpi-strip reveal" ref={kpiRef}>
          {heroKpis.map((k) => (
            <Kpi key={k.label} count={k.count} suffix={k.suffix} label={k.label} />
          ))}
        </div>
        <p className="hero-note">
          Figures above are drawn directly from the employment history in this resume — tenure,
          role progression, and named systems. No performance metrics have been invented.
        </p>
      </div>
    </section>
  );
}
