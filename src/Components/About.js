import "./css/About.css";
import React from "react";
import myImage_2 from "./Images/About-Image.jpg"
import myCV from './Files/OINDIL_GOLDER_CV.pdf'
function About() {
    return (
        <>
            <div className="about-section" id="about">
                <div className="intro-about">
                    <p>Know About Me</p>
                </div>
                <div className="about-container">
                    <div className="about-image">
                        <img src={myImage_2} alt="" />
                    </div>
                    <div className="about-tech-stack">
                        <p>My Tech Stack</p>
                        <p>Welcome to my tech stack. I am a passionate web developer. My tech stack contains languages like <b>HTML, CSS , JavaScript</b>. I am very fluent with JavaScript library like <b>React JS</b>. Currently I'm working with projects that can improve my fluency in these languages. I am also familiar with <b>MongoDB , Express JS and Node JS</b>. Version control systems like <b>Git and Github</b> is well known to me. I used <b>C language</b> for problem solving but now <b>JAVA</b> is my center of attraction. 
                        </p>
                        <div className="skill-icons">
                            <i className="bx bxl-html5"></i>
                            <i className="bx bxl-css3"></i>
                            <i className="bx bxl-javascript"></i>
                            <i className="bx bxl-react"></i>
                            <i className="bx bxl-mongodb"></i>
                            <i className="bx bxl-java"></i>
                            <i className="bx bxl-nodejs"></i>
                            <i className="bx bxl-git"></i>
                        </div>
                        <div className="button">
                            <a href={myCV}><button>Download CV</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
