const education = [
  {
    degree: 'Bachelor in Computer Systems Engineering',
    school: 'Université Cadi Ayyad - FSSM Marrakech',
    period: '2023 - 2026',
    desc: 'Training in software engineering, databases, networks, and web development.',
  },
  {
    degree: 'Baccalaureate in Physical Sciences',
    school: 'High School',
    period: '2023',
    desc: 'Physical sciences ',
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {education.map((edu, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-dot" />
            <div className={`timeline-content ${i % 2 === 0 ? 'left' : 'right'}`}>
              <span className="timeline-period">{edu.period}</span>
              <h3 className="timeline-role">{edu.degree}</h3>
              <h4 className="timeline-company">{edu.school}</h4>
              <p className="timeline-desc">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
