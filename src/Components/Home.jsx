import React from 'react';
import Avtar from '../assets/Ai Generate Picture.jpg'
import { RiGithubFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import TextEffect from "./Textchange"

const Home = () => {
  return (
    <div id="Home" className='bg-[#0d0d30] text-white flex flex-col md:flex-row justify-between items-start h-screen  p-10 md:p-20'>

      <div className='md:w-6/12 md:pt-10 selection:bg-fuchsia-700 selection:text-fuchsia-900'>
        <h1 className='ml-3 text-3xl md:text-6xl mt-5 font-bold leading-normal tracking-tight' data-aos="fade-right" data-aos-duration="2000">
        
          <TextEffect/>
        </h1>
        
        <p className='ml-3 mt-5 text-sm md:text-2xl tracking-tight' data-aos="fade-right" data-aos-duration="2000">Welcome to my personal portfolio</p>
         
         <a href="#Footer">
        <button  className='ml-10 mt-10 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 font-semibold hover:scale-105 rounded-3xl bg-linear-to-t from-sky-500 to-indigo-500' data-aos="fade-right" data-aos-duration="2000">Get in Touch</button>
          </a>

        <div className='ml-3 mt-20 h-10 w-40 flex gap-5 justify-center items-center text-2xl md:text-3xl'>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <RiGithubFill className="text-white rounded-2xl border-2 hover:text-black hover:bg-white" data-aos="zoom-in" data-aos-duration="2000" />
          </a>
          <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='text-white rounded-2xl border-2 hover:text-black hover:bg-white hover:rounded-2xl transition-colors duration-600' data-aos="zoom-in" data-aos-duration="2000" />
          </a>
          <a href="https://www.instagram.com/its_ujju7827/">
            <FaSquareInstagram className='text-white rounded-full border-2 hover:text-black hover:bg-white hover:rounded-2xl transition-colors duration-600' data-aos="zoom-in" data-aos-duration="2000" />
          </a>
          <a href="">
          <FaSquareXTwitter className='text-white  rounded-2xl border-2 hover:text-black hover:bg-white hover:rounded-2xl transition-colors duration-600' data-aos="zoom-in" data-aos-duration="2000" />
          </a>
        </div>
      </div>

     <div className="relative mt-20 sm:ml-15 md:mt-30 w-48 h-48 md:w-80 md:h-80 p-1 bg-gradient-to-r from-purple-500 via-blue-400 via-blue-800 to-pink-500 animate-gradient-border rounded-full" data-aos="fade-left" data-aos-duration="2000">
  <img className="rounded-full w-full h-full object-cover" src={Avtar} alt="Avatar" />
</div>


    </div>
  )
}

export default Home;
