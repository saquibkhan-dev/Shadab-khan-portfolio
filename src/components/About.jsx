import { Languages, Heart, GraduationCap } from 'lucide-react';
import useReveal from '../hooks/useReveal.js';

export default function About() {
  const headRef = useReveal();
  const bodyRef = useReveal();

  return (
    <section id="about">
      <div className="section-head reveal" ref={headRef}>
        <p className="eyebrow">01 — Profile</p>
        <h2>Close-cycle discipline, applied across systems and teams.</h2>
      </div>
      <div className="about-grid reveal" ref={bodyRef}>
        <div>
          <p className="pull serif">
            "Accuracy in the ledger is what lets everyone else trust the number above it."
          </p>
          <div className="about-meta">
            <div><Languages size={16} /> English, Hindi</div>
            <div><Heart size={16} /> Cricket, and learning new tools for the close</div>
            <div><GraduationCap size={16} /> MBA, Finance — Lovely Professional University</div>
          </div>
        </div>
        <div>
          <p>
            Shadab is a Finance and Accounting professional with deep expertise in Record to Report
            (R2R) — General Accounting, Treasury, financial close, reconciliations, ledger
            management, and cash flow oversight — with working knowledge of Procure to Pay and
            Order to Cash.
          </p>
          <p>
            He handles CFIN reconciliation and Central Finance data validation, and runs OneStream
            quarterly submissions, consolidation checks, and variance commentary that support
            group-level financial reporting. He leads and mentors R2R teams, builds SOPs and
            SLA/KPI dashboards, and works cross-functionally to shorten close cycles without
            loosening controls.
          </p>
          <p>
            Across Apogee Services, Accenture, and now Genpact, the throughline is the same: keep
            the entity close accurate, keep the audit trail clean, and keep the team capable of
            doing it without him in the room.
          </p>
        </div>
      </div>
    </section>
  );
}
