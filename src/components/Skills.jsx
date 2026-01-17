import './Skills.css'

function Skills() {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'CSS', 'HTML'] },
    { category: 'Backend', items: ['ADO.Net', 'C#', 'Python', 'SQL', 'MySQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Azure'] },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <h3>{skillGroup.category}</h3>
              <ul>
                {skillGroup.items.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
