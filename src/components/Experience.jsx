import { useState } from 'react';
import useReveal from '../hooks/useReveal.js';
import { experience } from '../data.js';

function ExperienceRow({ item }) {
  const [expanded, setExpanded] = useState(false);
  const rowRef = useReveal();

  return (
    <div className="ledger-row reveal" ref={rowRef}>
      <div className="ledger-dates">{item.dates}</div>
      <div>
        <div className="role-line">
          <span className="role-title">{item.title}</span>
          <span className="role-org">{item.org}</span>
        </div>
        <ul className={`role-bullets${expanded ? '' : ' collapsed'}`}>
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        {item.bullets.length > 4 && (
          <button className="toggle-more" onClick={() => setExpanded((v) => !v)}>
            {expanded ? 'Show fewer' : `Show all ${item.bullets.length} responsibilities`}
          </button>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  const headRef = useReveal();

  return (
    <section id="experience">
      <div className="section-head reveal" ref={headRef}>
        <p className="eyebrow">02 — Career</p>
        <h2>Professional experience</h2>
      </div>
      {experience.map((item) => (
        <ExperienceRow key={item.org} item={item} />
      ))}
    </section>
  );
}
