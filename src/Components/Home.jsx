import React from 'react';
import Avtar from '../assets/Ai Generate Picture.jpg';
import { RiGithubFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import TextEffect from "./Textchange";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";

const Home = () => {
  return (
    <div
      id="Home"
      className="relative bg-[#0d0d30] text-white flex flex-col md:flex-row items-center md:items-start md:gap-85 min-h-screen px-6 md:px-20 pt-28 md:pt-20 pb-10"
    >
      {/* Image Section */}
      <div
        className="relative w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-purple-500 via-blue-400 via-blue-800 to-pink-500 rounded-full p-1 animate-gradient-border mb-5 md:mb-0"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <img
          src={Avtar}
          alt="Avatar"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-6/12 md:pl-50 selection:bg-fuchsia-700 selection:text-fuchsia-900">
        <h1
          className="text-3xl md:text-6xl font-bold leading-tight tracking-tight mb-4 mt-2"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <TextEffect />
        </h1>

        <p
          className="text-sm md:text-2xl mb-8"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Welcome to my personal portfolio
        </p>

        <a href="#Footer">
          <button
            className="text-white py-2 px-4 md:text-lg font-semibold rounded-3xl bg-gradient-to-r from-sky-500 to-indigo-500 hover:opacity-85 hover:scale-105 transition-all duration-300"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Get in Touch
          </button>
        </a>

        {/* Social Links */}
        <div
          className="mt-12 flex gap-5 text-2xl md:text-3xl"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <RiGithubFill className="border-2 rounded-2xl p-1 hover:text-black hover:bg-white transition" />
          </a>
          <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="border-2 rounded-2xl p-1 hover:text-black hover:bg-white transition" />
          </a>
          <a href="https://www.instagram.com/its_ujju7827/">
            <FaSquareInstagram className="border-2 rounded-full p-1 hover:text-black hover:bg-white transition" />
          </a>
          <a href="#">
            <FaSquareXTwitter className="border-2 rounded-2xl p-1 hover:text-black hover:bg-white transition" />
          </a>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <a
        href="#About" // change to your next section's id
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce text-3xl text-white"
      >
        <MdOutlineKeyboardDoubleArrowDown />
      </a>
    </div>
  );
};

export default Home;
