import React, { useState } from 'react'
import "./nav.css"
import { RiCloseLine, RiMenu2Line } from 'react-icons/ri';


const Navbar = () => {
    const[menu,openmenu ] = useState(false);
    const[showmenu, setmenu] = useState(true);

  return (
    
    
      <nav id='navbar' className="  bg-[#0d0d30]  absolute flex flex-wrap justify-between   md:items-center text-[#8b9eb2]  px-10  md:px-20"
      data-aos="fade-down">
          <span className='text-3xl  text-white tracking-wide'>PORTFOLIO</span>

          <ul id='list' className={`${menu ? "block" : "hidden"} absolute w-full  bg-black bg-opacity-30 md:bg-transparent  md:relative md:flex md:gap-10 md:justify-end 
          md:p-0 md:mt-0 md:flex-row md:items-center md:text-center md:border-none md:mx-0`}>
            <a href="#Home">
            <li  className='text-md  text-blue-50 text-xl p-1 md:p-0'> Home</li>
            </a>
          
            <a href="#About">
            <li className=' text-md text-blue-50 text-xl p-1 md:p-0'> About </li>
            </a>

            <a href="#Skill">
            <li  className='text-md text-blue-50 text-xl p-1 md:p-0'>Skill</li>
            </a>

            <a href="#Project">
            <li  className='text-md text-blue-50 text-xl p-1 md:p-0'>Project</li>
            </a>
            
          </ul>
          {showmenu ? (
            <RiMenu2Line size={30} className='md:hidden absolute   right-10 top-6 transition-all duration-300' onClick={()=>
              {openmenu(!menu); setmenu(!showmenu);}}/>
          ):(
          <RiCloseLine size={30} className='md:hidden absolute right-10  top-6 transition-all duration-300' onClick={()=>{
            openmenu(false); setmenu(!false);

          }} />

          )}
          
          
      </nav>
    
  )
}
export default Navbar
