import { profile } from '../data.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-inner">
        <span>© {year} {profile.name}. All rights reserved.</span>
        <nav aria-label="Footer">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={`tel:${profile.phoneHref}`}>Call</a>
          <a href="#hero">Back to top</a>
        </nav>
      </div>
    </footer>
  );
}
