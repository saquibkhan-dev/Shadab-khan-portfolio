import { ClipboardCheck, GitBranch, Users, Shield } from 'lucide-react';
import useReveal from '../hooks/useReveal.js';
import { approach } from '../data.js';

const ICONS = { ClipboardCheck, GitBranch, Users, Shield };

export default function Approach() {
  const headRef = useReveal();
  const gridRef = useReveal();

  return (
    <section id="approach">
      <div className="section-head reveal" ref={headRef}>
        <p className="eyebrow">04 — Approach</p>
        <h2>How the close actually gets done</h2>
      </div>
      <div className="approach-grid reveal" ref={gridRef}>
        {approach.map((a) => {
          const Icon = ICONS[a.icon];
          return (
            <div className="approach-card" key={a.title}>
              <Icon size={26} />
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
