export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a Software Engineering student at Université Cadi Ayyad - FSSM Marrakech,
            passionate about programming, systems administration, and building efficient
            software solutions.
          </p>
          <p>
            I work with languages like C, C++, Java, PHP, and Assembly, and I'm experienced
            with frameworks such as React, Spring, and Laravel. I also have knowledge in
            SQL, data structures, algorithms, and system/network administration.
          </p>
          <p>
            I'm currently looking for my first professional opportunity to apply my skills,
            contribute to real-world projects, and keep growing as a developer.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat">
            <span className="stat-number">5+</span>
            <span className="stat-label">Languages</span>
          </div>
          <div className="stat">
            <span className="stat-number">3</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-number">Bac+3</span>
            <span className="stat-label">Education</span>
          </div>
        </div>
      </div>
    </section>
  );
}
