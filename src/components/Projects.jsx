const projects = [
  {
    title: 'Countries_Unsupervised-Learning',
    description:
      'Unsupervised learning project analyzing country data using clustering techniques to discover patterns and groupings.',
    tags: ['Python', 'Machine Learning', 'Unsupervised Learning', 'Clustering'],
    links: { github: 'https://github.com/voidMed/Countries_Unsupervised-Learning.git' },
  },
  {
    title: 'Mini-Student-Management-Project-Java-Swing-MySQL',
    description:
      'A student management system built with Java Swing and MySQL, featuring CRUD operations for student records.',
    tags: ['Java', 'Swing', 'MySQL', 'Desktop App'],
    links: { github: 'https://github.com/voidMed/Mini-Student-Management-Project-Java-Swing-MySQL-.git' },
  },
  {
    title: 'tp-cicd-actions',
    description:
      'CI/CD pipeline project using GitHub Actions to automate testing, building, and deployment workflows.',
    tags: ['CI/CD', 'GitHub Actions', 'DevOps', 'Automation'],
    links: { github: 'https://github.com/voidMed/tp-cicd-actions.git' },
  },
  {
    title: 'Portfolio Website',
    description:
      'A modern, responsive portfolio built with React and Vite, featuring smooth animations and a clean design.',
    tags: ['React', 'Vite', 'CSS', 'Vercel'],
    links: { github: 'https://github.com/voidMed' },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <div className="project-card-header">
              <svg className="project-folder" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
              </svg>
              <div className="project-links">
                <a href={project.links.github} aria-label="GitHub" target="_blank" rel="noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                </a>
              </div>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
