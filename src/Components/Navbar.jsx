import React, { useState } from 'react'
import "./nav.css"
import { RiCloseLine, RiMenu2Line } from 'react-icons/ri';


const Navbar = () => {
    const[menu,openmenu ] = useState(false);
    const[showmenu, setmenu] = useState(true);

  return (
    
    
      <nav id='navbar' className="  bg-[#0d0d30]  absolute flex flex-wrap justify-between   md:items-center text-[#8b9eb2]  px-10  md:px-20"
      data-aos="fade-down">
          <span className=' block text-3xl  text-white tracking-wide'>PORTFOLIO</span>

          <ul id="list" className={`main-Nav ${menu ? "block" : "hidden"}   absolute top-16 left-0 w-full  bg-black/70 backdrop-blur-md shadow-md 
              transition-all duration-300 ease-in-out rounded-b-2xl px-6 py-4 space-y-4 z-40 md:static md:flex md:flex-row md:items-center md:justify-end 
               md:space-y-0 md:space-x-10 md:bg-transparent  md:backdrop-blur-0 md:shadow-none md:rounded-none md:p-0 md:mt-0 md:w-auto`}
>

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
            <RiMenu2Line size={30} className=' treedot md:hidden absolute  right-10  top-2 transition-all duration-300' onClick={()=>
              {openmenu(!menu); setmenu(!showmenu);}}/>
          ):(
          <RiCloseLine size={30} className=' cross md:hidden absolute right-10 top-2 transition-all duration-300' onClick={()=>{
            openmenu(false); setmenu(!false);

          }} />

          )}
          
          
      </nav>
    
  )
}
export default Navbar
