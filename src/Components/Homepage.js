import './css/Homepage.css'
import React from 'react'
import myImage from './Images/IMG20231230113813-removebg.png'
function Homepage() {
  return (
    <>
        <section>
            <main>
                <div className="intro-text">
                    <p>MERN stack developer. For creating websites from scratch.</p>
                    <p>Hi, I'm Oindil Golder. An aspiring MERN stack developer from Kolkata, India.</p>
                    <button>Hire Me</button>
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