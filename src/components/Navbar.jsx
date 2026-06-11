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

const taglines = [
  "If you're reading this, welcome to the chaos.",
  "Tiny icon, big personality.",
  "This little guy approves your visit.",
  "Turning coffee into code ☕",
  "Building stuff… occasionally breaking it.",
  "I debug faster than I panic.",
  "Yes, this portfolio is responsive. Unlike me sometimes.",
  "Code. Sleep. Repeat. (Mostly code.)",
  "Still loading my life choices…",
  "Bug-free? Bold assumption.",
  "Professional button clicker.",
  "Ctrl+Z doesn't work in life.",
  "Powered by coffee & confusion.",
  "I promise the bugs are features.",
  "404: Social life not found.",
  "Currently pretending I know what I'm doing.",
  "Made with code, chaos, and caffeine.",
  "Hi there, snooper.",
  "This means nothing. Enjoy.",
  "Okay fine, you win.",
  "Just vibing here.",
  "404: purpose not found.",
  "You clicked it. Respect.",
  "Nice find!",
  "Still here? Wow.",
  "This is my favorite pixel.",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const [tagline, setTagline] = useState(
    () => taglines[Math.floor(Math.random() * taglines.length)]
  );

  const handleBrandClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    if (Math.random() < 0.6) {
      let next;
      do {
        next = taglines[Math.floor(Math.random() * taglines.length)];
      } while (next === tagline);
      setTagline(next);
    }
  };

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
      <div className="nav-brand" onClick={() => handleBrandClick('hero')}>
        <img src="/image.png" alt="MA" className="nav-logo" />
          <span className="nav-tagline">{tagline}</span>
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
