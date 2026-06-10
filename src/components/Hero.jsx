export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-name">Mohamed AZEROUAL</h1>
        <h2 className="hero-title">Software Engineer</h2>
        <p className="hero-desc">
          Passionate about software development, systems administration, and building
          efficient, scalable solutions.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
