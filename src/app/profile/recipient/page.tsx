'use client';

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import {
  FaArrowLeft, FaTwitter, FaInstagram, FaGlobe, FaEnvelope,
  FaEye, FaEyeSlash, FaPen
} from 'react-icons/fa';

export default function RecipientProfile() {
  const router = useRouter();
  const [showPhone, setShowPhone] = useState(true);
  const [showEmail, setShowEmail] = useState(true);

  return (
    <div
      className="min-h-screen bg-cover bg-center relative text-white flex flex-col"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/signup-background.jpeg')",
      }}
    >
      {/* Header */}
      <header className="flex items-center justify-between p-6 bg-black bg-opacity-50">
        <a href='/' className="flex flex-col items-start">
          <div className="flex items-center space-x-4">
            <img src="/blood-afya-icon.png" alt="BloodAfya Logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold">BloodAfya</h1>
          </div>
          <p className="italic text-sm">Donate Blood, Save Lives.</p>
        </a>
        <nav className="flex space-x-4 text-sm">
          <button onClick={() => router.push('/dashboard')}>Dashboard</button>
          <button onClick={() => router.push('/recipient')}>My Profile</button>
          <button onClick={() => router.push('/requests')}>Requests</button>
          <button onClick={() => router.push('/matches')}>Matches</button>
          <button onClick={() => router.push('/settings')}>Settings</button>
          <button onClick={() => router.push('/logout')}>Logout</button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="p-6 space-y-10 max-w-4xl mx-auto w-full">
        {/* Back Button */}
        <div className="flex items-center space-x-2 text-white hover:text-red-500 cursor-pointer transition" onClick={() => router.back()}>
          <FaArrowLeft />
          <span className="text-lg font-bold">Back</span>
        </div>

        {/* Section 1: Basic Info */}
        <section className="bg-black bg-opacity-40 rounded-xl p-6 shadow-lg relative">
          <div className="absolute top-4 right-4 text-gray-300 hover:text-red-500 cursor-pointer transition">
            <FaPen />
          </div>
          <h2 className="text-xl font-bold mb-4">Basic Information</h2>
          {/* ...fields here... */}
        </section>

        {/* Section 2: Medical Details */}
        <section className="bg-black bg-opacity-40 rounded-xl p-6 shadow-lg relative">
          <div className="absolute top-4 right-4 text-gray-300 hover:text-red-500 cursor-pointer transition">
            <FaPen />
          </div>
          <h2 className="text-xl font-bold mb-4">Medical Details</h2>
          {/* ...fields here... */}
        </section>

        {/* Section 3: Request Overview */}
        <section className="bg-black bg-opacity-40 rounded-xl p-6 shadow-lg relative">
          <div className="absolute top-4 right-4 text-gray-300 hover:text-red-500 cursor-pointer transition">
            <FaPen />
          </div>
          <h2 className="text-xl font-bold mb-4">Request Overview</h2>
          {/* ...fields here... */}
        </section>

        {/* Section 4: Donor Matching */}
        <section className="bg-black bg-opacity-40 rounded-xl p-6 shadow-lg relative">
          <div className="absolute top-4 right-4 text-gray-300 hover:text-red-500 cursor-pointer transition">
            <FaPen />
          </div>
          <h2 className="text-xl font-bold mb-4">Donor Matching</h2>
          {/* ...fields here... */}
        </section>

        {/* Section 5: Communication */}
        <section className="bg-black bg-opacity-40 rounded-xl p-6 shadow-lg relative">
          <div className="absolute top-4 right-4 text-gray-300 hover:text-red-500 cursor-pointer transition">
            <FaPen />
          </div>
          <h2 className="text-xl font-bold mb-4">Communication</h2>
          {/* ...fields here... */}
        </section>

        {/* Section 6: Dashboard Highlights */}
        <section className="bg-black bg-opacity-40 rounded-xl p-6 shadow-lg relative">
          <div className="absolute top-4 right-4 text-gray-300 hover:text-red-500 cursor-pointer transition">
            <FaPen />
          </div>
          <h2 className="text-xl font-bold mb-4">Dashboard Highlights</h2>
          {/* ...fields here... */}
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-black bg-opacity-60 text-gray-300 text-center py-4 mt-auto">
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
