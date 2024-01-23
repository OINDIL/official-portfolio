import React,{ useState } from 'react'
import './css/Navbar.css'
function Navbar() {
    const [active, setActive] = useState('home')

    const handleClick = (link) =>{
        setActive(link)
    }
  return (
    <>
        <nav>
            <div className="logo">
                <a href="#home"><p>OG.</p></a>
            </div>
            <div className="links">
                <ul>
                    <li><a className={active === 'home' ? 'active' : ''} href="#home" onClick={()=>handleClick('home')}>Home</a></li>
                    <li><a className={active === 'about' ? 'active' : ''} href="#about" onClick={()=>handleClick('about')}>About</a></li>
                    <li><a className={active === 'projects' ? 'active' : ''} href="#projects" onClick={()=>handleClick('projects')}>Projects</a></li>
                    <li><a className={active === 'contact' ? 'active' : ''} href="#contact" onClick={()=>handleClick('contact')}>Contact</a></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar