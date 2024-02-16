import textDev from './Images/text-og.png'
import weatheroindil from './Images/weatherapp-sc.png'
import React from 'react'

function Projects_2() {
    const projects = [
        { name: 'Text.dev', quote: 'Generate Passwords. Check Password Strength.', link: 'https://oindil.github.io/textog/',images:textDev },
        { name: 'Weather App', quote: 'Accurate Weather. At Your Fingertips.', link: 'https://weatheroindil.netlify.app/',images:weatheroindil}
    ]
    return (
        <>
            <div className="projects-container">
                {projects.map((item) => {
                    return (
                        <div className='projects-section' key={item.link}>
                                
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Projects_2