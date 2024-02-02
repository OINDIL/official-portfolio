import './css/Hobby.css'
import React from 'react'
import hobbyImage from './Images/hobby-pic.png'

function Hobby() {
  return (
    <>
        <div className="hobby-section" id='hobby'>
            <div className="hobby-main">
                <div className="hobby-img">
                    <img src={hobbyImage} alt="" />
                </div>
                <div className="hobby-desc">
                    <p>Photography</p>
                    <p>As a hobby.</p>
                    <div className="hobby-btn">
                        <a href="https://www.instagram.com/oindil.golder/" target='_blank' rel='noreferrer'><button>Visit Instagram</button></a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hobby