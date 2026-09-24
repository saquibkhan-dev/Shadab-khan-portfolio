import { useEffect, useRef } from 'react';
import { Repeat, Server, ShieldCheck, Check } from 'lucide-react';
import useReveal from '../hooks/useReveal.js';
import { skillMatrix, systemsChips } from '../data.js';

const ICONS = { Repeat, Server, ShieldCheck };

function SkillBar({ name, level }) {
  const fillRef = useRef(null);

  useEffect(() => {
    const el = fillRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.width = `${level}%`;
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [level]);

  return (
    <div className="skill-item">
      {name}
      <div className="bar-track">
        <div className="bar-fill" ref={fillRef} style={{ width: 0 }} />
      </div>
    </div>
  );
}

export default function Expertise() {
  const headRef = useReveal();
  const matrixRef = useReveal();
  const chipsRef = useReveal();

  return (
    <section id="expertise">
      <div className="section-head reveal" ref={headRef}>
        <p className="eyebrow">03 — Expertise</p>
        <h2>Skills matrix</h2>
      </div>
      <div className="matrix reveal" ref={matrixRef}>
        {skillMatrix.map((col) => {
          const Icon = ICONS[col.icon];
          return (
            <div className="matrix-col" key={col.title}>
              <h3><Icon /> {col.title}</h3>
              {col.skills.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          );
        })}
      </div>
      <div className="systems-strip reveal" ref={chipsRef}>
        {systemsChips.map((c) => (
          <div className="chip" key={c}><Check /> {c}</div>
        ))}
      </div>
    </section>
  );
}
