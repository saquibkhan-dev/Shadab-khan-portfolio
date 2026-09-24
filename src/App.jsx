import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Expertise from './components/Expertise.jsx';
import Approach from './components/Approach.jsx';
import Dashboard from './components/Dashboard.jsx';
import Credentials from './components/Credentials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { ScrollProgress, BackToTop, CursorBeam } from './components/Chrome.jsx';

export default function App() {
  const [theme, setTheme] = useState(null); // null = follow system preference

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollProgress />
      <CursorBeam />

      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main id="main">
        <Hero />
        <About />
        <hr className="rule" style={{ maxWidth: 1180, margin: '0 auto' }} />
        <Experience />
        <Expertise />
        <hr className="rule" style={{ maxWidth: 1180, margin: '0 auto' }} />
        <Approach />
        <Dashboard />
        <Credentials />
        <hr className="rule" style={{ maxWidth: 1180, margin: '0 auto' }} />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
