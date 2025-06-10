'use client';

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import {
  FaArrowLeft, FaTwitter, FaInstagram, FaGlobe, FaEnvelope,
  FaEye, FaEyeSlash, FaPen
} from 'react-icons/fa';

export default function DonorProfile() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("John Doe");
  const [bloodType, setBloodType] = useState("O+");
  const [donationFrequency, setDonationFrequency] = useState("3 times/year");
  const [lastDonationDate, setLastDonationDate] = useState("April 1, 2025");
  const [nextEligibleDate, setNextEligibleDate] = useState("July 1, 2025");
  const [eligibilityTimer, setEligibilityTimer] = useState("22 days");
  const [age, setAge] = useState(28);
  const [gender, setGender] = useState("Male");
  const [phone, setPhone] = useState("0712 345 678");
  const [email, setEmail] = useState("johndoe@example.com");
  const [location, setLocation] = useState("Kisumu, Kenya");
  const [avatar, setAvatar] = useState("/avatar-placeholder.png");
  const handleSave = async () => {
  // For now, just log the updated data — we’ll wire to DB/API next
  console.log("Saving data:", {
    name,
    bloodType,
    age,
    gender,
    phone,
    email,
    location,
    avatar,
  });

  setEditMode(false); // Exit edit mode
};
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    const imageUrl = URL.createObjectURL(file);
    setAvatar(imageUrl);
  }
};



  const [showPhone, setShowPhone] = useState(true);
  const [showEmail, setShowEmail] = useState(true);

  return (
    <div
      className="min-h-screen bg-cover bg-center relative text-white flex flex-col"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url('/login.jpeg')",
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
          <button onClick={() => router.push('/profile/donor')}>My Profile</button>
         <div className="relative group">
         <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-red-700 text-white px-4 py-2 rounded-xl shadow hover:bg-red-800 transition"
          >
            Profile Mode: Donor ⌄
          </button>
          <div
              className={`absolute mt-2 bg-white text-black  rounded-md shadow-lg duration-200 w-48 z-10 ${
                isOpen ? "flex flex-col" : "hidden"
              }`}
            >
              <button
                onClick={() => {
                  setIsOpen(false);
                  router.push('/profile/recipient');
                }}
                className="w-full text-left px-4 py-2 hover:bg-red-100"
              >
                Switch to Recipient
              </button>
          </div>
          </div>
          <button onClick={() => router.push('/history')}>History</button>
          <button onClick={() => router.push('/drives')}>Upcoming Drives</button>
          <button onClick={() => router.push('/settings')}>Settings</button>
          <button onClick={() => router.push('/logout')}>Logout</button>
        </nav>
      </header>

      {/* Main Profile Content */}
      <main className="p-6 space-y-10 max-w-4xl mx-auto w-full">
        <section className="relative bg-black bg-opacity-40 rounded-xl p-6 shadow-lg">
        {/* Back Button */}
        <div className="flex items-center space-x-2 text-white-300 hover:text-red-500 cursor-pointer transition" onClick={() => router.back()}>
          <FaArrowLeft />
          <span className="text-lg font-bold">Back</span>
        </div>
        <div className="absolute top-4 right-4 text-gray-300 hover:text-red-500 flex space-x-2 cursor-pointer transition" onClick={() => setEditMode(true)}>
            <FaPen /><p>Edit Profile</p>
          </div>


        {/* Section 1: Basic Info */}
        <section className="relative bg-black bg-opacity-40 rounded-xl p-6 shadow-lg">
        
          <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
          <div className="flex flex-col md:flex-row items-start md:items-center space-x-6">

            {/* Avatar is more interactive than a static photo */}
            <label htmlFor="avatar-upload">
              <img
                src={avatar}
                alt="Donor Avatar"
                className="w-24 h-24 rounded-full border-2 border-white-500 cursor-pointer"
              />
            </label>
            {editMode && (
              <input
                type="file"
                id="avatar-upload"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            )}

            <div className="space-y-2 mt-4 md:mt-0">
              <p>
                <strong>Name:</strong>{' '}
                {editMode ? (
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white text-black rounded px-2 py-1 border"
                  />
                ) : (
                  name
                )}
              </p>
              <p>
                <strong>Blood Type:</strong>{' '}
                {editMode ? (
                  <input
                    value={bloodType}
                    onChange={(e) => setBloodType(e.target.value)}
                    className="bg-white text-black rounded px-2 py-1 border"
                  />
                ) : (
                  bloodType
                )}
              </p>
              <p>
                <strong>Phone:</strong> {showPhone ? '0712 345 678' : 'Hidden'}{' '}
                <button onClick={() => setShowPhone(!showPhone)} className="text-sm ml-2">
                  {showPhone ? <FaEyeSlash /> : <FaEye />}
                </button>
              </p>
              <p>
                <strong>Email:</strong> {showEmail ? 'johndoe@example.com' : 'Hidden'}{' '}
                <button onClick={() => setShowEmail(!showEmail)} className="text-sm ml-2">
                  {showEmail ? <FaEyeSlash /> : <FaEye />}
                </button>
              </p>
              <p><strong>Location:</strong> Kisumu, Kenya</p>
            </div>
          </div>
        </section>

        {/* Section 2: Health & Eligibility Info */}
        <section className="relative bg-black bg-opacity-40 rounded-xl p-6 shadow-lg">

          <h2 className="text-xl font-semibold mb-4">Health & Eligibility</h2>
          <p>
            <strong>Last Donation Date:</strong>{' '}
            {editMode ? (
              <input
                type="text"
                value={lastDonationDate}
                onChange={(e) => setLastDonationDate(e.target.value)}
                className="bg-white text-black rounded px-2 py-1 border"
              />
            ) : (
              lastDonationDate
            )}
          </p>
          <p>
            <strong>Donation Frequency:</strong>{' '}
            {editMode ? (
              <input
                type="text"
                value={donationFrequency}
                onChange={(e) => setDonationFrequency(e.target.value)}
                className="bg-white text-black rounded px-2 py-1 border"
              />
            ) : (
              donationFrequency
            )}
          </p>
          <p><strong>Age:</strong> {editMode ? (
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="bg-white text-black rounded px-2 py-1 border"
              />
            ) : (
              age
            )} years</p>
          <p><strong>Next Elligible Date:</strong> {editMode ? (
              <input
                type="text"
                value="July 1, 2025"
                onChange={(e) => setNextEligibleDate(e.target.value)}
                className="bg-white text-black rounded px-2 py-1 border"
              />
            ) : (
              nextEligibleDate
            )}</p>
          <p><strong>Eligibility Timer:</strong> {editMode ? (
              <input
                type="text"
                value="22 days"
                onChange={(e) => setEligibilityTimer(e.target.value)}
                className="bg-white text-black rounded px-2 py-1 border"
              />
            ) : (
              "22 days"
            )}</p>
        </section>

        {/* Section 3: Donation Activity */}
        <section className="relative bg-black bg-opacity-40 rounded-xl p-6 shadow-lg">
         
          <h2 className="text-xl font-semibold mb-4">Donation Activity</h2>
          <p><strong>Total Donations:</strong> 5</p>
          <p><strong>Successful Donations:</strong> 4</p>
          <p><strong>Drives Attended:</strong> 3</p>
          <p><strong>Impact:</strong> You’ve helped save 9 lives</p>
          <p><strong>Location History:</strong> Kisumu Hospital, Aga Khan Kisumu</p>
          <p><strong>Badges:</strong> 🏅 Reliable Donor, 💉 First 3!</p>
        </section>

        {/* Section 4: Engagement */}
        <section className="relative bg-black bg-opacity-40 rounded-xl p-6 shadow-lg">
         
          <h2 className="text-xl font-semibold mb-4">Engagement</h2>
          <p><strong>Recipient Requests:</strong> 2 Pending, 1 Accepted</p>
          <p><strong>Connection Requests:</strong> Available</p>
          <p><strong>Message Center:</strong> (3 unread messages)</p>
          <p><strong>Availability:</strong> ✅ Available for emergency contact</p>
        </section>

        {/* Section 5: Medical Clearance */}
        <section className="relative bg-black bg-opacity-40 rounded-xl p-6 shadow-lg">
       
          <h2 className="text-xl font-semibold mb-4">Medical Clearance</h2>
          <p><strong>Clinic Notes:</strong> Verified – KEMRI</p>
          <p><strong>COVID Vaccine Status:</strong> Fully vaccinated</p>
          <p><strong>STD Test:</strong> Cleared</p>
        </section>

        {/* Section 6: Privacy Controls */}
        <section className="relative bg-black bg-opacity-40 rounded-xl p-6 shadow-lg">
                   <h2 className="text-xl font-semibold mb-4">Privacy Controls</h2>
          <p><strong>Phone/Email Visibility:</strong> {showPhone ? 'Shown' : 'Hidden'} / {showEmail ? 'Shown' : 'Hidden'}</p>
          <p><strong>Profile Discoverability:</strong> Enabled</p>
          <p><strong>Auto-Match Settings:</strong> Match within 50km & same blood group</p>
        </section>

        {/* Section 7: Dashboard Highlights */}
        <section className="relative bg-black bg-opacity-40 rounded-xl p-6 shadow-lg">
      
          <h2 className="text-xl font-semibold mb-4">Dashboard Highlights</h2>
          <p><strong>Upcoming Drives:</strong> Red Cross Kisumu - June 15</p>
          <p><strong>Eligible in:</strong> 22 days</p>
          <p><strong>Recent Feedback:</strong> “Thank you for saving my mom’s life”</p>
          <p><strong>Impact Tracker:</strong> Saved 9 lives in 2025</p>
          <p><strong>Leaderboard:</strong> Top 10 Donors in Kisumu</p>
          <p><strong>Tips:</strong> Stay hydrated, eat iron-rich foods</p>
      </section>
      {editMode && (
            <div className="mt-4 flex space-x-4">
              <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </button>
            </div>
          )}
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
