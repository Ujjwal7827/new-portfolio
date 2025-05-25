import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import picture from "../assets/picture.jpg";

const About = () => {
  return (
    <div 
      id='About' 
      className='bg-[#0d0d30] text-white mx-auto md:flex overflow-hidden md:flex-wrap md:justify-center shadow-2xl md:mx-20 bg-opacity-30 mt-20 rounded-lg p-6 sm:px-6 md:px-10 lg:px-20 py-8 md:py-12'
    >
      <div className='max-w-6xl w-full'>
        {/* Title */}
        <div className='text-center mb-8'>
          <h2 className='text-3xl md:text-4xl font-bold'>ABOUT</h2>
          <span className='text-2xl md:text-4xl font-bold opacity-40'>MY-SELF</span>
        </div>

        {/* Content */}
        <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12'>
          
          {/* Image */}
          <div className='w-full md:w-1/3 flex justify-center' data-aos="fade-right" data-aos-duration="2000">
            <img 
              className='w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-full border-2 border-purple-500'
              src={picture} 
              alt="Profile" 
            />
          </div>

          {/* Text Content */}
          <div className='w-full md:w-2/3'>
            <ul className='space-y-6'>

              {/* Education */}
              <li className='flex gap-3 sm:gap-4 items-start' data-aos="fade-right" data-aos-duration="2000">
                <FaArrowRight className='mt-2 text-base' />
                <div>
                  <h3 className='text-lg sm:text-xl md:text-2xl font-semibold border-b-2 pb-1' data-aos="fade-left" data-aos-duration="2000">
                    Higher Education
                  </h3>
                  <p className='text-sm sm:text-base md:text-base mt-2 text-justify break-words' data-aos="fade-left" data-aos-duration="2000">
                    Completed 10th with Haryana board and 12th with Uttar Pradesh board.
                  </p>
                </div>
              </li>

              {/* Bachelor's */}
              <li className='flex gap-3 sm:gap-4 items-start' data-aos="fade-right" data-aos-duration="2000">
                <FaArrowRight className='mt-2 text-base' />
                <div>
                  <h3 className='text-lg sm:text-xl md:text-2xl font-semibold border-b-2 pb-1' data-aos="fade-left" data-aos-duration="2000">
                    Bachelor's
                  </h3>
                  <p className='text-sm sm:text-base md:text-base mt-2 text-justify break-words' data-aos="fade-left" data-aos-duration="2000">
                    Completed BCA (Bachelor of Computer Application) from Aggarwal College, Ballabhgarh.
                  </p>
                </div>
              </li>

              {/* Developer Journey */}
              <li className='flex gap-3 sm:gap-4 items-start' data-aos="fade-right" data-aos-duration="2000">
                <FaArrowRight className='mt-2 text-base' />
                <div>
                  <h3 className='text-lg sm:text-xl md:text-2xl font-semibold border-b-2 pb-1' data-aos="fade-left" data-aos-duration="2000">
                    Developer Journey
                  </h3>
                  <p className="text-sm sm:text-base md:text-base mt-2 w-full text-justify break-words leading-relaxed">
  Initially faced many challenges in learning programming, but through consistent effort and step-by-step progress, I've developed strong skills and find it very interesting now.
</p>

                </div>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
