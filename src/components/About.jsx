import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate developer with 3+ years of experience building web applications.
              I love creating intuitive user interfaces and writing clean, maintainable code.
            </p>
            <p>
              My journey in tech started with a curiosity about how things work, which led me to
              pursue software development. I'm constantly learning new technologies and best practices
              to deliver better solutions.
            </p>
            <p>
              When I'm not coding, I enjoy contributing to watching tech blogs and exploring new frameworks.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
