import React from 'react'
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import About from './Components/About'
// import Projects from './Components/Projects'
import Hobby from './Components/Hobby'
import Contact from './Components/Contact'
import Projects from './Components/Projects'

function App() {
  return (
    <>
      <Navbar/>
      <Homepage/>
      <About/>
      {/* <Projects/> */}
      <Projects/>
      <Hobby/>
      <Contact/>
    </>
  )
}

export default App
