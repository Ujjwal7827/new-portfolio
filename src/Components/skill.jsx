import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";


const Skill = () => {
  const skills = [
    { icon: <FaHtml5 className="text-orange-500 text-4xl" />, name: "HTML" },
    { icon: <FaCss3 className="text-blue-500 text-4xl" />, name: "CSS" },
    { icon: <FaJs className="text-yellow-500 text-4xl" />, name: "JavaScript" },
    { icon: <FaReact className="text-teal-500 text-4xl" />, name: "React" },
    { icon: <SiTailwindcss className="text-cyan-500 text-4xl" />, name: "Tailwind" },
    { icon: <FaBootstrap className="text-purple-500 text-4xl" />, name: "Bootstrap" }
  ]; 

  return (
    <div id='Skill'  className='bg-[#0d0d30] text-white  md:flex overflow-hidden md:flex-wrap md:justify-center shadow-2xl md:mx-20
      bg-opacity-30 mt-25 rounded-lg  h-160  p-14 sm:px-6 md:px-10 lg:px-20 py-8 md:py-12 '>
      <div className='max-w-6xl w-full'>
        <div className='text-center mb-8'>
          <h2 className='text-3xl md:text-4xl mt-9 font-bold'>Skill</h2>
          <span className='text-2xl md:text-4xl ml-2 font-bold opacity-40'>I-Have</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-25">
          {skills.map((skill, index) => (
            <div id='skill-sec'
              key={index}
              className="flex flex-col items-center p-4 rounded-lg bg-white/10 hover:scale-105  "
              data-aos="fade-up"
              data-aos-duration="2000" >
              {skill.icon}
              <h3 className="text-lg font-semibold mt-2 text-white">{skill.name} </h3> 
            </div>
          ))}
        </div>
      </div>
    </div>
        
      
  
  )
}

export default Skill
