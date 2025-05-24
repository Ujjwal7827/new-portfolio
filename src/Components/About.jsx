import React from 'react'
import { FaArrowRight } from "react-icons/fa"
import picture from "../assets/picture.jpg"

const About = () => {
  return (
    <div 
      id='About' 
      className='bg-[#0d0d30] text-white  md:flex overflow-hidden md:flex-wrap md:justify-center shadow-2xl md:mx-20
      bg-opacity-30 mt-25 rounded-lg  h-160  p-14 sm:px-6 md:px-10 lg:px-20 py-8 md:py-12 '> 
    
      <div className='max-w-6xl w-full'>
        <div className='text-center mt-8 mb-8'>
          <h2 className='text-3xl md:text-4xl font-bold'>ABOUT</h2>
          <span className='text-2xl md:text-4xl font-bold opacity-40'>MY-SELF</span>
        </div>

        <div className='flex flex-col  md:flex-row items-center gap-8 md:gap-12'>
          <div className='w-full md:w-1/3 flex mt-5 justify-center'data-aos="fade-Right"
                    data-aos-duration="2000">
            <img 
              className='w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-full border-2 border-purple-500'
              src={picture} 
              alt="Profile" 
            />
          </div>
          <div className='w-full md:w-2/3'>
            <ul className='space-y-4 sm:space-y-6'>
            
              <div className='flex gap-3 sm:gap-4 items-start'data-aos="fade-Right"
                    data-aos-duration="2000">
                <FaArrowRight className='mt-8 text-sm sm:text-base' />
                <div>
                  <h3 className='text-lg sm:text-xl md:text-2xl font-semibold mt-5 border-b-2 pb-1 sm:pb-2'data-aos="fade-left"
                    data-aos-duration="2000">Higher Education</h3>
                  <p className='text-xs sm:text-sm md:text-base mt-1 sm:mt-2'data-aos="fade-left"
                    data-aos-duration="2000">
                    Completed 10th with Haryana board and 12th with Uttar Pradesh board
                  </p>
                </div>
              </div>

            
              <div className='flex gap-3 sm:gap-4 items-start'data-aos="fade-Right"
                    data-aos-duration="2000">
                <FaArrowRight className='mt-1 text-sm sm:text-base' />
                <div>
                  <h3 className='text-lg sm:text-xl md:text-2xl font-semibold border-b-2 pb-1 sm:pb-2'data-aos="fade-left"
                    data-aos-duration="2000">Bachelor's</h3>
              <p className='text-xs sm:text-sm md:text-base mt-1 sm:mt-2'data-aos="fade-left"
                    data-aos-duration="2000">
                Completed BCA (Bachelor of Computer Application) from Aggarwal College, Ballabhgarh  </p>
                </div>
              </div>

            
              <div className='flex gap-3 sm:gap-4 items-start'data-aos="fade-Right"
                    data-aos-duration="2000">
                <FaArrowRight className='mt-1 text-sm sm:text-base' />
                <div>
                  <h3 className='text-lg sm:text-xl md:text-2xl font-semibold border-b-2 pb-1 sm:pb-2'data-aos="fade-left"
                    data-aos-duration="2000">Developer Journey</h3>
                  <p 
                    className='text-xs sm:text-sm md:text-base mt-1 sm:mt-2'
                    data-aos="fade-left"
                    data-aos-duration="2000" >
                    Initially faced many challenges in learning programming, but through consistent effort and step-by-step progress, I've developed strong skills and find it very interesting now.
                  </p>
                </div>
                 </div>
                </ul>
              </div>
                   </div>
         </div>
              </div>
  )
}

export default About
