const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C', level: 80 },
      { name: 'C++', level: 75 },
      { name: 'Java', level: 80 },
      { name: 'PHP', level: 70 },
      { name: 'Assembly', level: 35 },
    ],
  },
  {
    title: 'Web & Frameworks',
    skills: [
      { name: 'HTML/CSS', level: 85 },
      { name: 'React', level: 70 },
      { name: 'Spring', level: 65 },
      { name: 'Laravel', level: 60 },
      { name: 'Swing', level: 65 },
      { name: 'SFML', level: 60 },
    ],
  },
  {
    title: 'Databases & Concepts',
    skills: [
      { name: 'SQL', level: 75 },
      { name: 'Data Structures (C)', level: 80 },
      { name: 'Algorithms', level: 75 },
    ],
  },
  {
    title: 'Systems & Network Administration',
    skills: [
      { name: 'Administration des systèmes', level: 65 },
      { name: 'Administration des réseaux', level: 60 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-grid">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="skill-category">
            <h3 className="skill-category-title">{cat.title}</h3>
            <div className="skill-list">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
