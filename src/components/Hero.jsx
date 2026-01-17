import './Hero.css'
import profileImage from '../assets/images/profile.JPG'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Hi, I'm Justine</h1>
          <p className="tagline">Associate Software Engineer | Web Developer</p>
          <p className="description">
            I design and build scalable software solutions that solve real-world problems.
          </p>
          <a className="cta-button" href="mailto:justine.paul.adan@gmail.com">Get In Touch</a>
        </div>
        <div className="hero-image">
          <img src={profileImage} alt="Justine Paul Adan" className="profile-img" />
        </div>
      </div>
    </section>
  )
}

export default Hero
