import React from 'react';
import QR from '../assets/myQR.png'; 

const Footer = () => {
  return (
    <footer id='Footer' className="bg-[#0d0d30] text-white py-12 px-6 md:px-20 mt-10">
      <div className="max-w-7xl ml-30 mx-auto grid grid-cols-1 md:grid-cols-2 gap-32 items-start">
        <div data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="mb-6 text-gray-300">
            Feel free to reach out for any inquiries or collaborations.
          </p>
          <form
            action="https://formspree.io/f/mrbqwzle"
            method="POST"
            className="flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Your Email
              </label>
        <input
          type="email"
           name="email"
          id="email"
          required
         className="w-full px-4 py-2 rounded-md bg-[#1f1f3a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"  />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                required
                className="w-full px-4 py-2 rounded-md bg-[#1f1f3a] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              className="self-start bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
            >
              Send
            </button>
          </form>
        </div>

        
       <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left"
       data-aos="fade-left">
  <h3 className="text-2xl font-semibold mb-4">My QR</h3>
  <p className="text-gray-400 mb-5">Stay connected</p>

  <div className="relative w-80 h-80 p-5 border-2 border-gray-600 rounded-md">
    <img
      src={QR}
      alt="QR Code"
      className="w-full h-full object-contain"/>

    <span className="absolute top-76 left-77 flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-5 bg-green-500"></span>
     </span>
     </div>
     </div>

      </div>

      <div className="mt-12 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
