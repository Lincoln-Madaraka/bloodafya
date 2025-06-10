'use client';

import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import {
  FaArrowLeft, FaTwitter, FaInstagram, FaGlobe, FaEnvelope,
  FaEye, FaEyeSlash, FaPen
} from 'react-icons/fa';

export default function RecipientProfile() {
  const router = useRouter();
  const [editMode, setEditMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showPhone, setShowPhone] = useState(true);
  const [showEmail, setShowEmail] = useState(true);
  const [avatar, setAvatar] = useState("/avatar-placeholder.png");
   const [name, setName] = useState("John Doe");
  const [bloodType, setBloodType] = useState("O+");
  const [age, setAge] = useState(28);
  const [gender, setGender] = useState("Male");
  const [phone, setPhone] = useState("0712 345 678");
  const [email, setEmail] = useState("johndoe@example.com");
  const [location, setLocation] = useState("Kisumu, Kenya");
  const [condition, setCondition] = useState("Anemia");
  const [urgencyLevel, setUrgencyLevel] = useState("High");
  const [hospital, setHospital] = useState("KEMRI Hospital");
  const [doctorContact, setDoctorContact] = useState("Dr. Achieng");

  const [requestedUnits, setRequestedUnits] = useState("3");
  const [unitsFulfilled, setUnitsFulfilled] = useState("1");
  const [requestDate, setRequestDate] = useState("June 5, 2025");
  const [status, setStatus] = useState("Pending");

  const [matchedDonor, setMatchedDonor] = useState("Jane Wanjiku");
  const [matchesFound, setMatchesFound] = useState(4);

  const [contactTime, setContactTime] = useState("Anytime");
  const [notifications, setNotifications] = useState("SMS + Email");

  const [profileViews, setProfileViews] = useState("123");
  const [supportMessages, setSupportMessages] = useState("6");
  const handleSave = () => {
  // Do save logic here
  setEditMode(false);
};



   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    }
  };
  

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
          <button onClick={() => router.push('/profile/recipient')}>My Profile</button>
         <div className="relative group">
         <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-red-700 text-white px-4 py-2 rounded-xl shadow hover:bg-red-800 transition"
          >
            Profile Mode: Recipient ⌄
          </button>
          <div
              className={`absolute mt-2 bg-white text-black rounded-md shadow-lg duration-200 w-48 z-10 ${
                isOpen ? "flex flex-col" : "hidden"
              }`}
            >
              <button
                onClick={() => {
                  setIsOpen(false);
                  router.push('/profile/donor');
                }}
                className="w-full text-left px-4 py-2 hover:bg-red-100"
              >
                Switch to Donor
              </button>
          </div>
          </div>
          <button onClick={() => router.push('/requests')}>Requests</button>
          <button onClick={() => router.push('/matches')}>Matches</button>
          <button onClick={() => router.push('/settings')}>Settings</button>
          <button onClick={() => router.push('/logout')}>Logout</button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="p-6 space-y-10 max-w-4xl mx-auto w-full">
        <section className="bg-black bg-opacity-40 rounded-xl p-6 shadow-lg relative">
        {/* Back Button */}
        <div className="flex items-center space-x-2 text-white hover:text-red-500 cursor-pointer transition" onClick={() => router.back()}>
          <FaArrowLeft />
          <span className="text-lg font-bold">Back</span>
        </div>
        <div className="absolute top-4 right-4 text-gray-300 hover:text-red-500 flex space-x-2 cursor-pointer transition">
            <FaPen /><p>Edit Profile</p>
          </div>

        {/* Section 1: Basic Info */}
        <section className="bg-black bg-opacity-40 rounded-xl p-6 shadow-lg relative">
          <h2 className="text-xl font-bold mb-4">Basic Information</h2>
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
          <p><strong>Name:</strong> {editMode ? <input value={name} onChange={(e) => setName(e.target.value)} className="bg-white text-black rounded px-2 py-1 border" /> : name}</p>
          <p><strong>Blood Type:</strong> {editMode ? <input value={bloodType} onChange={(e) => setBloodType(e.target.value)} className="bg-white text-black rounded px-2 py-1 border" /> : bloodType}</p>
          <p><strong>Age:</strong> {editMode ? <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} className="bg-white text-black rounded px-2 py-1 border" /> : age}</p>
          <p><strong>Gender:</strong> {editMode ? <input value={gender} onChange={(e) => setGender(e.target.value)} className="bg-white text-black rounded px-2 py-1 border" /> : gender}</p>
          <p>
            <strong>Phone:</strong> {showPhone ? phone : 'Hidden'}{' '}
            <button onClick={() => setShowPhone(!showPhone)} className="text-sm ml-2">{showPhone ? <FaEyeSlash /> : <FaEye />}</button>
          </p>
          <p>
            <strong>Email:</strong> {showEmail ? email : 'Hidden'}{' '}
            <button onClick={() => setShowEmail(!showEmail)} className="text-sm ml-2">{showEmail ? <FaEyeSlash /> : <FaEye />}</button>
          </p>
          <p><strong>Location:</strong> {editMode ? <input value={location} onChange={(e) => setLocation(e.target.value)} className="bg-white text-black rounded px-2 py-1 border" /> : location}</p>
            </div>
          </div>
     
        </section>

        {/* Section 2: Medical Details */}
        <section className="bg-black bg-opacity-40 rounded-xl p-6 shadow-lg relative">
         
          <h2 className="text-xl font-bold mb-4">Medical Details</h2>
          <p><strong>Condition:</strong> {editMode ? <input value={condition} onChange={(e) => setCondition(e.target.value)} className="bg-white text-black rounded px-2 py-1 border w-full" /> : condition}</p>
          <p><strong>Urgency Level:</strong> {editMode ? <input value={urgencyLevel} onChange={(e) => setUrgencyLevel(e.target.value)} className="bg-white text-black rounded px-2 py-1 border" /> : urgencyLevel}</p>
          <p><strong>Hospital:</strong> {editMode ? <input value={hospital} onChange={(e) => setHospital(e.target.value)} className="bg-white text-black rounded px-2 py-1 border" /> : hospital}</p>
          <p><strong>Doctor Contact:</strong> {editMode ? <input value={doctorContact} onChange={(e) => setDoctorContact(e.target.value)} className="bg-white text-black rounded px-2 py-1 border" /> : doctorContact}</p>
        </section>

        {/* Section 3: Request Overview */}
        <section className="bg-black bg-opacity-40 rounded-xl p-6 shadow-lg relative">
      
          <h2 className="text-xl font-bold mb-4">Request Overview</h2>
          <p><strong>Requested Units:</strong> {editMode ? <input value={requestedUnits} onChange={(e) => setRequestedUnits(e.target.value)} className="bg-white text-black rounded px-2 py-1 border" /> : requestedUnits}</p>
          <p><strong>Units Fulfilled:</strong> {editMode ? <input value={unitsFulfilled} onChange={(e) => setUnitsFulfilled(e.target.value)} className="bg-white text-black rounded px-2 py-1 border" /> : unitsFulfilled}</p>
          <p><strong>Request Date:</strong> {editMode ? <input value={requestDate} onChange={(e) => setRequestDate(e.target.value)} className="bg-white text-black rounded px-2 py-1 border" /> : requestDate}</p>
          <p><strong>Status:</strong> {editMode ? <input value={status} onChange={(e) => setStatus(e.target.value)} className="bg-white text-black rounded px-2 py-1 border" /> : status}</p>
            
        </section>

        {/* Section 4: Donor Matching */}
        <section className="bg-black bg-opacity-40 rounded-xl p-6 shadow-lg relative">
         
          <h2 className="text-xl font-bold mb-4">Donor Matching</h2>
          <p><strong>Matches Found:</strong> {matchesFound}</p>
          <p><strong>Matched Donor Contact:</strong> {editMode ? <input value={matchedDonor} onChange={(e) => setMatchedDonor(e.target.value)} className="bg-white text-black rounded px-2 py-1 border w-full" /> : matchedDonor}</p>
        </section>

        {/* Section 5: Communication */}
        <section className="bg-black bg-opacity-40 rounded-xl p-6 shadow-lg relative">
          
          <h2 className="text-xl font-bold mb-4">Communication</h2>
          <p><strong>Preferred Contact Time:</strong> {editMode ? <input value={contactTime} onChange={(e) => setContactTime(e.target.value)} className="bg-white text-black rounded px-2 py-1 border" /> : contactTime}</p>
          <p><strong>Notification Settings:</strong> {editMode ? <input value={notifications} onChange={(e) => setNotifications(e.target.value)} className="bg-white text-black rounded px-2 py-1 border w-full" /> : notifications}</p>
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
