'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  FaArrowLeft,
  FaTwitter,
  FaInstagram,
  FaGlobe,
  FaEnvelope,
} from 'react-icons/fa';

export default function ContactPage() {
  const router = useRouter();

  return (
    <div
      className="min-h-screen flex flex-col text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/background-contact.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
    

      {/* Header */}
      <a href='/'><div className="flex flex-col items-center text-center mt-4">
        <img src="/blood-afya-icon.png" alt="BloodAfya Logo" className="w-14 h-14" />
        <h1 className="text-3xl font-bold mt-2">BloodAfya</h1>
        <p className="italic text-sm">Donate Blood, Save Lives.</p>
      </div></a>  

      {/* Contact Form */}
      <div className="flex-grow flex justify-center items-center px-6 py-10">
        <form className="w-full max-w-2xl bg-black bg-opacity-60 rounded-xl p-8 space-y-6">
          {/* Back Button inside form */}
          <div className="flex items-center space-x-2 text-white hover:text-red-500 cursor-pointer w-fit" onClick={() => router.back()}>
            <FaArrowLeft size={20} />
            <span className="text-sm font-semibold">Back</span>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
          <br></br>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-md border border-gray-400 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md border border-gray-400 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">Subject</label>
            <select className="w-full px-4 py-2 rounded-md border border-gray-400 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-red-500">
              <option>General Inquiry</option>
              <option>Sponsorship or Partnership</option>
              <option>Blood Donation Questions</option>
              <option>Technical Support / App Issues</option>
              <option>Feedback or Suggestions</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              placeholder="Your message..."
              rows={5}
              className="w-full px-4 py-2 rounded-md border border-gray-400 bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-red-700 hover:bg-red-800 transition px-6 py-2 rounded-xl shadow-lg"
            >
              Send Message
            </button>
          </div>
          <br></br>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-black bg-opacity-60 text-gray-300 text-center py-4 mt-auto">
        <div className="flex justify-center items-center space-x-4 text-sm">
          <a
            href="mailto:madarakalincoln46@gmail.com"
            className="hover:text-red-500"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://twitter.com/syntaxrtx"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/kcl_fy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://lincoln-madaraka-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            <FaGlobe />
          </a>
          <span className="text-gray-400 text-lg">•</span>
          <p className="ml-4">
            &copy; {new Date().getFullYear()} BloodAfya. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
