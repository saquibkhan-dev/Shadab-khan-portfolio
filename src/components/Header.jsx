import { useState } from 'react';
import { Moon, Sun, Download, Menu, X } from 'lucide-react';
import { profile } from '../data.js';

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#dashboard', label: 'Career Data' },
  { href: '#credentials', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
];

export default function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="nav-inner">
        <a href="#hero" className="brand" aria-label={`${profile.name}, home`}>
          <span className="brand-mark">{profile.initials}</span>
          <span>{profile.name}</span>
        </a>
        <nav className="links" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="icon-btn"
            aria-label="Toggle dark mode"
            aria-pressed={theme === 'dark'}
            onClick={onToggleTheme}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a className="btn-line" href={`mailto:${profile.email}`}>
            <Download size={16} /> <span>Resume</span>
          </a>
          <button
            id="mobile-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <div id="mobile-menu" className={menuOpen ? 'open' : ''}>
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
