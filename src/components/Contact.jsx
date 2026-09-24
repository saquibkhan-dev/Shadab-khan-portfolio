import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import useReveal from '../hooks/useReveal.js';
import { profile } from '../data.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const headRef = useReveal();
  const gridRef = useReveal();

  const [form, setForm] = useState({ name: '', email: '', message: '', company: '' });
  const [status, setStatus] = useState({ state: null, text: '' });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.company) return; // honeypot — silently drop likely bots

    if (!form.name.trim() || !EMAIL_RE.test(form.email.trim()) || !form.message.trim()) {
      setStatus({ state: 'err', text: 'Please fill in your name, a valid email, and a message.' });
      return;
    }
    setStatus({
      state: 'ok',
      text: `Thanks — for now, please email ${profile.email} directly; this form isn't yet connected to an inbox.`,
    });
    setForm({ name: '', email: '', message: '', company: '' });
  }

  return (
    <section id="contact">
      <div className="section-head reveal" ref={headRef}>
        <p className="eyebrow">07 — Contact</p>
        <h2>Let's talk about the close.</h2>
      </div>
      <div className="contact-grid reveal" ref={gridRef}>
        <div className="contact-list">
          <a href={`mailto:${profile.email}`}><Mail /> {profile.email}</a>
          <a href={`tel:${profile.phoneHref}`}><Phone /> {profile.phone}</a>
          <a href="#" onClick={(e) => e.preventDefault()} aria-disabled="true">
            <MapPin /> {profile.location}, 201013
          </a>
        </div>
        <form id="cform" noValidate onSubmit={handleSubmit}>
          <div>
            <label htmlFor="cname">Name</label>
            <input
              id="cname" name="name" type="text" required autoComplete="name" maxLength={120}
              value={form.name} onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="cemail">Email</label>
            <input
              id="cemail" name="email" type="email" required autoComplete="email" maxLength={180}
              value={form.email} onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="cmsg">Message</label>
            <textarea
              id="cmsg" name="message" rows={4} required maxLength={2000}
              value={form.message} onChange={handleChange}
            />
          </div>
          {/* honeypot field — hidden from real users, catches naive bots */}
          <input
            type="text" name="company" id="hp-field" autoComplete="off" tabIndex={-1}
            style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true"
            value={form.company} onChange={handleChange}
          />
          <button type="submit" className="btn-solid" style={{ alignSelf: 'flex-start' }}>
            <Send size={16} /> Send message
          </button>
          <p className="form-status" role="status" aria-live="polite" data-state={status.state || undefined}>
            {status.text}
          </p>
        </form>
      </div>
    </section>
  );
}
