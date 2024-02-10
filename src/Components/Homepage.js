import './css/Homepage.css'
import React from 'react'
import myImage from './Images/my-image-2.jpg'
function Homepage() {
  return (
    <>
        <section id='home'>
            <main>
                <div className="intro-text">
                    <h1>MERN Stack Developer. For creating websites from scratch.</h1>
                    <p><span id='emoji-span'>👋</span>, I'm <span className='name-span'>Oindil Golder</span>. An aspiring MERN stack developer from Kolkata, India.</p>
                    <a href="#contact"><button>Contact Me</button></a>
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