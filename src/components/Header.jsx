import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [activeLink, setActiveLink] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      
      for (let section of sections) {
        const element = document.querySelector(`#${section}`)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Justine</div>
        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" className={activeLink === 'home' ? 'active' : ''} onClick={handleLinkClick}>Home</a></li>
          <li><a href="#about" className={activeLink === 'about' ? 'active' : ''} onClick={handleLinkClick}>About</a></li>
          <li><a href="#skills" className={activeLink === 'skills' ? 'active' : ''} onClick={handleLinkClick}>Skills</a></li>
          <li><a href="#projects" className={activeLink === 'projects' ? 'active' : ''} onClick={handleLinkClick}>Projects</a></li>
          <li><a href="#contact" className={activeLink === 'contact' ? 'active' : ''} onClick={handleLinkClick}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
