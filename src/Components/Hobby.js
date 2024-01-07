import './css/Hobby.css'
import React from 'react'
import hobbyImage from './Images/hobby-section-pic.jpg'

function Hobby() {
  return (
    <>
        <div className="hobby-section">
            <p>Hobby</p>
            <div className="hobby-main">
                <div className="hobby-img">
                    <img src={hobbyImage} alt="" />
                </div>
                <div className="hobby-desc">
                    <p>Photography</p>
                    <p>As a hobby.</p>
                    <div className="hobby-btn">
                        <a href="#link"><button>Visit Instagram</button></a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hobby