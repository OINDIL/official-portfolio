import './css/Homepage.css'
import React from 'react'
import myImage from './Images/my-image.jpg'
function Homepage() {
  return (
    <>
        <section id='home'>
            <main>
                <div className="intro-text">
                    <p>MERN stack developer. For creating websites from scratch.</p>
                    <p><span id='emoji-span'>👋</span>, I'm <span className='name-span'>Oindil Golder</span>. An aspiring MERN stack developer from Kolkata, India.</p>
                    <a href="#contact"><button>Hire Me</button></a>
                </div>
                <div className="image">
                    <img src={myImage} alt="" />
                </div>
            </main>
        </section>
    </>
  )
}

export default Homepage