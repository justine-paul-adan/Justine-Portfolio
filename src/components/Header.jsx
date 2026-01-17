import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [activeLink, setActiveLink] = useState('home')

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

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Justine</div>
        <ul className="nav-links">
          <li><a href="#home" className={activeLink === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#about" className={activeLink === 'about' ? 'active' : ''}>About</a></li>
          <li><a href="#skills" className={activeLink === 'skills' ? 'active' : ''}>Skills</a></li>
          <li><a href="#projects" className={activeLink === 'projects' ? 'active' : ''}>Projects</a></li>
          <li><a href="#contact" className={activeLink === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
