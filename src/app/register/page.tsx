'use client';

import React, { useState } from 'react';
import { FaArrowLeft, FaTwitter, FaInstagram, FaGlobe, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
export default function Register() {
  const [email, setEmail] = useState('');

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const getPasswordStrength = () => {
    if (password.length > 8 && /[A-Z]/.test(password) && /\d/.test(password)) {
      return 'Strong';
    } else if (password.length >= 6) {
      return 'Medium';
    }
    return 'Weak';
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center relative text-white flex flex-col"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.7)), url('/signup-background.jpeg')",
      }}
    >
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-black bg-opacity-50">
        <a href='/'><div className="flex flex-col items-start">
          <div className="flex items-center space-x-2">
            <img src="/blood-afya-icon.png" alt="BloodAfya Logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold">BloodAfya</h1>
          </div>
          <p className="text-sm italic text-white mt-1 ml-1">Donate Blood, Save Lives</p>
        </div></a>
      </header>

      {/* Signup Form */}
      <main className="flex justify-center items-center flex-grow px-4">
        <div className="bg-black bg-opacity-60 p-8 rounded-xl max-w-2xl w-full space-y-6 shadow-lg">
          <button
              onClick={() => router.back()}
              className="text-gray-300 hover:text-red-500 mb-4 flex items-center space-x-2"
            >
              <FaArrowLeft />
              <span>Back</span>
            </button>

          <h2 className="text-3xl font-bold mb-2 text-red-500 text-center">Create Your Account</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
          <label htmlFor="fullName" className="text-white mb-1 text-sm">Full Name</label>
            <input type="text" placeholder="Full Name" className="p-3 rounded bg-gray-100 text-black" />
          </div>
          <div className="flex flex-col">
          <label htmlFor="email" className="text-white mb-1 text-sm">Email Address</label>
            <input type="email" placeholder="Email Address" className="p-3 rounded bg-gray-100 text-black"  value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="flex flex-col">
          <label htmlFor="phone" className="text-white mb-1 text-sm">Phone Number</label>
            <input type="tel" placeholder="Phone Number" className="p-3 rounded bg-gray-100 text-black" />
            <p className="text-xs text-gray-400 mt-1">We'll send a verification code to this number.</p>
          </div>
            
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 rounded bg-gray-100 text-black w-full"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="p-3 rounded bg-gray-100 text-black w-full"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-600"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <input type="date" placeholder="Date of Birth" className="p-3 rounded bg-gray-100 text-black" />
            <select className="p-3 rounded bg-gray-100 text-black">
              <option value="">Gender (Optional)</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input type="text" placeholder="Location (City/Town)" className="p-3 rounded bg-gray-100 text-black" />
          </div>

          <div className="text-sm">
            <span className="text-gray-300">Password Strength: </span>
            <span className={`font-bold ${getPasswordStrength() === 'Strong' ? 'text-green-500' : getPasswordStrength() === 'Medium' ? 'text-yellow-500' : 'text-red-500'}`}>
              {getPasswordStrength()}
            </span>
          </div>

          {/* Optional Medical Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <select className="p-3 rounded bg-gray-100 text-black">
              <option value="">Blood Type</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            <select className="p-3 rounded bg-gray-100 text-black">
              <option value="">Are you a donor?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <input type="text" placeholder="Existing medical conditions (Optional)" className="p-3 rounded bg-gray-100 text-black md:col-span-2" />
          </div>

          {/* Terms and Create Account */}
          <div className="space-y-4">
            <label className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={() => setAcceptedTerms(!acceptedTerms)}
              />
              <span>
                I agree to the <a href="#" className="text-red-400 underline">Terms & Conditions</a> and <a href="#" className="text-red-400 underline">Privacy Policy</a>
              </span>
            </label>

            <button
              disabled={!acceptedTerms}
              className={`w-full py-3 rounded ${acceptedTerms ? 'bg-red-700 hover:bg-red-800' : 'bg-gray-600 cursor-not-allowed'} text-white font-semibold`}
            
            >
              Create Account
            </button>

            <button className="w-full py-3 rounded bg-white text-black font-semibold hover:bg-gray-200">
              Sign up with Google
            </button>

            <p className="text-sm text-center">
              Already have an account?{' '}
              <a href="/login" className="text-red-400 underline">
                Sign In
              </a>
            </p>
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

