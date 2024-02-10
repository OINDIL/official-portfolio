import './css/Homepage.css'
import React , {useRef,useLayoutEffect} from 'react'
import gsap from 'gsap'

import myImage from './Images/my-image-2.jpg'
function Homepage() {
    const comp = useRef(null)

    useLayoutEffect(()=>{
        const cntxt = gsap.context(()=>{
            const t1 = gsap.timeline()
            t1.from('#title-1',{
                opacity:0,
                duration:2,
                // delay:0.3,
            }).from('#title-2',{
                opacity:0,
                duration:2
            }).from('#title-3',{
                opacity:0,
                duration:2,
            })
        },comp)

        return () => cntxt.revert()
    },[])
  return (
    <>
        <section id='home'>
            <main>
                <div className="intro-text" ref={comp}>
                    <h1 id='title-1'>MERN Stack Developer. For creating websites from scratch.</h1>
                    <p id='title-2'><span id='emoji-span'>👋</span>, I'm <span className='name-span'>Oindil Golder</span>. An aspiring MERN stack developer from Kolkata, India.</p>
                    <a href="#contact" id='title-3'><button>Contact Me</button></a>
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