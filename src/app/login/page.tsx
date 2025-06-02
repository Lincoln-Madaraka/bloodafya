'use client';

import React from 'react';
import { FaArrowLeft, FaTwitter, FaInstagram, FaGlobe, FaEnvelope } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/login.jpeg')",
      }}
    >
      {/* Header */}
      <header className="p-6 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <a href='/'><div className="flex items-center space-x-2">
          <img src="/blood-afya-icon.png" alt="BloodAfya Logo" className="w-12 h-12" />
          <h1 className="text-3xl font-bold">BloodAfya</h1>
        </div></a>
        <p className="italic text-sm mt-1">Donate Blood, Save Lives.</p>
      </header>

      {/* Centered Login Form */}
      <main className="flex-grow flex items-center justify-center px-6">
        <div className="bg-black bg-opacity-60 p-8 rounded-xl shadow-lg w-full max-w-md">
          {/* Back Arrow */}
          <button
            onClick={() => router.back()}
            className="flex items-center text-sm text-gray-300 hover:text-red-500 mb-4"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>

          <h2 className="text-2xl font-semibold mb-6">Login to Your Account</h2>

          {/* Login Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-1 text-sm text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring focus:border-red-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 text-sm text-gray-300">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring focus:border-red-500"
                placeholder="********"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-700 hover:bg-red-800 transition px-4 py-2 rounded-md font-semibold"
            >
              Login
            </button>
          </form>

          <div className="text-sm text-center mt-4">
            <a href="#" className="text-gray-300 hover:text-red-500">
              Forgot Password?
            </a>
          </div>

          <div className="text-sm text-center mt-6 text-gray-300">
            I have no account yet?{' '}
            <a href="/signup" className="text-red-500 hover:underline">
              Sign Up
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black bg-opacity-60 text-gray-300 text-center py-4">
        <div className="flex justify-center items-center space-x-4 text-sm">
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
          <p className="ml-4">&copy; {new Date().getFullYear()} BloodAfya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
