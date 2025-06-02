'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { FaTwitter, FaInstagram, FaGlobe, FaEnvelope } from 'react-icons/fa';
export default function Home() {
  const router = useRouter();
  return (
    <div
      className="min-h-screen bg-cover bg-center relative text-white flex flex-col"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/dash-background.jpeg')",
      }}
    >
      <div className="flex w-full">
      {/* Header */}
      <header className="flex-1 flex justify-between items-center p-6 bg-black bg-opacity-40 px-6 py-4">
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-2">
            <img src="/blood-afya-icon.png" alt="BloodAfya Logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold">BloodAfya</h1>
          </div>
          <p className="italic text-sm">Donate Blood, Save Lives.</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="flex-1 flex justify-between items-center bg-black bg-opacity-40 px-6 py-4">
        <div className="flex items-center space-x-6">
          <a href="#" className="hover:text-red-600 transition">Home</a>
          <input
            type="text"
            placeholder="Search..."
            className="rounded-md px-4 py-1 text-black placeholder-gray-500 focus:outline-none focus:ring focus:border-red-400"
          />
          <a href="#" className="hover:text-red-600 transition">Contact</a>
        </div>
        <div className="flex space-x-4">
          <button onClick={() => router.push('/login')} className="px-4 py-2 bg-gray-700 rounded-md hover:bg-red-700 transition">Login</button>
          <button  onClick={() => router.push('/signup')} className="px-4 py-2 bg-gray-700 rounded-md hover:bg-red-700 transition">Signup</button>
        </div>
      </nav>
      </div>

      {/* Main Content */}
      <main className="flex items-center justify-start px-10 py-20 max-w-4xl flex-grow">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold leading-snug">
            Connecting Life. <br /> One Drop at a Time.
          </h2>
          <p className="text-lg text-gray-200">
            BloodAfya is a life-saving platform that bridges the gap between blood donors and
            recipients in real-time. Whether you're looking to give or in need of hope, we make
            finding the right match simple, fast, and reliable.
          </p>
          <p className="text-lg text-gray-200">
            Join a growing network of heroes who are changing lives—one donation at a time.
          </p>
          <button className="bg-red-700 hover:bg-red-800 transition px-6 py-2 rounded-xl shadow-lg">
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
        <p className="ml-4">&copy; {new Date().getFullYear()} BloodAfya. All rights reserved.</p>
      </div>
    </footer>
    </div>
    
  );
}