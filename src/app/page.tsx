'use client';

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaInstagram, FaGlobe, FaEnvelope, FaSearch } from 'react-icons/fa';
export default function Home() {
  const router = useRouter();
  const images = [
  "/dash-background.jpeg",
  "/login.jpeg",
  "/signup-background.jpeg",
  "/background-contact.jpeg"
];
  const [bgIndex, setBgIndex] = useState(0);
      useEffect(() => {
      const interval = setInterval(() => {
        setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // 6 seconds
      return () => clearInterval(interval);
    }, []);
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
   <motion.div
      key={bgIndex} // Re-animates on change
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen bg-cover bg-center relative text-white flex flex-col transition-all duration-1000"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${images[bgIndex]}')`,
      }}
    >
   
      <div className="flex w-full">
      {/* Header */}
      <div className="hidden md:flex w-full flex-row">
      <header className="flex-1 flex justify-between items-center p-6 bg-black bg-opacity-40 px-6 py-4">
        <a href='/'><div className="flex flex-col items-start">
          <div className="flex items-center space-x-2">
            <img src="/blood-afya-icon.png" alt="BloodAfya Logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold">BloodAfya</h1>
          </div>
          <p className="italic text-sm">Donate Blood, Save Lives.</p>
        </div></a>
      </header>

      {/* Navigation */}
      <nav className="flex-1 flex justify-between items-center bg-black bg-opacity-40 px-6 py-4">
        <div className="flex items-center space-x-6">
          <a href="/" className="hover:text-red-600 text-xl font-bold transition">Home</a>
          <div className="flex items-center space-x-4"> 
           
              <div className="flex items-center max-w-md mx-auto bg-white rounded-full shadow-md px-4 py-2">
                <FaSearch className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-grow bg-transparent focus:outline-none text-black placeholder-gray-400"
                />
                 <button
                      type="submit"
                      className="bg-red-600 text-white px-4 py-1 rounded-full hover:bg-red-700 transition ml-2"
                    >
                      Go
                    </button>
               </div>
            </div>

          <a href="/contact" className="hover:text-red-600 text-xl font-bold transition">Contact</a>
        </div>
        <div className="flex space-x-4">
          <button onClick={() => router.push('/login')} className="px-4 py-2 bg-gray-700 text-lg rounded-md hover:bg-red-700 transition">Login</button>
          <button  onClick={() => router.push('/register')} className="px-4 py-2 bg-gray-700 text-lg rounded-md hover:bg-red-700 transition">Signup</button>
        </div>
      </nav>
      </div>
      </div>
      {/* Mobile Nav (hidden on medium+ screens) */}
      <div className="flex md:hidden  justify-between items-center w-full px-6 py-4">
        {/* Logo */}
        <div className="flex flex-col items-start">
        <div className="flex items-center space-x-2">
          <img src="/blood-afya-icon.png" alt="BloodAfya Logo" className="w-8 h-8" />
          <h1 className="text-lg font-bold">BloodAfya</h1>
        </div>
        <p className="italic text-xs text-white">Donate Blood, Save Lives.</p>
        </div>

      {/* Hamburger icon */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
            {/* Centered Mobile Search Bar - visible only on mobile */}
      <div className="md:hidden px-6 mt-2">
        <div className="flex items-center bg-gray-800 bg-opacity-90 rounded-full px-3 py-2 w-full">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 bg-transparent placeholder-gray-500 text-white w-full focus:outline-none text-sm"
          />
        </div>
      </div>
      {/* Dropdown menu, mobile only */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-70 px-6 py-4 space-y-4 text-center">
          <a href="/" className="block text-white hover:text-red-500 text-lg font-semibold">Home</a>
          <a href="/contact" className="block text-white hover:text-red-500 text-lg font-semibold">Contact</a>
          <button onClick={() => router.push('/login')} className="w-full bg-gray-700 py-2 rounded hover:bg-red-700 text-white">Login</button>
          <button onClick={() => router.push('/register')} className="w-full bg-gray-700 py-2 rounded hover:bg-red-700 text-white">Signup</button>
        </div>
      )}

      {/* Main Content */}
      <main className="flex items-center justify-start px-10 py-20 max-w-4xl flex-grow">
        <div className="space-y-6">
              <motion.div
              className="space-y-6"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.3, // Delay between elements
                  },
                },
              }}
              >
              {/* Heading */}
            <motion.h2
              className="text-4xl font-bold leading-snug"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}
            >
              Connecting Life. <br /> One Drop at a Time.
            </motion.h2>

            {/* Paragraph 1 */}
            <motion.p
              className="text-lg text-gray-200"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}
            >
              BloodAfya is a life-saving platform that bridges the gap between blood donors and recipients
              in real-time. Whether you're looking to give or in need of hope, we make finding the right
              match simple, fast, and reliable.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              className="text-lg text-gray-200"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}
            >
              Join a growing network of heroes who are changing lives—one donation at a time.
            </motion.p>
          </motion.div>
          <button onClick={() => router.push('/register')} className="bg-red-700 hover:bg-red-800 transition px-6 py-2 rounded-xl shadow-lg">
            Get Started
          </button>
        </div>
      </main>

      {/* Footer */}
    <footer className="bg-black bg-opacity-60 text-gray-300 text-center py-4 mt-auto">
      <div className="flex justify-center items-center space-x-4 text-sm">
        {/* Social Icons */}
        <a href="mailto:madarakalincoln46@gmail.com" className="hover:text-red-500">
          <FaEnvelope />
        </a>
        <a href="https://twitter.com/syntaxrtx" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
          <FaTwitter />
        </a>
        <a href="https://instagram.com/kcl_fy" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
          <FaInstagram />
        </a>
        <a href="https://lincoln-madaraka-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
          <FaGlobe />
        </a>
        <span className="text-gray-400 text-lg">•</span>
        {/* Text */}
        <p>&copy; {new Date().getFullYear()} BloodAfya. All rights reserved.</p>
      </div>
    </footer>
    </motion.div>
    
  );
}