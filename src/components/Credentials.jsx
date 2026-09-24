import { Award, Medal, Handshake } from 'lucide-react';
import useReveal from '../hooks/useReveal.js';
import { education, awards } from '../data.js';

const ICONS = { Award, Medal, Handshake };

export default function Credentials() {
  const headRef = useReveal();
  const tableRef = useReveal();
  const stampsRef = useReveal();

  return (
    <section id="credentials">
      <div className="section-head reveal" ref={headRef}>
        <p className="eyebrow">06 — Credentials</p>
        <h2>Education &amp; certifications</h2>
      </div>
      <table className="ledger-table reveal" ref={tableRef}>
        <thead>
          <tr><th>Type</th><th>Program</th><th>Institution</th></tr>
        </thead>
        <tbody>
          {education.map((row) => (
            <tr key={row.program}>
              <td>{row.type}</td>
              <td>{row.program}</td>
              <td>{row.institution}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="stamps reveal" ref={stampsRef}>
        {awards.map((a) => {
          const Icon = ICONS[a.icon];
          return (
            <div className="stamp" key={a.title}>
              <Icon size={24} />
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
