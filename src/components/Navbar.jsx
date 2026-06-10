import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const current = sections
        .map((s) => {
          const el = document.getElementById(s.id);
          if (!el) return { id: s.id, top: 0 };
          const rect = el.getBoundingClientRect();
          return { id: s.id, top: Math.abs(rect.top) };
        })
        .reduce((a, b) => (a.top < b.top ? a : b)).id;
      setActive(current);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand" onClick={() => handleClick('hero')}>
        MA
      </div>
      <div className={`nav-toggle ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={active === s.id ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); handleClick(s.id); }}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
