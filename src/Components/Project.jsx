import React from 'react';
import Movie from '../assets/movie.jpg';
import Ecom from '../assets/ecommm.jpg';

const Project = () => {
  return (
    <div
      id='Project'
      className='bg-[#0d0d30] text-white py-12 px-4 sm:px-6 md:px-10 lg:px-20  
                 mt-20 rounded-2xl shadow-2xl max-w-7xl mx-auto'>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">RECENT</h2>
        <span className="text-2xl md:text-4xl font-bold text-white opacity-40">PROJECTS</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Project 1 */}
        <div className="bg-[#1a1a40] p-5 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        data-aos="fade-right">
          <h3 className="font-bold mb-4 text-xl text-white">Movie Ticket Booking</h3>
          <img src={Movie} alt="Movie Project" className="rounded-md mb-4 w-full h-48 object-cover" />
          <p className="text-gray-300 mb-4">
            Select your favorite movie and book your ticket now.
          </p>
          <button
            onClick={() => window.open('https://github.com/Ujjwal7827/Ticket-booking')}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors">
            Source Code
          </button>
        </div>

        {/* Project 2 */}
        <div className="bg-[#1a1a40] p-5 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        data-aos="fade-left">
          <h3 className="font-bold mb-4 text-xl text-white">E-Commerce</h3>
          <img src={Ecom} alt="E-Commerce Project" className="rounded-md mb-4 w-full h-48 object-cover" />
          <p className="text-gray-300 mb-4">
            Shop now — your cart is waiting for you.
          </p>
          <button
            onClick={() => window.open('https://github.com/Ujjwal7827/new-portfolio')}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
          >
            Source Code
          </button>
        </div>

      </div>
    </div>
  );
};

export default Project;
