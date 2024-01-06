import React from 'react'
import './css/Navbar.css'
function Navbar() {
  return (
    <>
        <nav>
            <div className="logo">
                <p>OG.</p>
            </div>
            <div className="links">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar