import React from 'react'
import './CSS/ProjectsRender.css'
function ProjectsRender(props) {
  const { name, quote, link, images } = props.data
  return (
    <>
      <div className="projects-render-container">
        <div className="projects-image">
          <img src={images} alt="" />
        </div>
        <div className="name-quote">
          <h4>{name}</h4>
          <h2>{quote}</h2>
        </div>
        <div className="btn-link">
          <a href={link} target='_blank' rel="noreferrer"><button type="button">Take a look</button></a>
        </div>
      </div>
    </>
  )
}

export default ProjectsRender