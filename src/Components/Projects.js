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
                            <p>Generate Passwords. Manipulate Texts.</p>
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
                            <p>WeatherApp</p>
                            <p>Accurate Weather. At your fingertips.</p>
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