import textDev from './Images/text-og.png'
import weatheroindil from './Images/weatherapp-sc.png'
import React from 'react'
import ProjectsRender from './Projects Component/ProjectsRender'
import './css/Projects.css'

function Projects() {
    const projects = [
        { name: 'Text.dev', quote: 'Generate Passwords. Check Password Strength.', link: 'https://oindil.github.io/textog/',images:textDev },
        { name: 'Weather App', quote: 'Accurate Weather. At Your Fingertips.', link: 'https://weatheroindil.netlify.app/',images:weatheroindil}
    ]
    return (
        <>
            <div className="projects-heading" id='projects'>
                <p>Projects</p>
            </div>
            <div className="projects-container">
                {projects.map((item) => {
                    return (
                        <div className='projects-section' key={item.link}>
                                <ProjectsRender data={item}/>
                        </div>
                    )
                })}
            </div>
                <div className="outro-projects">
                    <p>More projects coming soon... Until then take a look at my <a href="https://github.com/OINDIL" target='_blank' rel='noreferrer'>Github</a> profile</p>
                </div>
        </>
    )
}

export default Projects