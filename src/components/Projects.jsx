import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with React, Node.js, and MongoDB.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A real-time task management tool with drag-and-drop functionality.',
      technologies: ['React', 'Firebase', 'CSS'],
      link: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather app that displays current conditions and forecasts.',
      technologies: ['React', 'API Integration', 'Chart.js'],
      link: '#'
    },
    {
      id: 4,
      title: 'Social Media Platform',
      description: 'A social media application with user authentication and messaging.',
      technologies: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
      link: '#'
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
