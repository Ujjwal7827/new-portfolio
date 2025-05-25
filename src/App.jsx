import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skill from './Components/skill'
import Project from './Components/Project'
import Footer from './Components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false
    })
  }, [])

  return (
    <div className='bg-[#171d32] min-h-screen w-full overflow-x-hidden'>
      
      <Navbar/>
      <Home/>
      <About />
      <Skill />
      <Project/>
      <Footer />

    </div>
  )
}

export default App
