import './css/Projects.css'
import React from 'react'
import passwordgen from './Images/text-og.png'
import weatherapp from './Images/weatherapp-sc.png'
function Projects() {
    return (
        <>
            <div className='projects-section' id='projects'>
                <p>Projects</p>
                <div className='projects-main'>
                    <div className="project-1">
                        <div className="project-img">
                            <img src={passwordgen} alt="password-generator" />
                        </div>
                        <div className="project-desc">
                            <p>Text.dev</p>
                            <p>Generate Passwords. Check Password Strength.</p>
                        </div>
                        <div className="project-btn">
                            <a href="https://oindil.github.io/textog/" target='_blank' rel="noreferrer"><button>Take a look</button></a>
                        </div>
                    </div>


                    <div className="project-2">
                        <div className="project-img">
                            <img src={weatherapp} alt="weather-app" />
                        </div>
                        <div className="project-desc">
                            <p>Weather App</p>
                            <p>Accurate Weather. At Your Fingertips.</p>
                        </div>
                        <div className="project-btn">
                            <a href="https://weatheroindil.netlify.app/" target='_blank' rel="noreferrer"><button>Take a look</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects