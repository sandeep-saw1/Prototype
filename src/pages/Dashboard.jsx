import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const location = useLocation();
    const [userType, setUserType] = useState('patient'); // Default to 'patient'
    const [activeTab, setActiveTab] = useState('Overview');

    const renderPatientDashboard = () => (
        <div className="space-y-8 p-4 bg-gray-50 rounded-lg shadow-inner">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                    <div className="bg-green-100 p-3 rounded-full">
                        <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Welcome, John Patient</h2>
                        <p className="text-gray-500">Patient Dashboard</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                    <button className="flex items-center justify-center px-4 py-2 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.55-4.55a2 2 0 012.83 2.83L17.83 13H21v3h-3v3.17a2 2 0 01-2.83 2.83L10 17.83l-4.55 4.55a2 2 0 01-2.83-2.83L6.17 13H3v-3h3.17l-4.55-4.55a2 2 0 012.83-2.83L10 6.17V3h3v3.17L15 10z" /></svg>
                        Read Details
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 rounded-full bg-purple-500 text-white shadow-lg hover:bg-purple-600 transition"
                        onClick={() => window.open('https://maps.google.com/?q=Ayurveda+Centers+near+me', '_blank')}>
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.99 1.99 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        Find Centers
                    </button>
                    <button className="flex items-center justify-center px-4 py-2 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition"
                        onClick={() => window.open('https://calendar.google.com/calendar/r', '_blank')}>
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 11h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2z" /></svg>
                        Book Appointment
                    </button>
                </div>
            </div>
            <div className="flex space-x-8 border-b-2 border-gray-200 mb-6">
                <span onClick={() => setActiveTab('Overview')} className={`cursor-pointer py-2 px-4 ${activeTab === 'Overview' ? 'text-green-600 border-b-2 border-green-600 font-medium' : 'text-gray-500'}`}>Overview</span>
                <span onClick={() => setActiveTab('My Therapies')} className={`cursor-pointer py-2 px-4 ${activeTab === 'My Therapies' ? 'text-green-600 border-b-2 border-green-600 font-medium' : 'text-gray-500'}`}>My Therapies</span>
                <span onClick={() => setActiveTab('Appointments')} className={`cursor-pointer py-2 px-4 ${activeTab === 'Appointments' ? 'text-green-600 border-b-2 border-green-600 font-medium' : 'text-gray-500'}`}>Appointments</span>
                <span onClick={() => setActiveTab('Payments')} className={`cursor-pointer py-2 px-4 ${activeTab === 'Payments' ? 'text-green-600 border-b-2 border-green-600 font-medium' : 'text-gray-500'}`}>Payments</span>
                <span onClick={() => setActiveTab('Profile')} className={`cursor-pointer py-2 px-4 ${activeTab === 'Profile' ? 'text-green-600 border-b-2 border-green-600 font-medium' : 'text-gray-500'}`}>Profile</span>
            </div>
            {activeTab === 'Overview' && (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="flex items-center p-4 bg-green-100 rounded-lg shadow-md border-2 border-green-300">
                            <div className="flex-shrink-0 bg-green-200 p-2 rounded-full">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-xl font-bold text-green-800">1</h4>
                                <p className="text-sm text-green-700">Completed Therapies</p>
                            </div>
                        </div>
                        <div className="flex items-center p-4 bg-blue-100 rounded-lg shadow-md border-2 border-blue-300">
                            <div className="flex-shrink-0 bg-blue-200 p-2 rounded-full">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-xl font-bold text-blue-800">1</h4>
                                <p className="text-sm text-blue-700">Ongoing Therapies</p>
                            </div>
                        </div>
                        <div className="flex items-center p-4 bg-purple-100 rounded-lg shadow-md border-2 border-purple-300">
                            <div className="flex-shrink-0 bg-purple-200 p-2 rounded-full">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 11h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2z" /></svg>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-xl font-bold text-purple-800">2</h4>
                                <p className="text-sm text-purple-700">Upcoming Appointments</p>
                            </div>
                        </div>
                        <div className="flex items-center p-4 bg-orange-100 rounded-lg shadow-md border-2 border-orange-300">
                            <div className="flex-shrink-0 bg-orange-200 p-2 rounded-full">
                                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m4 0h1m-10-4h18a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2v-8a2 2 0 00-2-2h-3a2 2 0 01-2-2h-2" /></svg>
                            </div>
                            <div className="ml-4">
                                <h4 className="text-xl font-bold text-orange-800">₹1,500</h4>
                                <p className="text-sm text-orange-700">Pending Payments</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-green-700 text-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">Next Appointment</h3>
                            <p className="text-lg">Date: 2024-01-15 at 10:00 AM</p>
                            <p className="text-lg mt-2">Therapy: Vamana Therapy with Dr. Priya Sharma</p>
                        </div>
                        <div className="bg-blue-700 text-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-4">Current Progress</h3>
                            <p className="text-lg">Vamana Therapy</p>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                <div className="bg-green-400 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {activeTab === 'My Therapies' && (
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Therapies</h3>
                    <ul className="list-disc list-inside space-y-4 text-gray-700">
                        <li>
                            <p className="font-semibold">Panchakarma Detoxification (Ongoing)</p>
                            <p className="text-sm">Start Date: Nov 1, 2024 | Duration: 7 days</p>
                            <p className="text-sm">Therapist: Dr. Priya Sharma</p>
                        </li>
                        <li>
                            <p className="font-semibold">Vamana Therapy (Completed)</p>
                            <p className="text-sm">Date: Oct 15, 2024</p>
                            <p className="text-sm">Therapist: Dr. Rajesh Ayurveda</p>
                        </li>
                    </ul>
                </div>
            )}

            {activeTab === 'Appointments' && (
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Appointments</h3>
                    <ul className="list-disc list-inside space-y-4 text-gray-700">
                        <li>
                            <p className="font-semibold">Upcoming: Jan 15, 2025 at 10:00 AM</p>
                            <p className="text-sm">Purpose: Vamana Therapy Session</p>
                            <p className="text-sm">Therapist: Dr. Priya Sharma</p>
                        </li>
                        <li>
                            <p className="font-semibold">Upcoming: Jan 20, 2025 at 11:30 AM</p>
                            <p className="text-sm">Purpose: Follow-up Consultation</p>
                            <p className="text-sm">Therapist: Dr. Amit Kumar</p>
                        </li>
                        <li>
                            <p className="font-semibold">Completed: Oct 15, 2024</p>
                            <p className="text-sm">Purpose: Vamana Therapy</p>
                            <p className="text-sm">Therapist: Dr. Rajesh Ayurveda</p>
                        </li>
                    </ul>
                </div>
            )}

            {activeTab === 'Payments' && (
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment History</h3>
                    <ul className="list-disc list-inside space-y-4 text-gray-700">
                        <li>
                            <p className="font-semibold">Invoice #AYUR2024-001</p>
                            <p className="text-sm">Amount: ₹15,000 | Status: Paid</p>
                            <p className="text-sm">Date: Nov 1, 2024</p>
                        </li>
                        <li>
                            <p className="font-semibold">Invoice #AYUR2024-002</p>
                            <p className="text-sm">Amount: ₹5,000 | Status: Pending</p>
                            <p className="text-sm">Due Date: Dec 15, 2024</p>
                        </li>
                    </ul>
                </div>
            )}

            {activeTab === 'Profile' && (
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">My Profile</h3>
                    <div className="space-y-2 text-gray-700">
                        <p><span className="font-semibold">Name:</span> John Patient</p>
                        <p><span className="font-semibold">Email:</span> john.patient@email.com</p>
                        <p><span className="font-semibold">Phone:</span> +91 9876543210</p>
                        <p><span className="font-semibold">Address:</span> 123 Wellness Street, Ayurveda District, Mumbai</p>
                    </div>
                </div>
            )}
        </div>
    );

    const renderTherapistDashboard = () => (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 font-sans">
            {/* Sidebar */}
            <div className="w-full lg:w-1/5 bg-white shadow-xl flex flex-col items-center py-8 px-4">
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24 rounded-full border-4 border-blue-500 mb-4" src="https://placehold.co/100x100/AEC9F8/ffffff?text=Doctor" alt="Dr. Martin Deo" />
                    <h2 className="text-lg font-bold text-gray-800">Dr. Martin Deo</h2>
                    <p className="text-sm text-gray-500 text-center">MBBS, FCPS - MD (Medicine), MOPS</p>
                </div>
                <nav className="mt-8 w-full space-y-2">
                    <div className="flex items-center space-x-3 p-3 text-blue-600 bg-blue-100 rounded-lg font-semibold">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 100 16A8 8 0 0010 2zm0 14.5a6.5 6.5 0 110-13 6.5 6.5 0 010 13zM10 5a1 1 0 011 1v3h3a1 1 0 010 2h-3v3a1 1 0 01-2 0v-3H6a1 1 0 010-2h3V6a1 1 0 011-1z" clipRule="evenodd" fillRule="evenodd" /></svg>
                        <span>Dashboard</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" fillRule="evenodd" /></svg>
                        <span>Appointment</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM6 10a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" fillRule="evenodd" /></svg>
                        <span>Appointment Page</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 8a1 1 0 012 0v4a1 1 0 11-2 0V8z" clipRule="evenodd" fillRule="evenodd" /></svg>
                        <span>Payment</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM7 9a3 3 0 116 0 3 3 0 01-6 0z" clipRule="evenodd" fillRule="evenodd" /></svg>
                        <span>Profile</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" fillRule="evenodd" /></svg>
                        <span>Settings</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM6 10a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" fillRule="evenodd" /></svg>
                        <span>Logout</span>
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <input type="text" placeholder="Search" className="px-4 py-2 border rounded-full w-48 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            <svg className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.9 14.32a8 8 0 111.41-1.41l5.35 5.33a1 1 0 01-1.42 1.42l-5.33-5.35zM14 8a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>
                        </div>
                        <svg className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a1 1 0 00-1 1v3H6a1 1 0 000 2h3v3a1 1 0 002 0v-3h3a1 1 0 100-2h-3V6a1 1 0 00-1-1z" clipRule="evenodd" fillRule="evenodd" /></svg>
                        <svg className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 8a1 1 0 012 0v4a1 1 0 11-2 0V8z" clipRule="evenodd" fillRule="evenodd" /></svg>
                    </div>
                </header>

                <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                            <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM6 10a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" fillRule="evenodd" /></svg>
                        </div>
                        <div>
                            <p className="text-gray-500">Total Patient</p>
                            <h3 className="text-2xl font-bold text-gray-800">2000+</h3>
                            <p className="text-sm text-gray-400">Till Today</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                            <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM6 10a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" fillRule="evenodd" /></svg>
                        </div>
                        <div>
                            <p className="text-gray-500">Today Patient</p>
                            <h3 className="text-2xl font-bold text-gray-800">068</h3>
                            <p className="text-sm text-gray-400">21 Dec-2021</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                            <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM6 10a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" fillRule="evenodd" /></svg>
                        </div>
                        <div>
                            <p className="text-gray-500">Today Appointments</p>
                            <h3 className="text-2xl font-bold text-gray-800">085</h3>
                            <p className="text-sm text-gray-400">21 Dec-2021</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                            <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM6 10a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd" fillRule="evenodd" /></svg>
                        </div>
                        <div>
                            <p className="text-gray-500">Total Patient</p>
                            <h3 className="text-2xl font-bold text-gray-800">2000+</h3>
                            <p className="text-sm text-gray-400">Till Today</p>
                        </div>
                    </div>
                </main>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg lg:col-span-2">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Patients Summary December 2021</h3>
                        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                            <div className="flex-1 w-full md:w-auto">
                                <svg width="200" height="200" viewBox="0 0 100 100" className="mx-auto">
                                    <circle cx="50" cy="50" r="40" stroke="#FBBF24" strokeWidth="15" fill="none" strokeDasharray="251.2" strokeDashoffset="62.8" transform="rotate(-90 50 50)"></circle>
                                    <circle cx="50" cy="50" r="40" stroke="#EF4444" strokeWidth="15" fill="none" strokeDasharray="251.2" strokeDashoffset="125.6" transform="rotate(-90 50 50)"></circle>
                                    <circle cx="50" cy="50" r="40" stroke="#3B82F6" strokeWidth="15" fill="none" strokeDasharray="251.2" strokeDashoffset="188.4" transform="rotate(-90 50 50)"></circle>
                                    <circle cx="50" cy="50" r="40" stroke="#E5E7EB" strokeWidth="15" fill="none"></circle>
                                </svg>
                            </div>
                            <div className="flex-1 w-full md:w-auto">
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                                        <span>New Patients</span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                                        <span>Old Patients</span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                                        <span>Total Patients</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Today Appointment</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-4">
                                <img className="w-10 h-10 rounded-full" src="https://placehold.co/40x40/E5E7EB/ffffff?text=P1" alt="Patient M.J. Mical" />
                                <div className="flex-1">
                                    <p className="font-semibold text-gray-800">M.J. Mical</p>
                                    <p className="text-sm text-gray-500">Health Checkup</p>
                                </div>
                                <span className="text-sm text-green-500 font-semibold">On Going</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <img className="w-10 h-10 rounded-full" src="https://placehold.co/40x40/E5E7EB/ffffff?text=P2" alt="Patient Sanath Deo" />
                                <div className="flex-1">
                                    <p className="font-semibold text-gray-800">Sanath Deo</p>
                                    <p className="text-sm text-gray-500">Health Checkup</p>
                                </div>
                                <span className="text-sm text-gray-500">12 : 30 PM</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <img className="w-10 h-10 rounded-full" src="https://placehold.co/40x40/E5E7EB/ffffff?text=P3" alt="Patient Loeara Phanj" />
                                <div className="flex-1">
                                    <p className="font-semibold text-gray-800">Loeara Phanj</p>
                                    <p className="text-sm text-gray-500">Report</p>
                                </div>
                                <span className="text-sm text-gray-500">01 : 00 PM</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <img className="w-10 h-10 rounded-full" src="https://placehold.co/40x40/E5E7EB/ffffff?text=P4" alt="Patient Komola Haris" />
                                <div className="flex-1">
                                    <p className="font-semibold text-gray-800">Komola Haris</p>
                                    <p className="text-sm text-gray-500">Common Cold</p>
                                </div>
                                <span className="text-sm text-gray-500">01 : 30 PM</span>
                            </li>
                        </ul>
                        <a href="#" className="mt-4 block text-blue-500 text-sm font-semibold hover:underline">See All</a>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Patients Review</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-gray-700 font-semibold">Excellent</p>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-700 font-semibold">Great</p>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-700 font-semibold">Good</p>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                                    <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-700 font-semibold">Average</p>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                                    <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '20%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Appointment Request</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-4">
                                <img className="w-10 h-10 rounded-full" src="https://placehold.co/40x40/E5E7EB/ffffff?text=P5" alt="Patient Maria Sarafat" />
                                <div className="flex-1">
                                    <p className="font-semibold text-gray-800">Maria Sarafat</p>
                                    <p className="text-sm text-gray-500">Cold</p>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="text-white bg-green-500 p-1 rounded-full hover:bg-green-600 transition">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </button>
                                    <button className="text-white bg-red-500 p-1 rounded-full hover:bg-red-600 transition">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </div>
                            </li>
                            <li className="flex items-center space-x-4">
                                <img className="w-10 h-10 rounded-full" src="https://placehold.co/40x40/E5E7EB/ffffff?text=P6" alt="Patient Jhon Deo" />
                                <div className="flex-1">
                                    <p className="font-semibold text-gray-800">Jhon Deo</p>
                                    <p className="text-sm text-gray-500">Over sweating</p>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="text-white bg-green-500 p-1 rounded-full hover:bg-green-600 transition">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                    </button>
                                    <button className="text-white bg-red-500 p-1 rounded-full hover:bg-red-600 transition">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </div>
                            </li>
                        </ul>
                        <a href="#" className="mt-4 block text-blue-500 text-sm font-semibold hover:underline">See All</a>
                    </div>
                </div>
            </div>
        </div>
    );
    const renderAdminDashboard = () => (
        <div className="space-y-8 p-8 bg-gray-50 rounded-lg shadow-inner">
            <h2 className="text-3xl font-bold text-green-700 mb-6">Admin Dashboard</h2>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">System Overview</h3>
                <p className="text-gray-700">Gain a comprehensive overview of the entire clinic's operations. Monitor appointments, revenue, and staff performance through detailed dashboards and reports. The dashboard provides a bird's-eye view of the system's health and user activity.</p>
                <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
                    <li>- View and manage all user and therapist accounts.</li>
                    <li>- Monitor real-time clinic activity and occupancy.</li>
                    <li>- Generate detailed financial reports and analytics.</li>
                </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">User Management</h3>
                <p className="text-gray-700">You have full control over user accounts. You can add, edit, or remove users, and assign roles as needed. This includes managing both patient and therapist profiles, ensuring all data is accurate and up-to-date.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Financial Reports</h3>
                <p className="text-gray-700">Access detailed reports on clinic revenue, pending payments, and therapist earnings to ensure smooth financial operations. You can generate custom reports for specific time periods and track key performance indicators (KPIs) to aid in business decisions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Therapist Management</h3>
                <p className="text-gray-700">Manage all therapist profiles, including their specializations, availability, and performance metrics. You can onboard new therapists and offboard those who are no longer with the clinic.</p>
            </div>
        </div>
    );
    const renderDashboard = () => {
        switch (userType) {
            case 'patient':
                return renderPatientDashboard();
            case 'therapist':
                return renderTherapistDashboard();
            case 'admin':
                return renderAdminDashboard();
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                    <button
                        onClick={() => setUserType('patient')}
                        className={`px-6 py-3 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg
                            ${userType === 'patient' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                    >
                        Patient Dashboard
                    </button>
                    <button
                        onClick={() => setUserType('therapist')}
                        className={`px-6 py-3 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg
                            ${userType === 'therapist' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                    >
                        Therapist Dashboard
                    </button>
                    <button
                        onClick={() => setUserType('admin')}
                        className={`px-6 py-3 rounded-full text-lg font-semibold transition-colors duration-300 shadow-lg
                            ${userType === 'admin' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                    >
                        Admin Dashboard
                    </button>
                </div>
                {renderDashboard()}
            </div>
        </div>
    );
};

export default Dashboard;
